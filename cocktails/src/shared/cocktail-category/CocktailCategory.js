import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './CocktailCategory.scss';

import Tile from '../tile/Tile';

function CocktailCategory(props) {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${props.filterValue}`)
            .then(res => {
                setCocktails(res.data.drinks);
            });
    }, [props.filterValue]);

    const cocktailTiles = cocktails.map(cocktail =>
        <Tile
            title={cocktail.strDrink}
            id={cocktail.idDrink}
            imageUrl={cocktail.strDrinkThumb}
            key={cocktail.idDrink}>
        </Tile>);

    return (
        <div className="category-container">
            <input placeholder="Search by name"></input>

            <div className="category-title">
                <span></span>
                <h2>
                    {props.title}
                </h2>
                <span></span>
            </div>
            <div className="tiles-container">
            {cocktailTiles}
        </div>
        </div>
    );
}
export default CocktailCategory;
