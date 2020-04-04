import React, { Component } from 'react';
import './Tile.scss';

class Tile extends Component {
    onImageClick = () =>
        this.props.imageClickedCallback(this.props.title, this.props.imageUrl);

    onTitleClick = () =>
        this.props.titleClickedCallback(this.props.title, this.props.imageUrl, this.props.id);


    render() {
        return (
            <div className="tile">
                <img src={this.props.imageUrl}
                    alt=""
                    onClick={this.onImageClick}>
                </img>
                <p onClick={this.onTitleClick}>{this.props.title}</p>
            </div>)
    }
}

export default Tile;
