/* https://www.youtube.com/watch?v=z9pcgJX1DdY */

/*  url https://www.jsonplaceholder.org/ */

// Récupérer les données
async function fetchUsers() {
  const f_init = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  // Envoyer les données
  const f_initsend = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: "{'titre' : 'Mon Premier Article', JSON.stringify({Article: 'Les fleurs du printemps'})}",
    body: JSON.stringify({ Article: "Les fleurs du printemps" }),
  };

  //   response
  //   const response = await fetch("https://jsonplaceholder.org/post/?_limit=5", f_initsend);
  const response = await fetch("https://jsonplaceholder.org/users/?_limit=5");
  //   connaitre le contenu de header
  console.log(response.headers.get("Content-Type"));

  if (response.ok == true) {
    return response.text();
  }
  throw new Error("Impossible de contacter le serveur");
}

fetchUsers().then((data) => {
  const users = JSON.parse(data);
  console.log(users); //JSON.stringify() json -> texte
});

const a = new AbortController();
Promise.race([
  fetch("https://jsonplaceholder.typicode.com/posts/?_limit=5&_delay=2000", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: "{'titre' : 'Mon Premier Article', JSON.stringify({Article: 'Les fleurs du printemps'})}",
    body: JSON.stringify({ Article: "Les fleurs du printemps" }),
    signal: a.signal,
  }),
  fetch("https://jsonplaceholder.typicode.com/users/?_limit=3", {
    signal: a.signal,
  }),
])
  .then((r) => r.json())
  .then((body) => {
    a.abort();
    console.log(body);
  });
