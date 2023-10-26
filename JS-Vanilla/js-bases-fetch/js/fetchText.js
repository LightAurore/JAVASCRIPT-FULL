const fetchText = async () => {
  let requestString = "../data/monText.txt";

  let resp = await fetch(requestString);
  console.log(resp.status);
  console.log(resp.statusText);

  if (resp.status === 2000) {
    let data = await resp.text();
  }

  console.log(data);
};

fetchText();
