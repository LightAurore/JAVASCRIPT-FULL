
import { Link } from 'react-router-dom';
import styles from './nav-bar.module.css'
import { useTranslation } from 'react-i18next';



const Navbar = () => {

    const { t } = useTranslation();

    return (
        <nav className={styles["nav-bar"]}>
            <ul>
                <li>
                    <Link to="/">{t('nav.home')}</Link>
                </li>
                <li>
                    <Link to="news">{t('nav.news')}</Link>
                </li>
                <li>
                    <Link to="politic">{t('nav.politic')}</Link>
                </li>
                <li>
                    <Link to="society">{t('nav.society')}</Link>
                </li>
                <li>
                    <Link to="culture">{t('nav.culture')}</Link>
                </li>
                <li>
                    <Link to="science">{t('nav.science')}</Link>
                </li>
                <li>
                    <Link to="economy">{t('nav.economy')}</Link>
                </li>
            </ul>

        </nav>

            
  
    );
};

export default Navbar;