import React, { Component } from 'react';
import './ExpandedTile.scss';

class ExpandedTile extends Component {
    onBackClicked = () => this.props.backClickedCallback();

    render() {
        return (
            <div className="expanded-tile">
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt=""></img>
                <button onClick={this.onBackClicked}>Back</button>
            </div>
        );
    }
}


export default ExpandedTile;
