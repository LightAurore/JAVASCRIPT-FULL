const POLAROIDS = document.querySelector(".wrapper");

/** 
 * Fonction qui créé un polaroid à partir des informations d'une ville
 * @param {string} name
 * @param {string} desc
 * @param {string} url
 * @returns {HTMLDivElement}
 */
const createCard = (name, desc, url) => {
    // Création de la Card
    const CARD = document.createElement("div");
    CARD.classList.add("polaroids");

    const INNER_CARD = document.createElement("div");

    // Création de tous les éléments dans la card
    const TITLE = document.createElement("h2");
    const IMG = document.createElement("img");
    const DESC = document.createElement("p");
    
    // On setup toutes les infos d'une ville dans les bons éléments
    TITLE.textContent = name;
    TITLE.classList.add("cityname");
    IMG.src = "./images/" + url;
    IMG.alt = name;
    DESC.textContent = desc;

    // On ajoute les éléments à notre CARD
    INNER_CARD.append(IMG, TITLE, DESC); 
    CARD.append(INNER_CARD);

    // Rajouter le fait que chaque polaroid ouvre la modal
    CARD.addEventListener("click", () => {
        //On ouvre la modal
        MODAL.classList.remove("hidden");
        document.body.classList.add('no-scroll');
        //On remplace la ville de la modal par la ville de notre card
        TITRE_MODAL.textContent = name;
        DESC_MODAL.textContent = desc;

        //On fait l'appel API pour charger la météo
        // TODO : Faire l'appel API
        // getWeatherPromise(name);
        getWeatherAsync(name);
        
    });

    //On renvoie la card créée
    return CARD;
}

for(const VILLE of VILLES) {
    POLAROIDS.appendChild(createCard(VILLE.name, VILLE.desc, VILLE.url));
}