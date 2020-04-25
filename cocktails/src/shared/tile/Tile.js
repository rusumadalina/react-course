import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Tile.scss';

class Tile extends Component {
    constructor(props){
        super(props);

    }
    onTileClick(cocktailId) {
        console.log(cocktailId);
    }

    render() {
        return (
            <Link to={`/${this.props.id}`}
            className="tile"
                onClick={() => this.onTileClick(this.props.id)}>
                <img src={this.props.imageUrl}
                    alt="">
                </img>
                <p>{this.props.title}</p>
            </Link>)
    }
}

export default Tile;
