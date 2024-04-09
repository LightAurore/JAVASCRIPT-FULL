import axios from "axios";
import { useState } from "react";
// import 'dotenv/config';





const VideoSearch = () => {
    const [video, setVideo] = useState([])

    const listVideo = async() => {
        
 
        await axios.get(`https://www.googleapis.com/youtube/v3/search`,
        {
            params:{
                q: 'picsou',
                type: 'video',
                key: import.meta.env.API_KEY,
                part: 'snippet'
        }})
        .then(resp => {
            const vidData = resp.data.items;
            for(const key in vidData){
                const data = {
                    channel: vidData[key].snippet.channelTitle,
                    desc: vidData[key].snippet.description,
                    vidRefId: vidData[key].id.videoId
                }

                setVideo((video) => [...video, data]);
            }

            console.log(video);

            /*
                https://www.youtube.com/watch?v=ZkNG47vgfgY
            */
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    listVideo()


    return (
        <form>
            <div>
                <input type="search" name="" id="" />
                <button>search</button>
            </div>

            <div>
                <input type="file" />
            </div>
        </form>
    )
}

export default VideoSearch;