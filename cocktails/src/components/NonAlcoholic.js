import React from 'react';
import CocktailCategory from '../shared/cocktail-category/CocktailCategory';

const NonAlcoholic = () => {
    const cocktailsCategory =
        <CocktailCategory
            title='Non-Alcoholic Cocktails'
            url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'>
        </CocktailCategory>
    return (
        <div>
            {cocktailsCategory}
        </div>
    )
}

export default NonAlcoholic;