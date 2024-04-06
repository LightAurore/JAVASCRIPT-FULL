import { useCallback } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useId } from "react";

import Proptypes from 'prop-types';

import style from './search.module.css';


const SearchByCountry = ({ onSearch }) => {

    const formId = useId();

    const searchRef = useRef();

    const [land, setLand] = useState('');

    const handleLand = (e) => {
        setLand(e.target.value);
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        onSearch(land.trim())

        setLand('');

        searchRef.current.focus();

    }, [land]);


    return (

        <form onSubmit={handleSubmit} className={style["land-form"]} >
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

SearchByCountry.protoType = {
    onSearch: Proptypes.funct
}

export default SearchByCountry;