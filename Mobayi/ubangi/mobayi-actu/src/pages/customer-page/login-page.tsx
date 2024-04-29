

const LoginPage = () => {


    return(
        <form method="post">
            <h2>Connexion</h2>
            <div>
                <label htmlFor="input-username"></label>
                <input type="text" id="input-username" name="username" />
            </div>
            <div>
                <label htmlFor="input-pwd"></label>
                <input type="password" name="password" id="input-pwd" />
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