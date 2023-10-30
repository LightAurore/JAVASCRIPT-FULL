
const secondes = 4856923;

let jr = (secondes/(60*60*24*1000))
console.log(jr);

let hr = (secondes/(60*60*1000))
console.log(hr);

let min = (secondes/(60*1000)) % 60
console.log(min);

let sec = (secondes % 60)
console.log(sec);