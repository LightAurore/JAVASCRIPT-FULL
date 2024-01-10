'use strict'

console.log(document.forms[0]);
console.log(document.registerForm);


const registerForm = document.registerForm;

registerForm.sendForm.addEventListener('click',(e) =>{
    e.preventDefault();



    registerForm.reset();
})


registerForm.password.addEventListener('change', ()=> {
    
})
