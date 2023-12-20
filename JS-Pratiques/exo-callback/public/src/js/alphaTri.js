'use strict';

const mots = ['quinze','stylo','tasse','vague','xérès','yogi','zeste','pomme','quatuor','roi','terre','un','vin','zéro'];

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
    let a = strA.split(''); // copy et spliter
    let b = strB.split('');
    let _isOrderAlpha = true;
  
    let i = 0;
    // console.log(a[i],b[i]);
    do{
        if((a[i] == b[i])){
            console.log('ll : ' + a[i] + " " + b[i]);
            console.log();
            if(a[i + 1] > b[i + 1]){
                _isOrderAlpha = false;
            }else if((a[i + 1] == b[i + 1])){
                _isOrderAlpha = true;
            }
            i++;
            
        }else if((a[i] > b[i])){
            _isOrderAlpha = false;
        }
        
    }while(i < (a.length >= b.length) ? b.length : a.length || (a[i] == b[i])) 
    return _isOrderAlpha;
  }


  /**
   * 
   * @param {array} array 
   * @returns 
   */
  function TriAZ(array){
    const result = [...array]; // copy
    for(let i = 0; i < result.length - 1; i++){
      let j = 0;
      let a = result[i];
      let b = result[i + 1];

      console.log(a,b)
      
      if(TriParLettre(a, b) == false){
          console.log('ok');
          console.log(result[i], result[i + 1]);
          [result[i], result[i + 1]] = [ b, a];
          console.log(result[i], result[i + 1]);
        }
        console.log(result[i], result[i + 1]);
      
    }
    return result;
  }
  
 
  console.log("lettre par lettre " + TriParLettre('strB', 'strA'));
  console.log(mots);
//   TriAZ(mots);


//   btn event

btn_tri.addEventListener('click',() => {
    console.log("clicker");
    console.log(TriAZ(mots));
})