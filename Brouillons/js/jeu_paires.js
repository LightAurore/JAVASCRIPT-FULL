"use strict";

const cartesContainer = document.getElementById("cartes-container");

// fonctions

/**
 *
 * @param {number} nbCarte
 * @returns
 */
function Random_Image(nbCarte) {
  const MAX = nbCarte;
  const MIN = 1;
  const random_nbr = Math.floor(Math.random() * (MAX - MIN)) + MIN;

  return random_nbr;
}

/**
 *
 * @param {parent} nodeListe
 */
function Changer_ordre(nodeListe) {
  nodeListe.forEach((item) => {
    item.style.order = Random_Image(nodeListe.length);
  });
}

/**
 *
 * @param {number} niveau
 * @param {string} parentNode
 */
function Generer_Cartes(niveau = 2, parentNode) {
  const nb_carte = [18, 24, 48];
  const img_index_tb = new Set();

  for (let i = 0; i < nb_carte[niveau - 1]; i++) {
    let img_index;

    if (i < nb_carte[niveau - 1] / 2) {
      img_index = Random_Image(nb_carte[niveau - 1]);

      while (img_index_tb.has(img_index)) {
        img_index = Random_Image(nb_carte[niveau - 1]);
      }

      img_index_tb.add(img_index);
    } else {
      const tb_index = [];
      img_index_tb.forEach((elem, index) => {
        tb_index.push(index);
      });

      let k = Random_Image(tb_index.length);
      img_index = tb_index[k - 1];
      img_index_tb.delete(img_index);
    }

    const recto_verso = `
  <img class="recto" id="recto" src="../../images/img-${img_index}.jpg" alt="recto">
  <img class="verso" id="verso" src="../../images/flowers-1.jpg"/>
`;

    const html_carte_div = document.createElement("div");
    html_carte_div.innerHTML = recto_verso;
    html_carte_div.disabled = false;
    parentNode.append(html_carte_div);
  }

  return parentNode;
}

/**
 *
 * @param {Array} nodeArray
 */
function Retourner_Cartes(nodeArray) {
  const cartes = nodeArray.querySelectorAll("div");
  const indexCarte = [];
  let count = 1;

  cartes.forEach((carte, index) => {
    carte.addEventListener("click", () => {
      if (carte.disabled) {
        console.log("disabled");
        return;
      }

      carte.childNodes[1].classList.add("display");
      carte.childNodes[3].classList.add("no-display");
      carte.disabled = true;
      console.log(carte.disabled);

      indexCarte.push(index);
      count -= -1;

      if ((count + 1) % 2 == 0) {
        if (
          cartes[index].childNodes[1].src !=
          cartes[indexCarte[indexCarte.length - 2]].childNodes[1].src
        ) {
          cartes[index].disabled = false;
          cartes[indexCarte[indexCarte.length - 2]].disabled = false;
          setTimeout(() => {
            cartes[index].childNodes[1].classList.remove("display");
            cartes[index].childNodes[3].classList.remove("no-display");
            cartes[
              indexCarte[indexCarte.length - 2]
            ].childNodes[1].classList.remove("display");
            cartes[
              indexCarte[indexCarte.length - 2]
            ].childNodes[3].classList.remove("no-display");
          }, 500);
        } else {
          cartes[index].disabled = true;
          cartes[indexCarte[indexCarte.length - 2]].disabled = true;
        }
      }
    });
  });

  Changer_ordre(cartes);
}

const mesCartes = Generer_Cartes(1, cartesContainer);
console.log(mesCartes);
Retourner_Cartes(mesCartes);
