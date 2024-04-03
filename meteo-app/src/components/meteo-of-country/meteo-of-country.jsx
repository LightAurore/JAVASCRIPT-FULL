import axios from "axios";
import { useEffect, useState } from "react";

import style from './meteo.module.css';



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
    
        const weatherTempOption = {style:'unit', unit:'Celsius'};

    return (
        <article className={style["card-meteo"]}>
            <div>

            <h2>Météo : <span>{name}</span> </h2>
            <h3>{countryCode}</h3>
            </div>
            <p>{temperature} ° Celsius</p>
            <p>{humidity}</p>
                <span>Temps général : {condition}</span>
            <div>
                Le temps sera <span>{description}</span>
            </div>
            <div>
                <span>Pression atmosphérique : {pressure}</span><br />
                <span>Vitesse de vent : {wind} beaufort</span>
            </div>
            <p>
                {
                    ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"][(new Date().getDay()) - 1]
                }
                {' '}
                {
                //    setInterval( () => { new Date().toLocaleString(undefined,{minimumfractionDigits: 2})} , 10)
                   new Date().toLocaleString(undefined,{minimumfractionDigits: 2})
                }
            </p>
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
    const [error, setError] = useState(null);
    const [listPays, setListPays] = useState([])

    // https://developers.google.com/maps/documentation/geocoding/get-api-key

    useEffect(() => {
        
        
        console.log(2);
        console.log(country);
        setData(null);
        setLoading(true);
        
        axios.get(`weather?q=${country}&units=metric&lang=fr&appid=19662c6a10adc2f517d9c2172c2b7f8e`,{
            baseURL: 'https://api.openweathermap.org/data/2.5/'
        }
        )
        .then((resp) => {
            
            const weather = resp.data;
/* 
            const sysPays = weather.filter(w => w.name === country)

            console.log(' ----- sysPays -----')
            console.log(sysPays)
            console.log('-----------')
 */
            const myData = {
                name: weather.name,
                countryCode: weather.sys.country,
                temperature: weather.main.temp,
                humidity: weather.main.humidity,
                pressure: weather.main.pressure,
                condition: weather.weather[0].main,
                description: weather.weather[0].description,
                wind: weather.wind.speed
            }

            setData(myData);
            

            onDisplay(weather.name)

            console.log('data');
            console.log(data);
        })
        .catch((e) =>{
            console.log("error api");
            setError({err: e.error})
            setLoading(false);
        })
        .finally(() => {
        })


        console.log(3);
        console.log(country);
        console.log(data);
        console.log(isLoading);

    }, [country])

    const handleFavCities   = () => {
        if(data && !listPays.includes(data) ){

            setListPays(listPays => [...listPays, data])
        }
        console.log('FAVORIS');
        console.log(listPays);
    }

    return (
        <div>
            { console.log('---- isLoading ----')}
            { console.log(isLoading)}
            
            {
                isLoading ?
               ( <WeatherCard {...data}/>) :
               data ?
                (<WeatherError {...error}/>) :
                (<div>hello l'erreur</div>)
            }
            <button onClick={handleFavCities}>Enregistrer la ville</button>
            <ul>
                {listPays ?? (listPays.map(data => <WeatherCard {...data}/>))}
            </ul>
        </div>
    )

}


export default MeteoOfCountry;