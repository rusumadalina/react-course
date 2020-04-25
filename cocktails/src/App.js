import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from './core/header/Header';
import Menu from './core/menu/Menu';
import Alcoholic from './components/Alcoholic';
import NonAlcoholic from './components/NonAlcoholic';
import CocktailGlass from './components/CocktailGlass';
import OrdinaryDrink from './components/OrdinaryDrink';
import ChampagneFlute from './components/ChampagneFlute';

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Menu></Menu>
        <div className="main-page-container">
          <Switch>
            <Route path="/alcoholic" component={Alcoholic}></Route>
            <Route path="/nonAlcoholic" component={NonAlcoholic}></Route>
            <Route path="/ordinaryDrink" component={OrdinaryDrink}></Route>
            <Route path="/cocktailGlass" component={CocktailGlass}></Route>
            <Route path="/champagneFlute" component={ChampagneFlute}></Route>

            <Route path="/" component={Alcoholic}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
