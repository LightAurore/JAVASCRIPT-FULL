import Displayer from "../displayer/displayer";
import VideoGallery from "../video-gallery/video-gallery";


const VideoDisplayer = () => {

    const isVidSearch = true;

    return (
        <section>
            {
            isVidSearch ? 
            <Displayer />
            :
            <VideoGallery />
            }
        </section>
    )
}

export default VideoDisplayer;