import React, { useEffect, useRef, useState } from "react";
import { ACCOUNT_LOGO, MENU, YOUTUBE_LOGO, YT_SEARCH_ICON, YT_SUGGEST_API, YT_VIDEO_SEARCH_RESULTS } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { togleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/suggestionsSlice";
import { Link, useNavigate } from "react-router-dom";
import { setSearchVideos } from '../utils/searchSlice'

export const Header = () => {
    const [searchValue, setSearchValue] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const dispatch = useDispatch()
    const suggestionRef = useRef()
    const inputRef = useRef(null);
    const suggestionCache = useSelector(store => store.suggestions);
    const navigate = useNavigate()


    const toggleHandler = () => {
        dispatch(togleMenu())
    }

    useEffect(() => {
        const timer = setTimeout(() => {

            if (suggestionCache[searchValue]) {
                // console.log(suggestionCache, 'cache')
                setSuggestions(suggestionCache[searchValue]);
            }
            else {
                getSuggestions();
            }
        }, 200);

        //Cleanup Code
        return () => {
            clearTimeout(timer);
        }
    }, [searchValue]);

    const getSuggestions = async () => {
        console.log(searchValue, 'api call')
        const data = await fetch(YT_SUGGEST_API + searchValue)
        const json = await data.json()
        setSuggestions(json[1])
        setShowSuggestions(true)
        dispatch(cacheResults({
            [searchValue]: json[1]
        }))
    }

    useEffect(() => {

        let handler = (e) => {
            if (!suggestionRef.current?.contains(e.target)) {
                setShowSuggestions(false)
            }
        }
        document.addEventListener('mousedown', handler)

        return () => document.removeEventListener('mousedown', handler)
    }, [showSuggestions])


    const handleSearch = async (item) => {
        console.log(YT_VIDEO_SEARCH_RESULTS + item)
        const vidRes = await fetch(YT_VIDEO_SEARCH_RESULTS + item);
        const vidJson = await vidRes.json();
        console.log(vidJson.items[0], 'handle search')
        dispatch(setSearchVideos(vidJson.items));
        navigate('/results');
        setShowSuggestions(false);
    }


    return (
        <div className="grid grid-flow-col p-5 shadow-md">
            <div className="flex col-span-3  gap-4">
                <img onClick={() => toggleHandler()} className="h-5 cursor-pointer" src={MENU} alt='menu' />
                <a href='/'><img className="h-5" src={YOUTUBE_LOGO} alt='youtube-logo' /></a>
            </div>
            <div className=" flex-col col-span-6 items-center ">
                <div className="flex">
                    <input className="border border-gray-300 rounded-l-full px-5 h-9 w-3/4 flex justify-center"
                        placeholder="search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button className="border border-gray-300 rounded-r-full  p-2 h-9 w-12 flex justify-center"><img className="h-4" src={YT_SEARCH_ICON} alt='search' /></button>
                </div>

                {showSuggestions &&
                    <div ref={suggestionRef} className="absolute  w-[38rem] h-auto rounded-lg shadow-sm bg-slate-100"

                    >
                        <ul >
                            {suggestions.map((item, index) => (

                                <li key={item}
                                    className="hover:bg-gray-200 py-2 px-2 rounded-lg cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleSearch(item);
                                    }}
                                >{item}</li>


                            ))}
                        </ul>
                    </div>
                }
            </div>
            <div className="flex col-span-3 justify-center">
                <img className="h-6" src={ACCOUNT_LOGO} alt="account" />
            </div>
        </div>
    );
};

export default Header