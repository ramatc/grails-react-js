import React from 'react';
import { useCartContext } from '../../context/CartContext';


const CartWidget = () => {

    const {cartList, totalQuantity} = useCartContext();
    
    return (
        <>
            <i className="fas fa-shopping-cart">
                {cartList.length < 1 ? "" : totalQuantity()}
            </i>
        </>
    )
}

export default CartWidget;
