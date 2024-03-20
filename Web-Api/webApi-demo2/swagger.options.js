import path from 'path';
import { fileURLToPath } from 'url';

//! Fix pour « import.meta.dirname » qui ne fonctionne pas en node v20 et moins !
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const __dirname  = new URL('.', import.meta.url).pathname;

const swaggerOptions =  {
    // Information global par rapport à votre API
    info: {
      version: '1.0.0',
      title: 'Team manager',
      "description": "La demo de ",
      license: {
        name: 'ISC',
      },
    },
    security: {
      BasicAuth: {
        type: 'http',
        scheme: 'basic',
      },
    },
    // Répertoire root de l'API
    baseDir: __dirname,
    // Répertoire à analyser pour générer le swagger
    filesPattern: [
        './controllers/*.js', 
        './dto/*.js',
        './validators/*.js',
    ],
    // Interface Swagger
    exposeSwaggerUI: true,
    swaggerUIPath: '/api-docs',
    swaggerUiOptions: {},
    // JSON API Docs 
    exposeApiDocs: false,
    apiDocsPath: '/v3/api-docs',
    //  Options divers
    //  Permet de rendre nullable dans la doc les champs non requis
    notRequiredAsNullable: false,
    // - Gestion des multi instance
    multiple: true,
  };

  export default swaggerOptions;