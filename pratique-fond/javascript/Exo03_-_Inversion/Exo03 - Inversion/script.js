let nb1 = 7;
let nb2 = 5;

alert(`nb1 vaut maintenant ${nb1}`)	//nb1 vaut maintenant 7
alert(`nb2 vaut maintenant ${nb2}`)	//nb2 vaut maintenant 5

    let blank;    //undefined

blank = nb1;      //nb1 : 7 | blank : 7
nb1 = nb2;        //nb2 : 5 | nb1 : 5
nb2 = blank;      //blank : 7 | nb2 : 7

alert(`nb1 vaut maintenant ${nb1}`)	//nb1 vaut maintenant 5
alert(`nb2 vaut maintenant ${nb2}`)	//nb2 vaut maintenant 7