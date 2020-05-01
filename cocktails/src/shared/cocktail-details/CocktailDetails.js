import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios';

import './CocktailDetails.scss';

function CocktailDetails(props) {
    let history = useHistory();
    const [cocktail, setCocktail] = useState({});

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.id}`)
            .then(res => {
                setCocktail(res.data.drinks[0]);
            });
    }, [props.id]);

    return (
        <div className="cocktail-details">
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt="" />
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    );
}

export default CocktailDetails;
