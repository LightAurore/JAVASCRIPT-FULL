/* 
const count = true;

let countValue = new Promise(function (resolve, reject){
if(count){
resolve("Three is a count value.");
}else{
reject("There is no count value");
}
})

console.log(countValue);
 */

// promiseObj.then(onFulfilled, onRejected)
let countValue = new Promise(function (resolve, reject) {
  resolve("Promise resolves");
});

countValue
  .then(function successValue(result) {
    console.log(result);
  })
  .then(function successValue() {
    console.log("Tu peux appeller plusieus fonctions avec cette méthode");
  });

/* rejected */
let countValue1 = new Promise(function (resolve, reject) {
  resolve("Promise rejected");
});

countValue1
  .then(function successValue(result) {
    console.log(result);
  })
  .catch(function errorValue(result) {
    console.log(result);
  });

/* API */

const employees = {
  employe1: {
    name: "Paul Kirk",
    age: 26,
  },
  employee2: {
    name: "John Wayne",
    age: 41,
  },
};

const api1 = () => fetch(employees);

const api2 = (r) => {
  console.log(r);
  return r.json();
};

const api3 = (r) => {
  console.log(r);
};

api1()
  .then(function (result) {
    return api2(result);
  })
  .then(function (result2) {
    return api3(result2);
  })
  .then(function (result3) {
    // return api4();
  })
  .catch(function (error) {
    //handle any error that may occur before this point
  });
