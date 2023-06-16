import { useNavigate } from "react-router-dom";


const VideoCard = ({ info }) => {

    if (!info) return null
    const { snippet, statistics, } = info;

    const { viewCount } = statistics
    const { publishedAt, channelTitle, title, thumbnails } = snippet

    return (
        <div className="flex flex-col shadow-md p-3 w-64" >
            <div className="flex flex-col">
                <img className="rounded-lg" src={thumbnails.medium.url} />
                <h3 className="mt-3">{title}</h3>
                <h6 className="text-gray-600 text-sm ">{channelTitle}</h6>
            </div>
            <ul className="flex">
               
            
                <li className="text-gray-600 text-sm ">{viewCount} Views</li>
            </ul>
          
        </div>
    )
}

export default VideoCard;