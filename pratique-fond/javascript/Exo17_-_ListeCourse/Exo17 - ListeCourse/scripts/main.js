const LIMIT_VALUE = "FIN";

const html_course_list = document.getElementById('course');
// const html_course_list = document.querySelector('#course');

let article = prompt("Veuillez indiquer votre article :");

while (article.toUpperCase() != LIMIT_VALUE) {
    const html_li = document.createElement('li');
    html_course_list.appendChild(html_li);
    html_li.innerText = article;
    article = prompt("Veuillez indiquer votre article :");
}