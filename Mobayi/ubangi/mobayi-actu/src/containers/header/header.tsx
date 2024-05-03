
import style from './header.module.css'
import logoUrl from './logo.png'
import vagues from './vague.png'
import vagues2 from './vague-2.png'
import { Link } from 'react-router-dom';



const Header = () => {

    

    return (
        <header className={style['header']}>
            <Link to={"/news"} className={style["local-actu"]}>
                <img src={vagues2} alt="" />
            </Link>
            <Link to={"/"} className={style['logo']}>
                <img src={logoUrl} alt="Mobayi Actu" />
            </Link>
            <Link to={"/donate"} className={style["don"]}>
                <span>Faire un don</span>
            </Link>

        </header>
    );
};

export default Header;