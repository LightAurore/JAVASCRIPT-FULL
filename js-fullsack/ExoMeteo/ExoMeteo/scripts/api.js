const API_KEY = "4123bf9e94cd4b058f791b7bf2b5a75c";
const URL_API = "https://api.openweathermap.org/data/2.5/weather";

const DIV_WEATHER = document.querySelector(".weather");

const getWeatherPromise = (ville = 'Bruxelles') => {
    // axios.get(URL_API + `?q=${ville}&appid=${API_KEY}&units=metric&lang=${navigator.language.substring(0,2)}`)
    //     .then(res => {
    //         DIV_WEATHER.innerHTML = `
    //         <img src="${`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`}" alt="icone meteo" />
    //         <p> Il fait actuellement ${Math.round(res.data.main.temp)}°C et le temps est ${res.data.weather[0].description}.</p>
    //         <p> La température minimum aujourd'hui était de ${Math.round(res.data.main.temp_min)} °C et au maximum ${Math.round(res.data.main.temp_max)}°C. </p>
    //         `
    //     });

    fetch(URL_API + `?q=${ville}&appid=${API_KEY}&units=metric&lang=${navigator.language}`)
        .then(res => {
            return res.json();
        })
        .then((data) => {
            DIV_WEATHER.innerHTML = `
        <img src="${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}" alt="icone meteo" />
        <p> Il fait actuellement ${Math.round(data.main.temp)}°C et le temps est ${data.weather[0].description}.</p>
        <p> La température minimum aujourd'hui était de ${Math.round(data.main.temp_min)} °C et au maximum ${Math.round(data.main.temp_max)}°C. </p>`;
        });
}

const getWeatherAsync = async (ville = 'Bruxelles') => {
    // const res = await axios.get(URL_API + `?q=${ville}&appid=${API_KEY}&units=metric&lang=${navigator.language}`)

    // DIV_WEATHER.innerHTML = `
    //     <img src="${`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`}" alt="icone meteo" />
    //     <p> Il fait actuellement ${Math.round(res.data.main.temp)}°C et le temps est ${res.data.weather[0].description}.</p>
    //     <p> La température minimum aujourd'hui était de ${Math.round(res.data.main.temp_min)} °C et au maximum ${Math.round(res.data.main.temp_max)}°C. </p>`

    const res = await fetch(URL_API + `?q=${ville}&appid=${API_KEY}&units=metric&lang=${navigator.language}`);
    const data = await res.json();
       
    DIV_WEATHER.innerHTML = `
        <img src="${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}" alt="icone meteo" />
        <p> Il fait actuellement ${Math.round(data.main.temp)}°C et le temps est ${data.weather[0].description}.</p>
        <p> La température minimum aujourd'hui était de ${Math.round(data.main.temp_min)} °C et au maximum ${Math.round(data.main.temp_max)}°C. </p>`;
}





