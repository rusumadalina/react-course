import React from 'react';

import CocktailCategory from '../shared/cocktail-category/CocktailCategory';

const OrdinaryDrink = () => {
    const cocktailsCategory =
        <CocktailCategory
            title='Ordinary Drink'
            url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'>
        </CocktailCategory>
    return (
        <div>
            {cocktailsCategory}
        </div>
    )
}

export default OrdinaryDrink;