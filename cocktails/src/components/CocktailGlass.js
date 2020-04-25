import React from 'react';

import CocktailCategory from '../shared/cocktail-category/CocktailCategory';

const CocktailGlass = () => {
    const cocktailsCategory =
        <CocktailCategory
            title='Cocktail glass'
            url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass'>
        </CocktailCategory>
    return (
        <div>
            {cocktailsCategory}
        </div>
    )
}

export default CocktailGlass;