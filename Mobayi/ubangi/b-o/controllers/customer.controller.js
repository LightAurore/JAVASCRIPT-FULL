// Mockup des données (Fake Data)
const customerService = require('../services/customer.service');
const { customerRegisterValidator, customerLoginValidator } = require('../validators/customer.validator');
const customerData = require('./mockups/customer-data.json');
//     "caste": ["customer", "admin", "censor", "redactor"]

const customerController = {
    // admin
    list: async (req, res) => {
        const data = {
            people : customerData.map((customer) => ({
                firstname : customer.firstname,
                lastname: customer.lastname,
                url: `/customer/${customer.id}`
            }))
        };
        res.render('customer/customer-list', data);
    },

    detail: async (req, res) => {
        const id = parseInt(req.params.id);
        const customer = customerData.find(p => p.id === id);

        if(!customer) {
            res.render('customer/customer-notfound');
            return;
        }
        
        const data = {
            customer: {
                ...customer,
                profileUrl: `/files/images/${customer.profileImg}`
            }
        };
        res.render('customer/customer-detail', data);
    },
    
    delete: async (req, res) => {
        res.sendStatus(501);
    },
    bloqued: async (req, res) => {
        res.sendStatus(501);
    },

    // user
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
                const { username, password } = data;
                console.log(data);

                if(['zaza', 'balthy'].find(name => name === username?.toLowerCase())  || password !== 'Test1234=') {
                    // Test (basique) des credentials pour le rôle 
                    // Gestion de la session
                    req.session.user = {
                        id: customer._id,
                        name: username,
                        role: username.toLowerCase() === 'balthy' ? 'Admin' : 'User'
                    };

                    req.session.isLog = true;
                }else {
                    req.session.user = {
                        id: customer._id,
                        name: customer.username
                    };
                }
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