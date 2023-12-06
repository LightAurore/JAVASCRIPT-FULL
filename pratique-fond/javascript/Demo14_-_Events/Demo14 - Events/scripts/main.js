const btn_pressed = function(html_id){
    const html_btn = document.getElementById(html_id);
    let counter = parseInt(html_btn.innerText);
    counter++;
    html_btn.innerText = counter;
}

const html_btn_attr = document.querySelector('#btn_attr');
const html_btn_prop = document.querySelector('#btn_prop');
const html_btn_listener = document.querySelector('#btn_listener');

html_btn_prop.onclick = function (){
    btn_pressed('btn_prop');
};

html_btn_listener.addEventListener("click",function(){btn_pressed('btn_listener');});
html_btn_listener.addEventListener("dblclick",function(){alert('Aïe! Ça fait mal!');});
