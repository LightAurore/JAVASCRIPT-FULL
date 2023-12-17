let listItems = document.getElementById("listItems");

listItems.addEventListener("click", (elem) => {
  elem.target.tagName === "LI"
    ? console.log(
        "Clicked On: ",
        elem.target.textContext,
        elem.target.classList.add("couleur")
      )
    : console.log("You Clicked On Parent Elemnt !");
});

const items = listItems.querySelectorAll("li");
items.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.classList.toggle("grandir");
    console.log("Grand");
  });
});
