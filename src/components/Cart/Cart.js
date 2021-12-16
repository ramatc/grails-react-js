import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {

    const { cartList, deleteCart } = useContext(CartContext);

    return (
        <h1 className='cart'>
            {cartList.map(prod => <li>{prod.name} {prod.count}</li>)}
            <button onClick={deleteCart}>Vaciar carrito</button>
        </h1>
    )
}

export default Cart;
