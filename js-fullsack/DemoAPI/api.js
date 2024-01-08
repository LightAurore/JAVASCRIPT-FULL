"use strict";

// axios

const monAxiosApi = async (url = "", request, data = {}) => {
  if (request === "get") {
    // GET
    const response = await axios.get(url);
    return response;
  } else if (request === "post") {
    //   POST
    const requete = await axios.post(url, {
      title: "new post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
      userId: 1,
    });
    return requete.json();
  } else if (request === "put") {
    //   POST
    const requete = await axios.put(url, {
      title: "new post",
      body: "this is a new post.",
      userId: 1,
    });
    return requete;
  } else if (request === "delete") {
    //   POST
    const requete = await axios.delete(url);

    return requete;
  } else {
    console.log("tu n'as pas entrer la bonne méthode");
  }
};

// fetch

const monFetchApi = async (url) => {
  const response = await fetch(url);
  if ("") {
    const data = await response.json();
    return data;
  } else if ("") {
    const data = await response.text();
    return data;
  }
};

// xhr

const monXhrApi = () => {
  const xhr = new XMLHttpRequest();

  console.log("c'est quoi : " + xhr);
  xhr.onreadystatechange = () => {
    console.log("READY STATE : ", xhr.readyState, " STATUS : ", xhr.status);
    if (xhr.status === 200 && xhr.readyState === 4) {
      // C'est que ma requête est finie ET que c'est un succès, je peux donc traiter le résultat
      console.log(xhr.responseText); // La réponse se trouve dans la propriété responseText (attention, c'est sous forme de string)
      const data = JSON.parse(xhr.responseText);
      console.log(data);
    }
  };
};
// xhttpr

const monXhttprApi = () => {
  const xhttpr = new XMLHttpRequest();

  xhttpr.open("GET", url, true);
  xhttpr.send();

  xhr.onload = () => {
    console.log("READY STATE : ", xhr.readyState, " STATUS : ", xhr.status);
    if (xhttpr.status === 200) {
      // C'est que ma requête est finie ET que c'est un succès, je peux donc traiter le résultat
      console.log(xhr.responseText); // La réponse se trouve dans la propriété responseText (attention, c'est sous forme de string)
      const data = JSON.parse(xhttpr.responseText);
      console.log(data);
    }
  };
};

// jquery

$.ajax({
  url: "api_address",
  method: "GET",
  success: function (response) {
    const data = JSON.parse(response);
  },
  error: function (xhr, status, error) {
    // handle errors
  },
});
