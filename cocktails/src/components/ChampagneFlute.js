import React from 'react';

import CocktailCategory from '../shared/cocktail-category/CocktailCategory';

const ChampagneFlute = () => {
    const cocktailsCategory =
        <CocktailCategory
            title='Champagne flute'
            url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute'>
        </CocktailCategory>
    return (
        <div>
            {cocktailsCategory}
        </div>
    )
}

export default ChampagneFlute;