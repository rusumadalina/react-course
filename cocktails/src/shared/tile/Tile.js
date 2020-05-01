import React from 'react';
import { Link } from 'react-router-dom';

import './Tile.scss';

function Tile(props) {
    return (
        <Link
            to={`/details/${props.id}`}
            className="tile">
            <img src={props.imageUrl}
                alt="">
            </img>
            <p>{props.title}</p>
        </Link>)
}

export default Tile;
