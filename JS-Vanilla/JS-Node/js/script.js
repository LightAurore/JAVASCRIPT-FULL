const navBar = document.getElementById("navBar");

const onglets = [
  {
    href: "./index.html",
    texte: "Home",
  },
  {
    href: "./lire-ecrire-node.html",
    texte: "lire ecrire",
  },
  {
    href: "#",
    texte: "",
  },
];

for (let i = 0; i < onglets.length; i++) {
  const html_a = document.createElement("a");
  html_a.href = onglets[i].href;
  html_a.textContent = onglets[i].texte;

  navBar.appendChild(html_a);
}
