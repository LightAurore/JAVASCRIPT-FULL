let resultat = document.getElementById("resultat-contenu");

function afficherNom() {
  let username = prompt("Quel est votre nom? ");

  resultat.innerText = `Mbi bhra mo, nyi bwa ${username}`;
}
