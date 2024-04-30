
import { Link } from 'react-router-dom';
import styles from './nav-bar.module.css'



const Navbar = () => {

    

    return (
        <nav className={styles["nav-bar"]}>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="news">Actualités</Link>
                </li>
                <li>
                    <Link to="policy">Politique</Link>
                </li>
                <li>
                    <Link to="society">Société</Link>
                </li>
                <li>
                    <Link to="culture">Culture</Link>
                </li>
                <li>
                    <Link to="science">Science</Link>
                </li>
                <li>
                    <Link to="economy">Economie</Link>
                </li>
            </ul>

        </nav>


            // <nav>
            //     <ul className="menu">
            //         <li className="menu-item">
            //             <Link to="/"><b>Accueil</b></Link>
            //         </li>
                    
            //         <li className="menu-item">
            //             <Link to="article"><b>Articles</b></Link>
            //         </li>
                    
            //         <li className="menu-item">
            //             <Link to="about"><b>A-propos</b></Link>
                    
            //         </li>
                    
            //         <li className="menu-item">
            //             <Link to="contact"><b>Contact</b></Link>
            //         </li>

            //     </ul>

            
  
    );
};

export default Navbar;