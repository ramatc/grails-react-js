import React from 'react';
import './Item.css';

const Item = ({ product }) => {

    const {name, img, description, price, stock} = product;

    return (
        <article>
           <img src={img} alt={name}/>
           <h2>{name}</h2>
           <h3>{description}</h3>
           <p>${price}</p>
           <p>Stock: {stock}</p>
        </article>
    )
}

export default Item;