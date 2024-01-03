"use strict";

var _ = require("lodash");

const browsers = [
  { name: "Chrome", year: 2008 },
  { name: "Firefox", year: 2004 },
  { name: "Safari", year: 2003 },
  { name: "Opera", year: 1996 },
  { name: "IE", year: 1995 },
  { name: "Edge", year: 2015 },
];

//sortBy
let sortedByYearDesc = _.sortBy(browsers, "year").reverse();
console.log(sortedByYearDesc);

/*
Résultat:
 
[
    { name: 'Edge', year: 2015 },
    { name: 'Chrome', year: 2008 },
    { name: 'Firefox', year: 2004 },
    { name: 'Safari', year: 2003 },
    { name: 'Opera', year: 1996 },
    { name: 'IE', year: 1995 }
]
 
*/

// orderBy
let sorted = _.orderBy(browsers, ["name", "year"], ["asc", "desc"]);
console.log(sorted);
/*
Résultat:
 
[
    { name: 'Chrome', year: 2008 },
    { name: 'Edge', year: 2015 },
    { name: 'Firefox', year: 2004 },
    { name: 'IE', year: 1995 },
    { name: 'Opera', year: 1996 },
    { name: 'Safari', year: 2003 }
]
 
*/
