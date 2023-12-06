let cote_1 = parseFloat(prompt("Entre le côté 1: "));
let cote_2 = parseFloat(prompt("Entre le côté 2: "));
let cote_3 = parseFloat(prompt("Entre le côté 3: "));
// console.log(cote_1, cote_2,cote_3);

let triangle;

if((cote_1 == cote_2) && (cote_2 == cote_3) && (cote_1 == cote_3)){
        alert("Triangle  Equilatéral");
        triangle = ""
}
else if(((cote_1 == cote_2) && (cote_2 != cote_3) && (cote_1 != cote_3)) || ((cote_1 == cote_3) && (cote_2 != cote_3) && (cote_2 != cote_1)) || ((cote_2 == cote_3) && (cote_2 != cote_1) && (cote_1 != cote_3))){
    alert("Triangle  Isocèle");
}
else{
    alert("Triangle Scalène");
}


let a = cote_1*cote_1;
let b = cote_2*cote_2;
let c = cote_3*cote_3;

const PUISSANCE = 2;

// a2=b2+c2−2b.c.cos(ˆA).
let angle_1 = a - ( b +c);
let angle_2 = b - (a + c);
let angle_3 = c - (a + b);

if((a == ( b +c)) || (b == (a + c)) || (c == (a + b))){
    alert("Triangle rectangle");
}
else if((a > ( b +c) )|| (b > (a + c)) || (c > (a + b))){
    alert("Triangle Obtusangle");
}else{
    alert("Triangle Accutangle");
}

// console.log(angle_1, angle_2,angle_3);