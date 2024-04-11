import axios from "axios";
import { useCallback, useEffect, useState } from "react";
// import 'dotenv/config';


const fakeData = [
    {
        channel: "AIREMPLOI Espace Orientation ",
        title: "Julie, Ingénieure en Intelligence Artificielle",
        vidRefId: "h6qReMbUegc"
    },
    {
        channel: "Disney Channel Belgique",
        title: "La Bande à Picsou et l'Atlantide I La Bande à Picsou I Disney Channel BE",
        vidRefId: "taw2cr0qdoo"
    },
    {
        channel: " Le Parisien",
        title: "Voici le robot humanoïde le plus réaliste au monde",
        vidRefId: "Oi-W1O17VZE"
    },
    {
        channel: "France 3 Grand Est",
        title: "Le petit robot Nao aide les enfants autistes",
        vidRefId: "UFEzx9Q9P0s"
    },
    {
        channel: "Ultimate Fact",
        title: "20 Amazing Robot Animals That Will Blow Your Mind",
        vidRefId: "C_tiur59Q2E"
    },
    {
        channel: "The Verge",
        title: "Facebook's Cambridge Analytica data scandal, explained",
        vidRefId: "VDR8qGmyEQg"
    }
]


const VideoSearch = ({onSearchVid}) => {
    const [video, setVideo] = useState([...fakeData]);
    const [titleVid, setTitleVid] = useState('');

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
                    title: vidData[key].snippet.title,
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

    // listVideo()


    useEffect(() =>{
        console.log('----- titleVid -----');
        console.log(titleVid);
    },[titleVid])

    const handleSubmit = useCallback(function(){

        onSearchVid(video);

        console.log('----- data -----');
        console.log(video);

    },[video]
)

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="search" id={titleVid} value={titleVid} onChange={(e) => setTitleVid(e.target.value)} />
                <button type="submit">Rechercher</button>
            </div>
        </form>
    )
}

VideoSearch.defaultProps = {
    onSearchVid: () => {}
}

export default VideoSearch;