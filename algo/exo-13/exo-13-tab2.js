let resultat = document.getElementById("resultat-contenu");
let message="";
let i = 0;


function tableMultiplicationPar2(){
    const MULTI = 2;
    while (i<10) {
        i -= -1;
       resultat.innerHTML += `<p> ${MULTI} x ${i+1} = ${MULTI * i}</p> `;
       message += ` ${MULTI} x ${i} = ${MULTI * i} \n`;
       
    }
    console.log(message);
}

tableMultiplicationPar2();