import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import Loader from "./Loader";
import Comments from "./CommentsContainer";

const WatchPage = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const param = searchParams.get('v')
    const location = useLocation();
    // const { video } = location.state;
    console.log(location,'locations');

    console.log(searchParams)

    useEffect(() => {
        dispatch(closeMenu())
    }, [])


    return (
        <div className="pl-10 pt-2">


            <iframe
                src={"https://www.youtube.com/embed/" + param + "?autoplay=1"}
                title="Youtube Video"
                width="960"
                height="520"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                autoPlay
            />

            <Comments />
        </div>);
};

export default WatchPage;
