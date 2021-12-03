import React from 'react';
import './Item.css';

const Item = ({ product }) => {

    const {id, name, img, description, price, stock} = product;

    return (
        <div>
            <li key={id}>{name}</li>
        </div>
    )
}

export default Item;
