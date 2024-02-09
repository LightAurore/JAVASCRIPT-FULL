# routes :  
    /api/products
        get - post - put - patch - delete
    
    /api/ users
        get - post


# controller : 
    productController
    GetPage
    PostPage
    (getAll, getByts...)

# services : 
    productService
        getAll
        getById


        ORM 
        Mongoose (mongo)
        Sequelize (sql)

# model : 
    productModel
    userModel

# views : 
    seulement si templating



# structure des codes (https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP)
    200 : succès de la requête ;
    301 et 302 : redirection, respectivement permanente et temporaire ;
    401 : utilisateur non authentifié ;
    403 : accès refusé ;
    404 : ressource non trouvée ;
    500, 502 et 503 : erreurs serveur ;
    504 : le serveur n'a pas répondu.

    1xx - Information
    2xx - Succès
    3xx - Redirection
    4xx - Erreur du client HTTP

# Middleware : 
    est un logiciel (intergiciel) qui agit comme intermédiaire ente le client et le server

    ## d'authentification
    ## de route
    ## de l'application
    ## 