import React from 'react';
import {Link} from 'react-router-dom'
import './Item.css';

const Item = ({ product }) => {

    const {id, name, img, category, price, stock} = product;

    return (
        <article>
           <img src={img} alt={name}/>
           <div className='divProduct'>
               <h3 className='category'>{category}</h3>
               <h4 className='nameProduct'>{name}</h4>
               <p className='price'>${price}<span className='stock'>Stock: {stock}</span></p>
               <Link to={`/item/${id}`}>
                    <button className='btnDetail'>Detalle de producto</button>
               </Link>
           </div>
        </article>
    )
}

export default Item;