
const maGallerie = (nom,famille,image,active,formule,maladie,description) => {

let carte = `
<article class="card">
<header class="card__name">
    <h2 id="nomPlante">${nom}</h2>
</header>
<main class="card__main">
    <section class="card__contain--img">
            <img src="./assets/images/${image}" alt="" id="plante-img">
    </section>
    <aside class="card__contain">
        <div class="card__caontaine--title">
            <ul>
            <li>
            <h3>Famille</h3>
            <span id="affiche-famille">${famille}</span>
            </li>
            <li>
            <h3>Substance active</h3>
            <span id="affiche-substActive">${active}</span>
            </li>
            <li>
                <h3>Formule</h3>
                <span id="affiche-groupe">${formule}</span>
            </li>
                <li>
                    <h3>Mal à soigner</h3>
                    <span id="affiche-maladie">${maladie}</span>
                </li>
            </ul>
        </div>
        
    </aside>
</main>
<footer>
    <div>
            <h3>Texte descriptif</h3>
            <p id="affiche-description">
            ${description}
            </p>
        </div>
</footer>

</article>
`;

}


// squarespace

// https://www.creapharma.ch/famille-phyto.htm

// framer / library

// https://themewagon.com/theme-price/free/page/2/?swoof=1&product_tag=contact-form&orderby=date&really_curr_tax=40-pa_price