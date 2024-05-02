
const ferme = "vfjvnnbjgdbnn, cdsbgfiyhvbfvjfnkvbjgnbojgnbubgkzgfbjrznbgjbgjbzfgbg";

const stats = ferme.split('').reduce((etable, k) => (etable[k] = (etable[k] || 0) + 1, etable), {});

// console.log(stats);

const m = new Map([['E',6],['A',15],['G',7]])

console.log(m.get('A'));

m.set('E',7)

console.log(m);


// (b-a) ordre décroissant
const triMap = new Map([...m.entries()].sort((a,b) => b[1]-a[1])); 
// (a-b) ordre croissant a[1] par rapport au deuxième élément

console.log(triMap);





