/* Promise.allSettled()  */

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolve P1"), 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("P2 Error")), 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolve P3"), 3000);
});

Promise.allSettled([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));
