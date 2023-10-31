async function getWeatherData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("unhandledrejection", () => {
  getWeatherData();
});
