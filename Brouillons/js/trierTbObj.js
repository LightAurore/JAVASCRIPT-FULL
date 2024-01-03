/*
sort()
    comp(x, y) < 0, x vient avant y dans l'ordre trié.
    comp(x, y) = 0, l'ordre relatif de x et y reste inchangé.
    comp(x, y) > 0, x vient après y dans l'ordre trié.


*/

var tableauObjets = [
  { nom: "Mélanie", age: 29 },
  { nom: "Henrique", age: 35 },
  { nom: "Stan", age: 10 },
  { nom: "Mac", age: 2 },
];

tableauObjets.sort(function compare(a, b) {
  if (a.nom < b.nom) return -1;
  if (a.nom > b.nom) return 1;
  return 0;
});

console.log(tableauObjets);

/***
 *
 */
const browsers = [
  { name: "Chrome", year: 2008 },
  { name: "Firefox", year: 2004 },
  { name: "Safari", year: 2003 },
  { name: "Opera", year: 1996 },
  { name: "IE", year: 1995 },
  { name: "Edge", year: 2015 },
];

browsers.sort((x, y) => x.year - y.year);
console.log(browsers);

browsers.sort((x, y) => x.name.localeCompare(y.name));
console.log(browsers);

// sensible à la casse
browsers.sort(function (x, y) {
  if (x.name < y.name) {
    return -1;
  }
  if (x.name > y.name) {
    return 1;
  }
  return 0;
});

// plusieurs champs
browsers.sort(function (x, y) {
  // trier d'abord par le champ 'name'
  if (x.name < y.name) {
      return -1;
  }
  if (x.name > y.name) {
      return 1;
  }
  // si les noms sont égaux, alors trier par 'year'
  return x.year - y.year;
});
