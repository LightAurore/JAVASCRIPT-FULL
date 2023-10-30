
// const secondes = 4561;

const secondes = parseInt(prompt("entrez les milliSecondes : "));

function afficherTemps(){
    let jr = Math.floor((secondes/(60*60*24))) %30;

    let hr = Math.floor((secondes/(60*60))) %24;

    let min = Math.floor((secondes/(60)) ) % 60;

    let sec = secondes % 60;
    const temps = document.getElementById('temps');

    temps.innerHTML = `<span>${jr}</span>Jr <span>${hr} </span>Hr <span>${min}</span>Min<span>${sec}</span>Sec `
}


afficherTemps(secondes );