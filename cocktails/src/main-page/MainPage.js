import React, { Component } from 'react';
import axios from 'axios';
import './MainPage.scss';
import CocktailCategory from '../cocktail-category/CocktailCategory';
import ExpandedTile from '../shared/expanded-tile/ExpandedTile';
import CocktailDetails from '../shared/cocktail-details/CocktailDetails';


class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alcoholicCocktails: [],
            nonAlcoholicCocktails: [],
            ordinaryDrinkCocktails: [],
            cocktailGlassCocktails: [],
            champaneFluteCocktails: [],
            areCategoriesDisplayed: true,
            expandedTileCocktail: {
                title: '',
                imageUrl: ''
            },
            areCocktailsDetailsDisplayed: false,
            cocktailDetails: {
                id: '',
                title: '',
                imageUrl: ''
            }
        };
    }

    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
            .then(res => {
                this.setState({ alcoholicCocktails: res.data.drinks });
            });
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            .then(res => {
                this.setState({ nonAlcoholicCocktails: res.data.drinks });
            });
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
            .then(res => {
                this.setState({ ordinaryDrinkCocktails: res.data.drinks });
            });
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
            .then(res => {
                this.setState({ cocktailGlassCocktails: res.data.drinks });
            });
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute')
            .then(res => {
                this.setState({ champaneFluteCocktails: res.data.drinks });
            });
    }

    cocktailImageClickedCallback = (cocktailTitle, cocktailImageUrl) =>
        this.setState({
            areCategoriesDisplayed: false,
            expandedTileCocktail: {
                title: cocktailTitle,
                imageUrl: cocktailImageUrl
            }
        });


    expandedTileBackClicked = () => this.setState({
        areCategoriesDisplayed: true
    });

    cocktailTitleClickedCallback = (cocktailTitle, cocktailImageUrl, cocktailId) =>{
        this.setState({
            areCocktailsDetailsDisplayed: true,
            cocktailDetails: {
                id: cocktailId,
                title: cocktailTitle,
                imageUrl: cocktailImageUrl
            }
        });

        window.scrollTo(0, 0);
    }
        


    hideCocktailDetailsClicked = () => this.setState({
        areCocktailsDetailsDisplayed: false
    });

    render() {
        const alcoholicCocktailsCategory =
            <CocktailCategory
                title="Alcoholic Cocktails"
                cocktails={this.state.alcoholicCocktails}
                imageClickedCallback={this.cocktailImageClickedCallback}
                titleClickedCallback={this.cocktailTitleClickedCallback}>
            </CocktailCategory>

        const nonAlcoholicCocktailsCategory =
            <CocktailCategory
                title="Non-Alcoholic Cocktails"
                cocktails={this.state.nonAlcoholicCocktails}
                imageClickedCallback={this.cocktailImageClickedCallback}
                titleClickedCallback={this.cocktailTitleClickedCallback}>
            </CocktailCategory>

        const ordinaryDrinkCocktailsCategory =
            <CocktailCategory
                title="Ordinary Drink"
                cocktails={this.state.ordinaryDrinkCocktails}
                imageClickedCallback={this.cocktailImageClickedCallback}
                titleClickedCallback={this.cocktailTitleClickedCallback}>
            </CocktailCategory>

        const cocktailGlassCocktailsCategory =
            <CocktailCategory
                title="Cocktail glass"
                cocktails={this.state.cocktailGlassCocktails}
                imageClickedCallback={this.cocktailImageClickedCallback}
                titleClickedCallback={this.cocktailTitleClickedCallback}>
            </CocktailCategory>

        const champaneFluteCocktailsCategory =
            <CocktailCategory
                title="Champagne flute"
                cocktails={this.state.champaneFluteCocktails}
                imageClickedCallback={this.cocktailImageClickedCallback}
                titleClickedCallback={this.cocktailTitleClickedCallback}>
            </CocktailCategory>

        const pageContent = this.state.areCategoriesDisplayed ?
            (<div className="categories">
                {alcoholicCocktailsCategory}
                {nonAlcoholicCocktailsCategory}
                {ordinaryDrinkCocktailsCategory}
                {cocktailGlassCocktailsCategory}
                {champaneFluteCocktailsCategory}
            </div>) :
            <ExpandedTile
                title={this.state.expandedTileCocktail.title}
                imageUrl={this.state.expandedTileCocktail.imageUrl}
                backClickedCallback={this.expandedTileBackClicked}>
            </ExpandedTile>


        const cocktailDetails = this.state.areCocktailsDetailsDisplayed ?
            <CocktailDetails
                title={this.state.cocktailDetails.title}
                imageUrl={this.state.cocktailDetails.imageUrl}
                id={this.state.cocktailDetails.id}
                hideDetailsCallback={this.hideCocktailDetailsClicked}>
            </CocktailDetails> : null

        return (
            <div className="main-page-container">
                <input placeholder="Search by name"></input>
                {cocktailDetails}
                {pageContent}
            </div>
        )
    }
}

export default MainPage;