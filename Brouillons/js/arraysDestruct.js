'use strict'

const [a, b, c] = [123, 'second', true];

console.log(a);
console.log(b);
console.log(c);

const [, d] = [123, 'second', true];
console.log(d);

const [e, f, ...rest] = [123, 'second', true, false, 42, "dev", 'design'];
console.log(e);
console.log(f);
console.log(rest);

let x = true;
let y = false;

[x, y] = [y, x];
console.log(x);
console.log(y);

