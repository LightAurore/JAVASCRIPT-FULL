
import {Link} from 'react-router-dom'



const Navbar = () => {

    

    return (

            <nav>
                <ul className="menu">
                    <li className="menu-item">
                        <Link to="/"><b>Accueil</b></Link>
                    </li>
                    
                    <li className="menu-item">
                        <Link to="article"><b>Articles</b></Link>
                    </li>
                    
                    <li className="menu-item">
                        <Link to="about"><b>A-propos</b></Link>
                    
                    </li>
                    
                    <li className="menu-item">
                        <Link to="contact"><b>Contact</b></Link>
                    </li>

                </ul>

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
  
    );
};

export default Navbar;