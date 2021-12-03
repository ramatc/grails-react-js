import React from 'react';
import './Item.css';

const Item = ({ product }) => {

    const {name, img, description, price, stock} = product;

    return (
        <article>
            <h3>{name}</h3>
            <img src={img} alt={description}/>
            <h4>{description}</h4>
            <p>{price}</p>
            <p>{stock}</p>
        </article>
    )
}

export default Item;
