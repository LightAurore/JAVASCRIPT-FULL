
const MULTIPLICATEUR = 3

let i = 1;
let multiple_de_3 = 1;

do{
    multiple_de_3 = i * MULTIPLICATEUR ;
    console.log(`${i} x ${MULTIPLICATEUR} = ${multiple_de_3}`);
    i++; 
}while(i<=10)
