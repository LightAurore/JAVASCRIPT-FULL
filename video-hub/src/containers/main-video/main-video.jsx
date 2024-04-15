import VideoDisplayer from "../../components/video-displayer/video-displayer";
import VideoList from "../../components/video-list/video-list";

import style from './main.module.css';


const MainVideo = (video) => {

    console.log(video)

    return (
        <main className={style["main"]}> 

            <VideoDisplayer />
            
            <VideoList />

            
            
        </main>
    )
}

MainVideo.defaultProps= {
    video: []
}

export default MainVideo;