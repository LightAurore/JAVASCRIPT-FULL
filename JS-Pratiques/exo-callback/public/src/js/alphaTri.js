'use strict';

const mots = ['vague','pomme','xérès','quinze','stylo','yogi','zeste','tasse','quatuor','roi','terre','un','vin','zéro'];

// dom
const btn_tri = document.getElementById('btn-trier');

const liste_resultat = document.getElementById('resultat');



/**
 * 
 * @param {string} strA 
 * @param {string} strB 
 * @returns {true}
 */

function TriParLettre(strA, strB){
    // let a = strA.split(''); // copy et spliter
    // let b = strB.split('');
    let _isOrderAlpha = false;

    let iter = (strA.length > strB.length) ? strB.length : strA.length;
  
    let i = 0;
    while( i < iter) {
        
        let sA = strA.charCodeAt(i);
        let sB = strB.charCodeAt(i);
        
        if(sA > sB){
             return _isOrderAlpha = false;
        }
        else if(sA == sB){
            i++;
        }
        else{
            _isOrderAlpha = true;
            return _isOrderAlpha;
        }
        
        
    }

    return _isOrderAlpha;
  }


  /**
   * 
   * @param {array} array 
   * @returns 
   */
  function TriAZ(array){
    const result = [...array]; // copy

    for (let j = 0; j < array.length; j++) {
        for(let i = 0; i < result.length - 1; i++){
          let a = result[i];
          let b = result[i + 1];
          
          if(TriParLettre(a, b) == false){
              result[i]  = result[i + 1];
              result[i + 1] = a;
            }else{
    
            }
        }
    }

    return result;
  }
  
//   TriAZ(mots);


console.log(mots);
//   btn event

btn_tri.addEventListener('mouseout',() => {
    const listeAlphabetic = TriAZ(mots);
    liste_resultat.innerHTML = "";

    setTimeout(() => {
        for (let k = 0; k < listeAlphabetic.length; k++) {
        const html_li = document.createElement('li');
        html_li.innerText = listeAlphabetic[k];
        liste_resultat.append(html_li);
    }
    }, 5000);
    
})