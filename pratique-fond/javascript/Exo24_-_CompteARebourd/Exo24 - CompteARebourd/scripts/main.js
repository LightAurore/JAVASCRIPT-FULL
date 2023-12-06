let now = new Date();
let end = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    16,
    0,
    0,
    0);

// let end = new Date();
// end.setHours(16,0,0);
console.log(end);

let diff = end - now; //getTime() non-obligatoire, une soustraction de date donne temps en ms

console.log(diff);

let hour = Math.floor(Math.abs(diff) / 3600000);
let minute = Math.floor((Math.abs(diff) % 3600000) / 60000);
let second = Math.floor((Math.abs(diff) % 60000) / 1000);

if(diff > 0){
    
    alert(`Il est actuellement ${now.getHours()}:${(now.getMinutes()<10)?'0':''}${now.getMinutes()}:${(now.getSeconds()<10)?'0':''}${now.getSeconds()}, il reste ${hour}:${(minute<10)?'0':''}${minute}:${(second<10)?'0':''}${second} avant 16h.`)
}
else
    {
    alert(`Il est actuellement ${now.getHours()}:${(now.getMinutes()<10)?'0':''}${now.getMinutes()}:${(now.getSeconds()<10)?'0':''}${now.getSeconds()}, il est déjà passé 16h depuis  ${hour}:${(minute<10)?'0':''}${minute}:${(second<10)?'0':''}${second}.`)
    }