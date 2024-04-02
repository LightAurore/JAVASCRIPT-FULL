import axios from "axios";
import { useEffect, useState } from "react";
// import { GpsTool } from "../../tools/gps.tool";

const WeatherCard = ({
    name,
    countryCode,
    temperature,
    humidity,
    pressure,
    condition,
    description,
    wind
    }) => {
    

    return (
        <article>
            <h2>Météo : <span>{name}</span> </h2>
            <h3>{countryCode}</h3>
            <p>{temperature}</p>
            <p>{humidity}</p>
                <div>
                <span>Temps général : {condition}</span><br />
            <p>{description}</p>

                </div>
            <div>
                <span>Pression atmosphérique : {pressure}</span><br />
                <span>Vitesse de vent : {wind}</span>
            </div>
        </article>
    )
}

const WeatherError = ({err}) => {

    return (
        <div>
            <h2>{err}</h2>
            <p>La requête n'a pas abouti</p>
        </div>
    )
}


const MeteoOfCountry = ({country, onDisplay}) => {

    console.log(1);
    console.log(country);

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)

    // https://developers.google.com/maps/documentation/geocoding/get-api-key

    useEffect(() => {
        
        
        console.log(2);
        console.log(country);
        setData(null);

        // const lander = country;
        // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={e02bc8fa29msh9d0c33cc8c9507dp1dd155jsn0ee742843e4e}


        
        axios.get(`weather?q=${country}&units=metric&appid=19662c6a10adc2f517d9c2172c2b7f8e`,{
            baseURL: 'https://api.openweathermap.org/data/2.5/'
        }
        )
        .then((resp) => {
            
            const weather = resp.data;
            
        setLoading(true);
            setData({
                name: weather.name,
                countryCode: weather.sys.country,
                temperature: weather.main.temp,
                humidity: weather.main.humidity,
                pressure: weather.main.pressure,
                condition: weather.weather[0].main,
                description: weather.weather[0].description,
                wind: weather.wind.speed
            })

            onDisplay(weather.name)

            console.log(data);
        })
        .catch((e) =>{
            console.log("error api");
            setError({err: e.error})
        })
        .finally(() => {
            setLoading(false);
        })


/*         
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: '53.1,-0.13'},
            headers: {
              'X-RapidAPI-Key': 'e02bc8fa29msh9d0c33cc8c9507dp1dd155jsn0ee742843e4e',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
          };

        const meteo = async ()=>{
            try {
              const response = await axios.request('https://weatherapi-com.p.rapidapi.com/current.json');
              console.log(response.data);
          } catch (error) {
              console.error(error);
          }
        }

        meteo()
*/
        // Geocode
        // GeocodeToll(zone);
        // GeogoogleTool()
        // GpsTool();

        console.log(3);
        console.log(country);
        console.log(data);
        console.log(isLoading);

    }, [country])

    return (
        <div>
            la météo de : { country ? country : 'Country' }
            {
                isLoading ?
               ( <WeatherCard {...data}/>) :
                (<WeatherError {...error}/>)
            }
        </div>
    )

}


export default MeteoOfCountry;