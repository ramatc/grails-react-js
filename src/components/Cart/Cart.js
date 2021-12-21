import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartList from '../CartList/CartList';
import './Cart.css';

const Cart = () => {

    const { cartList, clearCart } = useContext(CartContext);

    return (
        <div className='cart'>
            <section>
                {cartList.map(product => <CartList product={product} key={product.id}/>)}
            </section>
            <div className='divButton'>
                <button onClick={clearCart} className='clearCart'>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Cart;
