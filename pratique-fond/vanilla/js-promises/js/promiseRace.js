/* Promise.race()  */

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolve P1"), 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("P2 Error")), 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolve P3"), 500);
});

/* Any */
Promise.any([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

/* resolve */
Promise.resolve([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

/* reject */
Promise.reject([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

/* race */
Promise.race([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
