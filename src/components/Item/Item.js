import React from 'react';
import {Link} from 'react-router-dom'
import './Item.css';

const Item = ({ product }) => {

    const {id, name, img, description, price, stock} = product;

    return (
        <article>
           <img src={img} alt={name}/>
           <h3>{name}</h3>
           <h4>{description}</h4>
           <p>${price}</p>
           <p>Stock: {stock}</p>

           <Link to={`/item/${id}`}>
                <button>Detalle de producto</button>
           </Link>
        </article>
    )
}

export default Item;