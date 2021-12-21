import React from 'react';
import './CartList.css';

const CartList = ({ product, removeItem }) => {

    const {id, name, img, description, price, quantity} = product;

    return (
        <div className='articleCart'>
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <h4>{description}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio: {price}</p>
            <p>Subtotal: {price * quantity}</p>
            <button className='clearCart' onClick={() => removeItem(id)}>Remover del carrito</button>
        </div>
    )
}

export default CartList;
