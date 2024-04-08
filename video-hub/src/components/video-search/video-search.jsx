import axios from "axios";
// import 'dotenv/config';


const API_KEY = import.meta.env.API_KEY;

const location = "picsou"


const VideoSearch = () => {

    const listVideo = async() => {

        /*
            https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=API_KEY
     &fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics

            https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${API_KEY}
     &part=snippet,statistics&fields=items(id,snippet,statistics)



        */

       /*  await axios.get(`https://www.googleapis.com/youtube/v3/search/list?q=picsou
   `, {
    key: API_KEY,
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin':  '*',
    }
   }) */
        await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=5&q=${location}`)
        .then(resp => {
            console.log(resp.status)
            console.log(resp.fileDetails)
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