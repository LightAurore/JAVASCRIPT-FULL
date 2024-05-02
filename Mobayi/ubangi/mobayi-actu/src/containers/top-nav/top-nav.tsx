import Select from 'react-select';
import { Link } from "react-router-dom";
import style from "./top-nav.module.css";
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../lang/lang';



const Topnav = () => {


    const { i18n } = useTranslation();

    const languageOptions = LANGUAGES.map(lang => ({
        value: lang.code,
        label: lang.label,
        image: lang.flag
    }));
    
    const languageDefaultValue = languageOptions.find(lang => lang.value == i18n.language);

    const handleChangeLanguage = (data) => {
        i18n.changeLanguage(data.value);
    }

    const { t } = useTranslation();


    return(
        <nav className={style["topnav"]}>

            <Select
                defaultValue={languageDefaultValue}
                options={languageOptions}
                onChange={handleChangeLanguage}
                formatOptionLabel={data => (
                    <div className={style.option}>
                        <img src={data.image} alt={data.label} />
                        <span>{data.label}</span>
                    </div>
                )}
            />


            <ul className={style["profil"]}>
                    
                    <li className="profil-item">
                        <Link to="#">{t('customer.notify')}</Link>
                    </li>
                    <li className="profil-item">
                        <Link to="register">{t('customer.register')}</Link>
                    </li>
                    <li className="profil-item">
                        <Link to="login">{t('customer.login')}</Link>
                    </li>
                    <li className="profil-item">
                        <Link to="logout">{t('customer.logout')}</Link>
                    </li>
                    
            </ul>
        </nav>
    )
}

export default Topnav;