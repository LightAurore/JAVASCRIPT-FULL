fetch("https://data.economie.gouv.fr/api/v2/swagger.json")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
    console.error("Error", error);
  });
