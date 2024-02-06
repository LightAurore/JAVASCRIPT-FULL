"use strict";

function getTeachers(obj) {
  console.log(`Professeur ${obj.firstname} ${obj.lastname}`);
}

// Lire un tableau
function getStudents(obj) {
  let tb = [];
  //   console.log("*------student--------*");
  for (let i = 0; i < obj.length; i++) {
    console.log(`Eleve ${i + 1} : ${obj[i].firstname} ${obj[i].lastname}`);
    tb.push(`Eleve ${i + 1} : ${obj[i].firstname} ${obj[i].lastname}`);
  }
}

// Obtenir la moyenne
function getAverage(obj) {
  let tb = [],
    total;
  //   console.log("*------student--------*");
  for (let i = 0; i < obj.length; i++) {
    if (Number.parseFloat(obj[i].year_result)) {
      tb.push(obj[i].year_result);
    }
    // console.log(obj[i].year_result);
  }
  total = tb.reduce((acc, val) => acc + val);
  return total / tb.length;
}

module.exports = { getAverage, getTeachers, getStudents };
