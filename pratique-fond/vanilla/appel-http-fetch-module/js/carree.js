export function carree(x) {
  if (!isNaN(x)) {
    x *= x;
    console.log(x);
  } else {
    console.log("Ce n'est pas un nombre");
  }
}

export function soustraction(x, y) {
  if (!isNaN(x) && !isNaN(y)) {
    let d = x - y;
    console.log("Ma soustraction");
    console.log(Math.abs(d));
  } else {
    console.log("soustraction ratée");
  }
}
