const html_btn = document.querySelector('button');
const html_input = document.querySelector('input');
const html_shop = document.querySelector('#shop');

const acheter = function (element) {
    element.classList.toggle('achete');
}

const ajouter = function(){
    if(html_input.value.trim()){
        const html_li = document.createElement('li');
        html_li.innerText = html_input.value.trim();
        html_input.value = "";
        html_shop.appendChild(html_li);
        html_li.addEventListener('click',function(){ 
            acheter(html_li);
            }
        );
    }
    else{
        console.error("Pas de valeur dans html_input");
    }
};

html_btn.addEventListener('click', ajouter);
