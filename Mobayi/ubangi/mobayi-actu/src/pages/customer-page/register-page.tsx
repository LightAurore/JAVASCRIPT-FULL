import style from './customer.module.css'
import sia from './sia-sese.png'



const RegisterPage = () => {

    return(
        <>
            <form className={style["customer-form"]} >
            <figure>
                <img src={sia} alt="logo" />
                <i className={style['site-name']}>
                    <h3>Mobayi Sia</h3>
                </i>
            </figure>
            <h2>Connexion</h2>
                <div>

                </div>
                <div>
                    <label htmlFor="input-username">Nom d'utilisateur</label>
                    <input type="text" id="input-username" name="username" />
                </div>
                <div>
                    <label htmlFor="input-firstname">Prénom</label>
                    <input type="text" id="input-firstname" name="firstname" />
                </div>
                <div>
                    <label htmlFor="input-lastname">Nom</label>
                    <input type="text" id="input-lastname" name="lastname" />
                </div>
                <div>
                    <label htmlFor="input-mail">E mail</label>
                    <input type="email" id="input-mail" name="mail" />
                </div>
                <div>
                    <label htmlFor="input-pwd">Mot de passe</label>
                    <input type="password" name="password" id="input-pwd" />
                </div>
                <div>
                    <label htmlFor="input-confirm">Confirmer mot de passe</label>
                    <input type="password" name="confirm" id="input-confirm" />
                </div>
                <div>
                    <span>
                        <input type="checkbox" name="policy" id="policy" /> J'accepte la <a href="#">Politique de confidentialité</a>
                    </span>
                </div>
                <div>
                    <button type='submit'>Enregistrer</button>
                    <button type='reset'>Effacer</button>
                </div>
                <div>
                    <span>Si tu as déjà un compte : <a href="/customer/login">connexion</a></span>
                </div>

            </form>
        </>
        
    )
}
export default RegisterPage;