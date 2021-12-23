import React from 'react';
import { useCartContext } from '../../context/CartContext';


const CartWidget = () => {

    const {cartList} = useCartContext();
    
    let totalQuantity = 0;

    for (let i = 0; i < cartList.length; i++) {
        totalQuantity += cartList[i].quantity;
    }

    return (
        <>
            <i className="fas fa-shopping-cart">
                {cartList.length < 1 ? "" : totalQuantity}
            </i>
        </>
    )
}

export default CartWidget;
