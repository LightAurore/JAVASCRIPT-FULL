function MonConstructeur() {
  this.maPropriete1 = 3;
}

const monInstance = new MonConstructeur();
alert(monInstance.maPropriete1); // affiche 3
alert(Object.getPrototypeOf(monInstance) === MonConstructeur.prototype); // affiche true
MonConstructeur.prototype.maPropriete2 = 5;
alert(monInstance.maPropriete2);

function instanceOf(f) {
  let o = this;

  while (o !== null) {
    o = Object.getPrototypeOf(o);

    if (o === f.prototype) {
      return true;
    }
  }

  return false;
}

//
if (typeof Object.create !== "function") {
  Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}
