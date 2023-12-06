const html_block = document.getElementById('block');
const html_smallBlock = document.getElementById('smallBlock');
const html_search = document.querySelector('input[type="search"]');

const search_validation = function(event){
    console.log('search_activated');
    if(event.key.toLowerCase() == 'enter'){
        alert(`La valeur recherchée est ${html_search.value}.`);
        html_search.value="";
    }
};

html_block.addEventListener('mousemove', function (event) {
    console.log(`X: ${event.offsetX} - Y: ${event.offsetY} - target : ${event.target.id}`);
    html_smallBlock.style.top = (event.clientY) +'px';
    html_smallBlock.style.left = (event.clientX) +'px';
});

document.body.addEventListener('keypress',function(event){
    console.log(event);
    if(event.key.toLowerCase() == 'e'){
        html_smallBlock.classList.toggle('activate');
    }
});

html_search.addEventListener('focus', function (event) {
    html_search.addEventListener('keypress', search_validation);
});

html_search.addEventListener('blur', function(event){
    html_search.removeEventListener('keypress', search_validation);
});