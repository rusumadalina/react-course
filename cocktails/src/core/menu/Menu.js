import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

function Menu() {
    return (
        <div className="menu-container">
            <Link to='/alcoholic' className="menu-item" >Alcoholic</Link>
            <Link to='/nonAlcoholic' className="menu-item">Non Alcoholic</Link>
            <Link to='/ordinaryDrink' className="menu-item">Ordinary Drink</Link>
            <Link to='/cocktailGlass' className="menu-item">Cocktail Glass</Link>
            <Link to='/champagneFlute' className="menu-item">Champagne Flute</Link>
        </div>)
}

export default Menu;