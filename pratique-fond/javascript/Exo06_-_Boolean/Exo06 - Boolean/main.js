let A = 3;
let B = 9;
let C = false;
let D = !(C);
let E = 9;

console.log((A > 8)); // 3 > 8 → False
console.log((B == 9));  // 9 == 9 → True
console.log((!(A != 3)));   //!(3 != 3) → !False → True
console.log((!(C)));    //!False → True
console.log(((A < B) || C)); //(3 < 9) || False → True || False → True
console.log(!((A + B) != 12)); //!((3 + 9) != 12) → !(12 != 12) → !False → True
console.log(((B == 5) || ( (E > 10) && (A < 8) )));
// (((9 == 5) || ((9 > 10) && (3 < 8))))
//  (((False) || ((False) && (True))))
// (False || (False && True))
// (False || False)
// False
console.log(((((B == 5) || ((E > 10) && (A < 8))) || (A < B) || C) && C));
// Premier False comme dans le 7.
// (False || (3 < 9) || False) && False)
// (False || True || False) && False)
// (True || False) && False
// True && False
// False

//(......) && Faux => Faux
console.log(A != 3);    //3 != 3 → False
console.log(!(D) || C); //!(!(c)) || c → False || False → False
console.log(((A + B) == 12) && D);  //((3+9) == 12) && !(False) → (12 == 12) && True → True && True → True