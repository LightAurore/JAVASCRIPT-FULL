

let a = 0, b = 1;
const fibo_array = new Array();
let Phi;


console.time()
for (let i = 0; i < 1000; i++) {
    // console.log(a, b);
    [a, b] = [b, (a+b)];
    fibo_array.push(a);
    Phi = b/a;
}
console.timeEnd()

console.log(Phi);
console.log(fibo_array);

export default Phi;
