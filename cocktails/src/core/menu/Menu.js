import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alcoholic: true,
            nonAlcoholic: false,
            ordinaryDrink: false,
            cocktailGlass: false,
            champagneFlute: false,

            alcoholicDisplayName: 'Alcoholic',
            nonAlcoholicDisplayName: 'Non Alcoholic',
            ordinaryDrinkDisplayName: 'Ordinary Drink',
            cocktailGlassDisplayName: 'Cocktail Glass',
            champagneFluteDisplayName: 'Champagne Flute',

            menuItemNames: ['alcoholic', 'nonAlcoholic', 'ordinaryDrink', 'cocktailGlass', 'champagneFlute']
        };
    }

    selectMenuItem(menuItemName) {
        this.setState(prevState => ({
            [menuItemName]: !prevState[menuItemName]
        }));

        this.state.menuItemNames.filter(i => i !== menuItemName)
            .forEach(i => {
                this.setState({ [i]: false });
            })
    }

    render() {
        const menuItems = this.state.menuItemNames.map(name => {
            let cssClasses = `menu-item ${this.state[name] ? "active" : ""}`
            return <Link to={name} key={`menuItem${name}`} className={cssClasses}
                onClick={() => this.selectMenuItem(name)}>{this.state[`${name}DisplayName`]}</Link>
        });

        return (
            <div className="menu-container">
                {menuItems}
            </div>)
    }
}

export default Menu;