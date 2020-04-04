import React, { Component } from 'react';
import './CocktailDetails.scss';

class CocktailDetails extends Component {
    onBackClicked = () => this.props.hideDetailsCallback();

    render() {
        return (
            <div className="cocktail-details">
                <div className="title">
                    <span></span>
                    <h2> Details </h2>
                    <span></span>
                </div>
                <div className="details">
                    <div className="side">
                        <button onClick={this.onBackClicked}>Hide details</button>
                        <img src={this.props.imageUrl} alt=""></img>
                    </div>
                    <div className="side">
                        <span>{this.props.title}</span>
                        <span>{this.props.id}</span>
                    </div>
                </div>
            </div>

        );
    }
}

export default CocktailDetails;
