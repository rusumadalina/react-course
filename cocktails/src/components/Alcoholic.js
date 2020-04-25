import React from 'react';

import CocktailCategory from '../shared/cocktail-category/CocktailCategory';

const Alcoholic = () => {
    const cocktailsCategory =
        <CocktailCategory
            title='Alcoholic Cocktails'
            url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'>
        </CocktailCategory>
    return (
        <div>
            {cocktailsCategory}
        </div>
    )
}

export default Alcoholic;