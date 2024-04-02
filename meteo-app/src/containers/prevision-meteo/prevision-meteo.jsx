import { useCallback, useState } from "react";
import MeteoOfCountry from "../../components/meteo-of-country/meteo-of-country.jsx";
import SearchByCountry from "../../components/search-by-country/search-by-country.jsx";


const PrevisionMeteo = () => {

    const [country, setCountry] = useState(null);


    const handleSearchCountry = useCallback((land) => {
        setCountry(land?.trim() ? land : null)
        // console.log(land);
    })

    return (
        <div>
            <h1>Prévision de la météo</h1>
            <SearchByCountry onSearch={handleSearchCountry} />

            <MeteoOfCountry country= {country} />
        </div>
    )
}

export default PrevisionMeteo;