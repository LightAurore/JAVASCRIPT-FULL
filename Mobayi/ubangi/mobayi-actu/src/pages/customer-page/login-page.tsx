import style from './customer.module.css'
import sia from './sia-sese.png'
const LoginPage = () => {


    return(
        <form className={style["customer-form"]}>
            <figure>
                <img src={sia} alt="logo" />
                <i className={style['site-name']}>
                    <h3>Mobayi Sia</h3>
                </i>
            </figure>
            <h2>Connexion</h2>
            <div>
                <label htmlFor="input-username">Nom d'utilisateur</label>
                <input type="text" id="input-username" name="username" />
            </div>
            <div>
                <label htmlFor="input-pwd">Mot de passe</label>
                <input type="password" name="password" id="input-pwd" />
            </div>
            <div>
                <span>
                    <a href="/customer/forgot-password">Mot de passe oublié?</a>
                </span>
            </div>

            <div>
                <button type="submit">Se connecter</button>
            </div>
            <div>
                <span>Si tu n'est inscrit : <a href="/customer/register">inscription</a></span>
            </div>
        </form>
    )
}

export default LoginPage;