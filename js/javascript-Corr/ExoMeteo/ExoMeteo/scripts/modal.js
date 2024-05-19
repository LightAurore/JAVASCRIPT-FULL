const MODAL = document.querySelector(".img-modal");

/** 
 * Fonction qui créé une modal
 */
const createModal = () => {
    MODAL.innerHTML = `
            <span class="img-close">&times;</span>

            <div class="postcard">

                <div class="postcard-content">
                    <div class="card-txt">
                        <h2 id="city-name" class="city-name"></h2>
                        <h3 id="city-desc"> </h3>
                    </div>
                    <div class="weather"></div>

                </div>
                <div class="timbre"></div>
            </div>`
}
createModal();

const TITRE_MODAL = document.getElementById("city-name");
const DESC_MODAL = document.getElementById("city-desc");

// Rajouter le fait que la croix ferme notre modal
const CLOSE = document.querySelector(".img-close");
CLOSE.addEventListener("click", () => {
    document.body.classList.remove('no-scroll');
    MODAL.classList.add("hidden");
})

// Rajouter le fait que le click dans la modal en dehors de la carte ferme
window.addEventListener("click", (e) => {
    if(e.target == MODAL) {
        document.body.classList.remove('no-scroll');
        MODAL.classList.add("hidden");
    }
})
