import React from 'react';
import './ListItem.css';

function ListItem(props) {

    return (
        <div className="list-item">
            <li>{props.fruitName}</li>
            <li>{props.fruitQuantity}</li>
            <button onClick={props.deleteHandler}>Delete</button>
        </div>
    )

}

export default ListItem;