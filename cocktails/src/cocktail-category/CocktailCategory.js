import React, { Component } from 'react';
import './CocktailCategory.scss';
import Tile from '../shared/tile/Tile';

class CocktailCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isListDisplayed: true
        }
    }

    toggleList = () =>
        this.setState({ isListDisplayed: !this.state.isListDisplayed });

    render() {
        const cocktailTiles = this.props.cocktails.map(cocktail =>
            <Tile
                title={cocktail.strDrink}
                id={cocktail.idDrink}
                imageUrl={cocktail.strDrinkThumb}
                key={cocktail.idDrink}
                imageClickedCallback={this.props.imageClickedCallback}
                titleClickedCallback={this.props.titleClickedCallback}>
            </Tile>);
            
        const tilesContainer = this.state.isListDisplayed ?
            (<div className="tiles-container">
                {cocktailTiles}
            </div>) : null;


        return (
            <div className="category-container">
                <div className="category-title">
                    <span></span>
                    <h2 onClick={this.toggleList}>
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
