import React from 'react';
import './Item.css';

const Item = ({ product }) => {

    const {name, img, description, price, stock} = product;

    return (
        <article>
           <img src={img} alt={name}/>
           <h3>{name}</h3>
           <h4>{description}</h4>
           <p>${price}</p>
           <p>Stock: {stock}</p>
        </article>
    )
}

export default Item;