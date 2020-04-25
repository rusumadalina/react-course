import React, { Component } from 'react';
import axios from 'axios';

import './CocktailCategory.scss';

import Tile from '../tile/Tile';

class CocktailCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktails: [],
        };
    }

    componentDidMount() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ cocktails: res.data.drinks });
            });
    }

    render() {
        const cocktailTiles = this.state.cocktails.map(cocktail =>
            <Tile
                title={cocktail.strDrink}
                id={cocktail.idDrink}
                imageUrl={cocktail.strDrinkThumb}
                key={cocktail.idDrink}>
            </Tile>);

        const tilesContainer =
            <div className="tiles-container">
                {cocktailTiles}
            </div>;


        return (
            <div className="category-container">
                <input placeholder="Search by name"></input>

                <div className="category-title">
                    <span></span>
                    <h2>
                        {this.props.title}
                    </h2>
                    <span></span>
                </div>
                {tilesContainer}
            </div>
        );
    }
}
export default CocktailCategory;
