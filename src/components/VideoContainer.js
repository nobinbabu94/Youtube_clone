import { useEffect, useState } from "react";
import { YT_VIDEOS_API } from "../constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Loader from "./Loader";


const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    const YT_API_KEY = process.env.YOUTUBE_API_KEY
    useEffect(() => {
        getYoutubeVideos()
    }, [])

    const getYoutubeVideos = async () => {
        const data = await fetch(YT_VIDEOS_API + YT_API_KEY);
        const json = await data.json()
        setVideos(json.items)
    }
    return (
        <>
            {videos.length === 0 ? <Loader /> :

                <div className="flex flex-wrap  m-5">
                    {
                        videos.map((video) =>
                            <Link key={video.id}  to={'/watch?v=' + video.id}>
                                <VideoCard
                                    info={video}
                                />
                            </Link>
                        )
                    }
                </div>
            }
        </>
    )
}

export default VideoContainer;