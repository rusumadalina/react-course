import React from 'react';
import './Tile.scss';

class Tile extends React.Component {
    render() {
      return (
      <div className="tile">
        <h5>{this.props.title}</h5>
        <p>{this.props.description}</p>
      </div>
      );
    }
  }

  export default Tile;