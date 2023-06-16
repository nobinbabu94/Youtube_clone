import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchResultCard from './SearchResultCard';
import { Link } from 'react-router-dom';
import { openMenu } from '../utils/appSlice';
import Loader from './Loader';

const SearchResults = () => {
  const dispatch = useDispatch()
  const videoList = useSelector((store) => store.searchResults);
  console.log(videoList, 'list');

  useEffect(() => {
    dispatch(openMenu())
  }, [])

  return (
    <>
      {videoList.length === 0 ? <Loader/>:

        <div className='m-10 '>
          {videoList.map(video => {
            return (

              <Link to={'/watch?v=' + video.id.videoId} key={video.id.videoId}>
                <SearchResultCard data={video} />
              </Link>
            )
          })}
        </div>
      }
    </>
  )
}

export default SearchResults
