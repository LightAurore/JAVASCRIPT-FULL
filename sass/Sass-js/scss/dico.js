const biblio = {
  definitions: [
    { mot: "Barango", definition: "Saluer" },
    { mot: "Zingongo", definition: "Être réveillé" },
    { mot: "Tengo", definition: "Manger" },
    { mot: "Gango", definition: "Venir" },
  ],
};

const obj = JSON.parse(biblio);
const motDef = document.getElementById("demo");

for (let i = 0; i <= 4; i++) {
  motDef.innerHTML =
    obj.definitions[i].mot + " " + obj.definitions[i].definition;
  console.log(motDef);
  document.write(
    obj.definitions[i].mot + " " + obj.definitions[i].definition + "<br>"
  );
}
