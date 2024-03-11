const memberService = require("../services/member.service");
const { memberRegisterValidator, memberLoginValidator } = require("../validators/member.validator");

const memberController = {

    login: async (req, res) => {
        res.render('member/login');
    },
    
    login_POST: async (req, res) => {
        // Validation du body
        let data;
        try {
            data = await memberLoginValidator.validate(req.body, { abortEarly: false });
        }
        catch (error) {
            console.log(error);
            res.render('member/login', {
                errorMessage: 'Les credentials sont necessaire ಠ╭╮ಠ',
                data: req.body
            });
            return;
        }
        
        // Récuperation du Member via les credentials
        const member = await memberService.login(data);

        // Si invalide → Regeneration du formulaire
        if(!member) {
            res.render('member/login', {
                errorMessage: 'Les credentials sont invalides !',
                data: req.body
            });
            return;
        }

        // Initialisation de la session de l'utilisateur
        console.log(member);
        req.session.user = {
            id: member._id,
            name: member.username
        };

        // Redirection vers la page d'accueil
        res.redirect('/');
    },

    logout: async (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },
    
    register: async (req, res) => {
        res.render('member/register');
    },
    
    register_POST: async (req, res) => {
        // Validation du body
        let data;
        try {
            data = await memberRegisterValidator.validate(req.body, { abortEarly: false });
        }
        catch(error) {
            console.log(error);
            res.render('member/register', { 
                errorMessage: 'Les données sont invalides',
                data: req.body
            });
            return;
        }

        // Check username is unique
        if(await memberService.usernameExists(data.username)) {
            res.render('member/register', { 
                errorMessage: 'Le pseudo n\'est pas disponible 😭',
                data: req.body
            });
            return;
        }

        // Save user in DB
        await memberService.register(data);

        // Redirection vers le login
        res.redirect('/member/login');
    },

}

module.exports = memberController;