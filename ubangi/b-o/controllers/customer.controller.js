// Mockup des données (Fake Data)
const customerService = require('../services/customer.service');
const roleService = require('../services/role.service');
const { customerRegisterValidator, customerLoginValidator, casteAddValidator } = require('../validators/customer.validator');


const customerController = {
    // admin
    getAll: async (req, res) => {
        if(!req.session.isLog) {
            res.redirect('/customer/login');
            return;
        }

        // if(req.session.user.role !== 'Censor') {
        //     res.redirect('/error404');
        //     return;
        // }

        const customers = await customerService.getAll();
        console.log(customers);

        const listLength = customers.length;

        res.render('customer/list', {customers, listLength});
    },

    getOneById: async (req, res) => {
        const id = req.params.id;
        console.log("1. controller");
        console.log(id);

        // const customerName = await customerService.getOne("qsqs");

        const customer = await customerService.getOne(id);

        console.log('Sortie de service');
        console.log(customer);

        if(!customer) {
            res.render('customer/customer-notfound');
            return;
        }
        
        // const data = {
        //     customer: {
        //         ...customer,
        //         profileUrl: `/files/images/${customer.profileImg}`
        //     }
        // };

        res.render('customer/detail', {...customer});
    },

    addRole: async (req, res) =>{

        //"caste": ["customer", "admin", "censor", "redactor"]

        // Si on n'est pas connecté → Redirection sur la page login
        /* const userId = req.session.user?.id;  // res.locals.session.user?.id;
        console.log(userId);
        if(!userId) {
            res.redirect('/customer/login');
            return;
        }
 */
        // Donnée initial du form
        const data= {};
        // Rendu du formulaire
        res.render('customer/caste-form', { data });
    },
    
    addRole_POST: async (req, res) => {

        // Si on n'est pas connecté → Erreur !
        /* const userId = req.session.user?.id;
        if(!userId) {
            res.sendStatus(400);
            return;
        }
 */
        
        let data;
        try {
            data = await casteAddValidator
                            .noUnknown()
                            .validate(req.body, { abortEarly: false });
        }
        catch(error) {
            //! Création d'un objet error sur base de l'erreur de Yup
            const validationError= {};
            for(const fieldError of error.inner) {
                const path = fieldError.path;
                const message = fieldError.errors[0];
                
                if(!validationError.hasOwnProperty(path)) {
                    validationError[path] = message;
                }
            }
            
            res.render('customer/caste-form', {
                error: validationError,
                data: req.body
            });
            return;
        }
        
         // Save article in DB
         await roleService.create({
            role_name: data.role_name
        });

        // Redirection vers la page accueil (ou page detail)
        res.redirect('/casting/customer');
    },

    toggleRole: async (req, res) =>{
        const id = req.params.id;
        console.log("1. controller");
        console.log(id);

        const customer = await customerService.assign(id);

        console.log('Sortie de service');
        console.log(customer);

        if(!customer) {
            res.render('customer/customer-notfound');
            return;
        }
        
        res.render('customer/detail', {...customer});
    },
    
    sendReport: async (req, res) => {
        res.sendStatus(501);
    },
    hidden: async (req, res) => {
        const id = req.params.id;
        console.log("1. controller");
        console.log(id);

        const customer = await customerService.hide(id);

        console.log('Sortie de service');
        console.log(customer);

        if(!customer) {
            res.render('customer/customer-notfound');
            return;
        }
        
        res.render('customer/detail', {...customer});
    },

    banned: async (req, res) => {
        const id = req.params.id;
        console.log("1. controller");
        console.log(id);

        const customer = await customerService.ban(id);

        console.log('Sortie de service');
        console.log(customer);

        if(!customer) {
            res.render('customer/customer-notfound');
            return;
        }
        
        res.render('customer/detail', {...customer});
    },

    // customer
    register: async (req, res) =>{
        res.render('customer/register');
    },

    register_POST: async (req, res) =>{
        // Validation du body
        let data;
        try {
            data = await customerRegisterValidator.validate(req.body, { abortEarly: false });
            console.log('************************* Enregistrer *************************');
            console.log(data)
        }
        catch(error) {
            console.log(error);
            res.render('customer/register', { 
                errorMessage: 'Les données sont invalides',
                data: req.body
            });
            return;
        }

        // Check username is unique
        if(await customerService.usernameExists(data.username)) {
            res.render('customer/register', { 
                errorMessage: 'Le pseudo n\'est pas disponible 😭',
                data: req.body
            });
            return;
        }

        // Save user in DB
        await customerService.register(data);

        // Redirection vers le login
        res.redirect('/customer/login');
    },

    login: async (req, res) =>{
        res.render('customer/login')
    },

    login_POST: async (req, res) =>{
        {
            // Validation du body
            let data;
            try {
                console.log("je suis dans le try");
                data = await customerLoginValidator.validate(req.body, { abortEarly: false });
            }
            catch (error) {
                console.log(error);
                res.render('customer/login', {
                    errorMessage: 'Les credentials sont necessaire ಠ╭╮ಠ',
                    data: req.body
                });
                return;
            }

            console.log(data)
            
            // Récuperation du Member via les credentials
            const customer = await customerService.login(data);
    
            // Si invalide → Regeneration du formulaire
            if(!customer) {
                console.log('Les credentials sont invalides !');
                
                const viewData = {
                    errorMessage : 'Les credentials sont invalides',
                    data: req.body
                };
                res.render('customer/login', {...viewData});
                return;
            } else{
                // Test (basique) des credentials pour le rôle 
                // Gestion de la session
                req.session.user = {
                    id: customer._id,
                    name: data.username,
                    role: customer.role
                };

                req.session.isLog = true;
                
                /* 
                // Enregistrer des données dans sessionStorage
                sessionStorage.setItem("clé", "valeur");

                // Récupérer des données depuis sessionStorage
                var data = sessionStorage.getItem("clé");

                // Supprimer des données de sessionStorage
                sessionStorage.removeItem("clé");

                // Supprimer toutes les données de sessionStorage
                sessionStorage.clear();

                */

            }
            // Redirection vers la page d'accueil
            res.redirect('/');
        }
        
    },

    logout: async (req, res) =>{
        // Clear la session
        req.session.destroy();

        // Redirection de l'utilisateur
        res.redirect('/');
    }
};

module.exports = customerController;