// npm
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

// local
import { useTranslation } from 'react-i18next';
import style from './customer.module.css'
import sia from './sia-sese.png'
import { tokenAtom } from '../../atoms/token.atom';





const LoginPage = () => {
    // Traduction
    const { t } = useTranslation();

    // jwt
    const [token, setToken] = useRecoilState(tokenAtom);

    // form data
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        const username= e.target['username'].value;
        const password= e.target['password'].value;

        const data = {username, password};
        console.log(data);
        
        // ? TO REPARE
        // Requete AJAX vers l'API
        axios.post('customer/login', data, {
            baseURL: 'http://localhost:8585/api/'
        }).then(response => {
            console.log(response.data);
            setToken(response.data.token);

        }).catch(error => {
            console.log(error);
        })

    }

    if(!!token) {
        return <Navigate to='/' />
    }

    return(
        <form  
            onSubmit={handleLoginSubmit} 
            className={style["customer-form"]}
        >
            <figure>
                <img src={sia} alt="logo" />
                <i className={style['site-name']}>
                    <h3>Mobayi Sia</h3>
                </i>
            </figure>
            <h2>Connexion</h2>

            <div>
                <label htmlFor="input-username">{t('profil.username')}</label>
                <input type="text" id="input-username" name="username" />
            </div>
            <div>
                <label htmlFor="input-pwd">{t('profil.password')}</label>
                <input type="password" name="password" id="input-pwd" />
            </div>
            <div>
                <span>
                    <a href="/customer/forgot-password">{t('profil.forgetpwd')} ?</a>
                </span>
            </div>

            <div>
                <button type="submit">{t('profil.login')}</button>
            </div>
            <div>
                <span><a href="/customer/register"> {t('profil.registered')}</a>
                </span>
            </div>
        </form>
    )
}

export default LoginPage;