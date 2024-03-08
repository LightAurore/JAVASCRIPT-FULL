'use strict'

  // Pagination
  const pageLeft = document.querySelector('.left');
  const pageRight = document.querySelector('.right');
  const pageLink = document.querySelectorAll('.page-link');



  // Navigation
function myFunction() {

  console.log("ma fonction responsive")
    var x = document.getElementById("myMenu");
    if (x.className === "top-menu") {
      x.className += " responsive";
    } else {
      x.className = "top-menu";
    }
  }





// pagination
  let start = 0;
  const end = pageLink;

  pageLink.forEach((link,i) =>{
    link.addEventListener('click', ()=>{
      start = i;
      console.log(i);
      document.querySelector('.active').classList.remove('active');
      link.classList.add('active');
    })
  })

  pageRight.addEventListener('click', (e) =>{
    if(start < (pageLink.length - 1))
    {
    start += e.target.id === "page-link" ? -1 : 1;

    pageLink.forEach((btn,i) =>{
      btn.classList.toggle('active', i === start)
    })
}
  })
  
  pageLeft.addEventListener('click', (e) =>{
    if(start > 0)
    {
      start -= e.target.id === "page-link" ? -1 : 1;

      pageLink.forEach((btn,i) =>{
      btn.classList.toggle('active', i === start)
    })}

  })

  