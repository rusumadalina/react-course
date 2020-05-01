import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from './core/header/Header';
import Menu from './core/menu/Menu';
import CocktailCategory from './shared/cocktail-category/CocktailCategory';
import CocktailDetails from './shared/cocktail-details/CocktailDetails';

function App() {
  const cocktailCategories = [
    { path: '/alcoholic', title: 'Alcoholic Cocktails', filterValue: 'a=Alcoholic' },
    { path: '/nonAlcoholic', title: 'Non-Alcoholic Cocktails', filterValue: 'a=Non_Alcoholic' },
    { path: '/ordinaryDrink', title: 'Ordinary drink', filterValue: 'c=Ordinary_Drink' },
    { path: '/cocktailGlass', title: 'Cocktail glass', filterValue: 'g=Cocktail_glass' },
    { path: '/champagneFlute', title: 'Champagne flute', filterValue: 'g=Champagne_flute' },
  ]

  const CocktailCategoriesRouting = cocktailCategories.map((cocktailCategory) =>
    <Route
      key={cocktailCategory.path}
      path={cocktailCategory.path}
      render={() =>
        <CocktailCategory
          title={cocktailCategory.title}
          filterValue={cocktailCategory.filterValue} />} />
  );

  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Menu></Menu>
        <div className="main-page-container">
          <Switch>
            <Route path="/details/:id" render={(props) =>
              <CocktailDetails id={props.match.params.id} />} />

            {CocktailCategoriesRouting}

            <Route path="/" render={() =>
              <CocktailCategory
                title='Alcoholic Cocktails'
                filterValue='a=Alcoholic' />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
