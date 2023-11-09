let connexion = document.querySelector("a > button");

connexion.addEventListener("click", () => {
  function connect() {
    window.body.innerHTML = "";

    let formulaire = `
    <form action="" style="display: flex; flex-direction: column; width: 450px; height: 500px;">
        <div style="display: grid; grid-template-columns: repeat(2, 50%); gap: 20px; width: 100%; height: fit-content">
            <label for="username">Username</label>
            <input type="text" id="username">
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, 50%); gap: 20px; width: 100%; height: fit-content">
            <label for="pass-word">Mot de passe</label>
            <input type="password" id="pass-word">
        </div>
    </form>
    `;
    console.log(formulaire);

    window.body.innerHTML = formulaire;
  }
});
