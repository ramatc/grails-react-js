import React from 'react';
import {Link} from 'react-router-dom'
import './Item.css';

const Item = ({ product }) => {

    const {id, name, img, description, price, stock} = product;

    return (
        <article>
           <img src={img} alt={name}/>
           <div>
               <h3 className='nameProduct'>{name}</h3>
               <h4 className='descriptionProduct'>{description}</h4>
               <p className='price'>${price}</p>
               <p className='stock'>Stock: {stock}</p>
               <Link to={`/item/${id}`}>
                    <button className='detailProduct'>Detalle de producto</button>
               </Link>
           </div>
        </article>
    )
}

export default Item;