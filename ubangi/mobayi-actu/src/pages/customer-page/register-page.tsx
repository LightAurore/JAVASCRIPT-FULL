import { useState } from 'react'
import style from './customer.module.css'
import sia from './sia-sese.png'


const pseudoRegex = /^([a-z][a-z0-9]*)?$/i;

const RegisterPage = () => {

    const [inputs, setInputs] = useState({ username:'', firstname:'', lastname:'', mail:'', password:'', confirm:'', policy: false })


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        

        const userData = { 
            username: inputs.username, 
            firstname: inputs.firstname, 
            lastname: inputs.lastname, 
            mail: inputs.mail, 
            password: inputs.password, 
            confirm: inputs.confirm, 
            policy: inputs.policy 

        };
        
        

        // clear form
        setInputs({ username:'', firstname:'', lastname:'', mail:'', password:'', confirm:'', policy: false })
        
        console.log(userData)

    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, checked, value } = e.target;

        setInputs({
            ...inputs,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    return(
        <>
            <form className={style["customer-form"]} onSubmit={handleSubmit} >
            <figure>
                <img src={sia} alt="logo" />
                <i className={style['site-name']}>
                    <h3>Mobayi Sia</h3>
                </i>
            </figure>
            <h2>Connexion</h2>
            
                <div>
                    <label htmlFor="input-username">Nom d'utilisateur</label>
                    <input onChange={handleInput} value={inputs.username} type="text" id="input-username" name="username" required />
                </div>
                <div>
                    <label htmlFor="input-firstname">Prénom</label>
                    <input onChange={handleInput} value={inputs.firstname} type="text" id="input-firstname" name="firstname" required />
                </div>
                <div>
                    <label htmlFor="input-lastname">Nom</label>
                    <input onChange={handleInput} value={inputs.lastname} type="text" id="input-lastname" name="lastname" required />
                </div>
                <div>
                    <label htmlFor="input-mail">E mail</label>
                    <input onChange={handleInput} value={inputs.mail} type="email" id="input-mail" name="mail" required />
                </div>
                <div>
                    <label htmlFor="input-pwd">Mot de passe</label>
                    <input onChange={handleInput} value={inputs.password} type="password" name="password" id="input-pwd" required />
                </div>
                <div>
                    <label htmlFor="input-confirm">Confirmer mot de passe</label>
                    <input onChange={handleInput} value={inputs.confirm} type="password" name="confirm" id="input-confirm" required />
                </div>
                <div>
                    <span>
                        <input onChange={handleInput} type="checkbox" name="policy" id="policy" checked={inputs.policy} required/> J'accepte la <a href="#">Politique de confidentialité</a>
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