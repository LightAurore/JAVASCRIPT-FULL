

<!-- Axios 1 -->
axios.get(url)
        .then((response) => {

            data = {
                response.data,
                response.status,
                response.statusText,
                response.headers,
                response.config
            }
        })
        .catch((errer) => {

        })
        .finally(() => {

        })

<!-- Axios 2 -->
axios({
  baseURL: "https://jsonplaceholder.typicode.com",
  url: "/todos/1",
  method: "get",
  timeout: 2000,
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (error.code === "ECONNABORTED") {
      console.log("Request timed out");
    } else {
      console.log(error.message);
    }
  });

<!-- Axios 3 -->
const abortSignal = AbortSignal.timeout(200);

axios({
  baseURL: "https://jsonplaceholder.typicode.com",
  url: "/todos/1",
  method: "get",
  signal: abortSignal,
})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (error.code === "ERR_CANCELED" && abortSignal.aborted) {
      console.log("Request timed out");
    } else {
      console.log(error.message);
    }
  });

<!-- Axios 1 -->