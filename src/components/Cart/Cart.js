import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CartList from '../CartList/CartList';
import './Cart.css';

const Cart = () => {
    const {cartList, removeItem, clearCart} = useCartContext();
    
    let totalPrice = 0;

    for (let i = 0; i < cartList.length; i++) {
        totalPrice += cartList[i].price * cartList[i].quantity;
    }

    return (
        <div className='cart'>
            {cartList.length < 1 
                ?
                <div>
                    <h1>No hay productos en el carrito</h1>
                    <Link to="/">Seguir comprando</Link>
                </div> 
                : 
                <div>
                    <section>
                        {cartList.map(product => <CartList product={product} key={product.id} removeItem={removeItem}/>)}
                    </section>
                    <div className='divButton'>
                        <h1>Precio total: {totalPrice} </h1>
                        <button onClick={clearCart} className='clearCart'>Vaciar carrito</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart;
