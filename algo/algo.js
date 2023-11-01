const monHeader = document.querySelector("header");

const html_nav = document.createElement("div");

const monMenu = `<ul id="menu">
<li><a href="../exo-00/exo00.html">Intro Algo</a></li>
<li><a href="../exo-01-inverser-deux-variables/exo01.html">Exo 1</a></li>
<li><a href="../exo-03/exo03.html">Exo 3</a></li>
<li><a href="../exo-05-secondes/exo05.html">5 secondes</a></li>
<li><a href="../exo-07-bissextile/exo07.html">7 bissectrice</a></li>
<li><a href="../exo-08-lanceur/exo08.html">8 lanceur</a></li>
<li><a href="../exo-10/exo10calc.html">10 calculatrice</a></li>
<li><a href="../exo-13/exo13.html">13 table de deux</a></li>
<li><a href="../exo-14-lanceur/exo14.html">14 lanceur 2</a></li>
<li><a href="../exo-16-juste-prix/exo16.html">16 juste prix</a></li>
<li><a href="../exo-18-calc-ameliorer/exo18calc.html">18 calculatrice 2</a></li>
</ul>
`;

html_nav.classList.add("navigation");
html_nav.insertAdjacentHTML("afterbegin", monMenu);
html_nav.addEventListener("click", () => {
  document.querySelector("#menu").classList.toggle("menu-grid");
});

monHeader.style.zIndex = "9999";
monHeader.appendChild(html_nav);
