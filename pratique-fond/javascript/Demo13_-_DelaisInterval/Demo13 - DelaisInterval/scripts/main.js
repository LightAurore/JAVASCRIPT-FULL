const html_timer = document.querySelector('#timer');

html_timer.innerText = new Date();

/** Version Timeout récursif
const update_timer = function() {
    html_timer.innerText = new Date();
    setTimeout(update_timer, 1000);
}

update_timer(); */

const update_timer = function () {
    html_timer.innerText = new Date();
}

let interval = setInterval(update_timer, 1000);

setTimeout(function(){clearInterval(interval);},5000)