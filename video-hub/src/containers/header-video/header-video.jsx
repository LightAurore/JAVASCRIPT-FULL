import LogoSite from "../../components/logo-site/logo-site";
import SideNav from "../../components/side-nav/side-nav";
import UserNotify from "../../components/user-notification/user-notification";
import VideoSearch from "../../components/video-search/video-search";

import style from './headerStyle.module.css'


const HeaderVideo = ({onMiningData}) => {

    const handleSearchVid = (data) => {

        console.log('--- Header Data ---')
        // data.map((item) => {
        //     console.table(item)
        // })
        

        onMiningData(data);
        
        console.log(data);
    }


    return (
        <header className={style["header-container"]}>
            <SideNav />
            <LogoSite />
            <VideoSearch onSearchVid={handleSearchVid}/>
            <UserNotify />
        </header>
    )
}

HeaderVideo.defaultProps = {
    onMiningData: () => {}
}

export default HeaderVideo;