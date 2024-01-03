/* Promise.all()  */

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolve P1"), 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolve P2"), 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolve P3"), 3000);
});

Promise.all([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

  /*  */
let p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("P4 Error")), 4000);
});

Promise.all([p4, p2, p3])
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message))
  .finally(() => {
    console.log('état final');
  });
