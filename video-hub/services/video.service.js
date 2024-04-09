import axios from 'axios';

export const fetchVideoByName = async (name) => {

    // Requete AJAX (via Axios)
    const response = await axios.get('search', {
        baseURL: import.meta.env.VITE_WEATHER_BASE_URL,
        params: {
            q: name,
            part: 'snippet',
            key: import.meta.env.API_KEY,
        }
    });

    // Mapping
    // const data = {
    //     temp: response.data.main.temp,
    //     desc: response.data.weather.map(w => w.description).join(' / '),
    //     city: response.data.name,
    //     country: response.data.sys.country
    // }

    // Return...
    return ;
};
