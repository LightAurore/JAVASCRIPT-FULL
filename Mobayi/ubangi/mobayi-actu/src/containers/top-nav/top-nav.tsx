import { Link } from "react-router-dom"


const Topnav = () => {



    return(
        <nav>
            <ul className="profil">
                    
                    
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