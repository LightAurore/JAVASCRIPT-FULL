const pwdError = document.getElementById("pwd-error");
let users = [];

//document.forms contient un tableau avec tous les formulaires de la page
//Si un seul formulaire dans la page, il sera donc à l'index 0
console.log(document.forms[0]);
//Si on a donnné un nom via l'attribut name à notre form, on peut le récupéré directement sur document
console.log(document.registerForm);

const registerForm = document.registerForm;

console.log("mon formulaire " + registerForm.lastname.value);

// Désactiver en js, le déclenchement de l'action lors du click sur un button submit :
registerForm.sendForm.addEventListener("click", async (e) => {
  // e -> Objet contenant toutes les informations de l'évènement qui vient d'être déclenché
  // On s'en sert pas mal pour par exemple, savoir où est la souris, quelle touche vient d'être tapée etc
  e.preventDefault(); //Annule le comportement pas défaut de notre event -> Ici, annule le faite que le submit déclenche son action
  // console.log(e);
  console.log("ENVOYE");
  console.log(registerForm.lastname.value);
  console.log(registerForm.firstname.value);

  //---- PARTIE API ---
  if (
    registerForm.lastname.value != "" &&
    registerForm.firstname.value != "" &&
    registerForm.email.value != "" &&
    registerForm.password.value != "" &&
    registerForm.confirmpassword.value != ""
  ) {
    const userToSend = {
      lastname: registerForm.lastname.value,
      firstname: registerForm.firstname.value,
      email: registerForm.email.value,
      password: registerForm.password.value,
    };

    // users.push(userToSend);

    try {
      await axios.post("http://localhost:3000/users", userToSend);
      registerForm.reset(); //Remet à zero le formulaire
    } catch (err) {
      console.log(err);
    }
  }
});

// Pour mettre en place un validateur et un petit message d'erreur, ça peut être un peu laborieux :
registerForm.password.addEventListener("change", () => {
  //change -> Déclenché quand, au moment où je sors de l'input, la valeur de l'input a changé par rapport au moment où j'ai eu le focus dedans
  if (
    checkPasswords(
      registerForm.password.value,
      registerForm.confirmpassword.value
    )
  ) {
    pwdError.textContent = "";
  } else {
    showPasswordError();
  }
});

registerForm.confirmpassword.addEventListener("change", () => {
  if (
    checkPasswords(
      registerForm.password.value,
      registerForm.confirmpassword.value
    )
  ) {
    pwdError.textContent = "";
  } else {
    showPasswordError();
  }
});

const checkPasswords = (password1, password2) => {
  return password1 === password2;
};

const showPasswordError = () => {
  pwdError.textContent = "Les mots de passe ne sont pas identiques !";
};

registerForm.addEventListener("change", () => {
  if (
    registerForm.lastname.value != "" &&
    registerForm.firstname.value != "" &&
    registerForm.email.value != "" &&
    registerForm.password.value != "" &&
    registerForm.confirmpassword.value != ""
  ) {
    registerForm.sendForm.disabled = false;
  } else {
    registerForm.sendForm.disabled = true;
  }
  //   console.log("Oui.");
});

const recup = async () => {
  try {
    // const result = await axios.get("http://localhost:3000/users/");
    // const result = await axios.get("http://localhost:3000/users/2");
    const result = await axios.get("http://localhost:3000/users/");
    console.log(result.data);
    users = result.data;
    console.log(users);
  } catch (err) {
    console.log(err);
  }
};
recup();
