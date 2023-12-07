let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = Action;

xhttp.open("GET", "./assets/user.json");

xhttp.send();

function Action() {
  if (this.readyState == 4 && this.status == 200) {
    let tbody = document.querySelector("tbody");
    tbody.style.all = "inherit";
    let information = JSON.parse(this.response);

    console.log(information);

    for (let index = 0; index < information.length; index++) {
      let tr = document.createElement("tr");
      console.log(information[index]);
      Object.values(information[index]).forEach((val) => {
        let td = document.createElement("td");
        td.textContent = val;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    }
  }
}
