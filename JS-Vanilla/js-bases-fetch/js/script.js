const navBar = document.getElementById("navBar");

const onglets = [
  {
    href: "./index.html",
    texte: "Home",
  },
  {
    href: "./basicB.html",
    texte: "blob basic",
  },
  {
    href: "./fetchBlob.html",
    texte: "blob file",
  },
  {
    href: "./jsonHtml.html",
    texte: "get json",
  },
  {
    href: "./httpRequestr.html",
    texte: "xhttp Request",
  },
];

for (let i = 0; i < onglets.length; i++) {
  const html_a = document.createElement("a");
  html_a.classList.add("onglet-nav");
  html_a.href = onglets[i].href;
  html_a.textContent = onglets[i].texte;

  navBar.appendChild(html_a);
}

navBar.classList.add("rows");

/* Changer de titre  */
let docTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "Come Back 😺";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});

/* Imprimer */

const printButton = document.createElement("button");
const body = document.querySelector("body");

printButton.addEventListener("click", function () {
  windows.print();
});

const textNode = document.createTextNode("Impprimer");
printButton.appendChild(textNode);
body.insertBefore(printButton, body.children[1]);

// body.insertBefore();
// body.insertAdjacentHTML("beforeend", printButton);

/* 
insertAdjacentHTML() 

afterbegin	After the beginning of the element (first child)
afterend	After the element
beforebegin	Before the element
beforeend	Before the end of the element (last child)
 */
