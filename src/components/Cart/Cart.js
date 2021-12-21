import React from 'react';
import { useCartContext } from '../../context/CartContext';
import CartList from '../CartList/CartList';
import './Cart.css';

const Cart = () => {

    const {cartList, removeItem, clearCart} = useCartContext();

    return (
        <div className='cart'>
            <section>
                {cartList.map(product => <CartList product={product} key={product.id} removeItem={removeItem}/>)}
            </section>
            <div className='divButton'>
                <button onClick={clearCart} className='clearCart'>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Cart;
