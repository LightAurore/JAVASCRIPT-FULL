/* Fetch avec un fichier json local */
const user = document.getElementById("users");

function afficher(data) {
  for (let i = 0; i < data.length; i++) {
    const html_tr = document.createElement("tr");
    const html_td1 = document.createElement("td");
    const html_td2 = document.createElement("td");

    html_td1.innerText = data[i].username;

    const hashPwd = () => {
      let element = "";
      for (let index = 0; index < data[i].password.length; index++) {
        element += "*";
      }
      return element;
    };

    html_td2.innerText = hashPwd();
    html_tr.appendChild(html_td1);
    html_tr.appendChild(html_td2);
    user.appendChild(html_tr);
  }
}

const url = "./assets/user.json";

function getUsers(e) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong on api server!");
      }
    })
    .then((data) => {
      console.log(data);
      afficher(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

getUsers();

/* 
const url2 = "https://api.github.com/users";

const userData = async (e) => {
  let resp = await fetch(url2);
  let data = await resp.json();

  console.log(data);
  afficher(data);
};

userData();
 */
