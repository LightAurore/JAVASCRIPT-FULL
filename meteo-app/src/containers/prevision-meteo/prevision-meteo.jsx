import { useCallback, useState } from "react";
import MeteoOfCountry from "../../components/meteo-of-country/meteo-of-country.jsx";
import SearchByCountry from "../../components/search-by-country/search-by-country.jsx";


const PrevisionMeteo = () => {

    const [country, setCountry] = useState('Wavre');


    const handleSearchCountry = useCallback((land) => {
        setCountry(land?.trim() ? land : null)
        // console.log(land);
    })

    const handleDisplay = (land) => {
        setCountry(land?.trim() ? land : null)
    }

    return (
        <div>
            <h1>Prévision de la météo</h1>
            <SearchByCountry onSearch={handleSearchCountry} />

            <MeteoOfCountry country= {country} onDisplay={handleDisplay} />
        </div>
    )
}

export default PrevisionMeteo;