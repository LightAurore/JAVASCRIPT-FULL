// npm
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { MongoClient } from "mongodb";
const uri = "mongodb://localhost:27017";

// local
import { useTranslation } from 'react-i18next';
import style from './customer.module.css'
import sia from './sia-sese.png'
import { tokenAtom } from '../../atoms/token.atom';
import { useState } from 'react';




const inputRegex = /^([a-z][a-z0-9]*)?$/i;
const LoginPage = () => {
    //State
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // Traduction
    const { t } = useTranslation();

    // jwt
    const [token, setToken] = useRecoilState(tokenAtom);

    // form Input
    const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(inputRegex.test(e.target.value)) {
            setUsername(e.target.value)
        }
    }
    const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(inputRegex.test(e.target.value)) {
            setPassword(e.target.value)
        }
    }

    // form data
    const handleLoginSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const data = {username, password};
        console.log(data);
        
        // ? TO REPARE
        // Requete AJAX vers l'API
        axios.post('customer/login', data, {
            baseURL: 'mongodb://localhost:27017/Mobayi-Actu/Customer'
        }).then(response => {
            console.log(response.data);
            setToken(response.data.token);

        }).catch(error => {
            console.log(error);
        })
        setUsername('');
        setPassword('');
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
                <input onChange={handleInputUsername} type="text" id="input-username" name="username" value={username} />
            </div>
            <div>
                <label htmlFor="input-pwd">{t('profil.password')}</label>
                <input onChange={handleInputPassword} type="password" name="password" id="input-pwd" value={password} />
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