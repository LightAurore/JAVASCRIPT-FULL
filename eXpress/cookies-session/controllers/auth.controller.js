const authController = {
    register: (req, res) => {
         res.resetStatus(501);
    },

    register_post: (req, res) => {
        res.resetStatus(501);
    },

    login: (req, res) => {
        res.render("auth/login")
    },

    login_post: (req, res) => {
        // récupérer les données du body 
        const { username, password } = req.body;

        // test (basique) les credentials
        if(['zaza', 'balthy'].find(name => name === username?.toLowerCase()) !== 'zaza' || password !== "test1234="){
            const viewData = {
                errorMessage : "Les credentials sont invalides"
            }
            res.render("auth/login", viewData);
            return;
        }

        // TODO Gestion de la session
        req.session.user = {
            name: username,
            role:username.toLowerCase() === "balthy" ? "Admin" : "User"
        }

        req.session.isLog = true;

        res.redirect('/');
    },

    logout: (req, res) => {
        //  TODO Clear la session
        req.session.destroy();

        // Redirection de l'utilisateur
        res.redirect('/');
    }
}

module.exports = authController;