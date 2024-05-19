
import { Link } from 'react-router-dom'
import style from './footer.module.css'

const Footer = () => {


    return(
        <footer className={style['footer']}>
            <div>
                <h1>Footer</h1>
            </div>
            <div className={style['service-container']}>
                <menu>
                    <h2>Mobayi Actu</h2>
                    <ul>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Whatsup</a></li>
                        <li><a href="">Twitter (X)</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Youtube</a></li>
                    </ul>
                </menu>
                <menu>
                    <h2>Newsletter</h2>
                    <ul> logo
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
                </menu>
                <menu>
                    <h2>Analyse</h2>
                    <ul>
                        <li><a href="#">ça fait débat</a></li>
                        <li><a href="#">Nos enquêtes</a></li>
                        <li><a href="#">Il est dit dans la sagesse</a></li>
                        <li><a href="#">Qu'en dites vous</a></li>
                        <li><a href="#">Vos questions</a></li>
                    </ul>
                </menu>
                <menu>
                    <h2>Service</h2>
                    <ul>
                        <li><a href="#">Alert !</a></li>
                        <li><a href="#">Vos annonces</a></li>
                        <li><a href="#">Vos avis</a></li>
                        <li><a href="#">vos faire part</a></li>
                        <li><a href="#">Informez nous</a></li>
                        <li><a href="#">Vos publicités</a></li>
                    </ul>
                </menu>
            </div>
        </footer>

    )
}

export default Footer