import axios from "axios";
import { useEffect, useState } from "react";


const MeteoOfCountry = ({country}) => {

    console.log(1);
    console.log(country);

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    
    useEffect(() => {
        
        setLoading(true);
        console.log(2);
        console.log(country);

        // const lander = country;

        axios.get()

        setData({ country});

        console.log(3);
        console.log(country);
        console.log(data);

        setLoading(false);

    }, [country])

    return (
        <div>
            la météo de : { country? country : 'Country' }
        </div>
    )

}

export default MeteoOfCountry;