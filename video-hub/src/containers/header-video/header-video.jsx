import LogoSite from "../../components/logo-site/logo-site";
import SideNav from "../../components/side-nav/side-nav";
import UserNotify from "../../components/user-notification/user-notification";
import VideoSearch from "../../components/video-search/video-search";

import style from './headerStyle.module.css'


const HeaderVideo = () => {


    return (
        <header className={style["header-container"]}>
            <SideNav />
            <LogoSite />
            <VideoSearch />
            <UserNotify />
        </header>
    )
}

export default HeaderVideo;