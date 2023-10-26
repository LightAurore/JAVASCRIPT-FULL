/* Une fonction pour créer les cookies des utilisateurs */
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/* Une fonction pour créer les cookies des utilisateurs */
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 30);
    }
  }
}

/* navigation.sendBeacon() */
window.addEventListener("unload", enregistrerDonnees, false);

function enregistrerDonnees() {
  var client = new XMLHttpRequest();
  client.open("POST", "/log", false); // Le troisième paramètre indique une synchronisation xhr
  client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  client.send(donneesAnalytiques);
}


/* Fetch rejetté  */
var controller = new AbortController();
var signal = controller.signal;

var downloadBtn = document.querySelector('.download');
var abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', function() {
  controller.abort();
  console.log('Download aborted');
});

function fetchVideo() {
  //...
  fetch(url, {signal}).then(function(response) {
    //...
  }).catch(function(e) {
    reports.textContent = 'Download error: ' + e.message;
  })
}



