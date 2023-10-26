<!-- Methode 1 -->

const count = true;

let countValue = new Promise(function (resolve, reject){
if(count){
resolve("Three is a count value.");
}else{
reject("There is no count value");
}
})

console.log(countValue);

Promise methode
Promise.all(iterable)
Promise.allSettled(iterable)
Promise.race(iterable)
Promise.any(iterable)
Promise.resolve(value)
Promise.reject(error)

------- Prototype
Promise.catch(onRejected)
Promise.finnaly(onFinally)
Promise.then(resolve, reject)


