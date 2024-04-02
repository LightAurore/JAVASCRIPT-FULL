import { useCallback } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useId } from "react";


const SearchByCountry = ({ onSearch }) => {

    const formId = useId();

    const searchRef = useRef();

    const [land, setLand] = useState('');

    const handleLand = (e) => {
        setLand(e.target.value);
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        onSearch(land)

        setLand('');

        searchRef.current.focus();

    }, [land]);


    return (

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={formId}>Entrer le nom du pays</label>
                <input id={formId} type="text" value={land} onChange={handleLand} ref={searchRef} />
                <input type="submit" value="Chercher" />
            </div>

        </form>

    )
}

SearchByCountry.preventDefault = {
    onSearch: () => {}
}

export default SearchByCountry;