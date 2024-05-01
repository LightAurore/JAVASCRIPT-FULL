import { Link } from "react-router-dom";
import style from "./top-nav.module.css"


const Topnav = () => {



    return(
        <nav className={style["topnav"]}>
            <ul className={style["profil"]}>
                    
                    
                    <li className="profil-item">
                        <Link to="logout">se déconnecter</Link>
                    </li>
                    
                    <li className="profil-item">
                        <Link to="register">s'inscrire</Link>
                    </li>
                    <li className="profil-item">
                        <Link to="login">se connecter</Link>
                    </li>
                    
                </ul>
            </nav>
    )
}

export default Topnav;