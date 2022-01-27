import React from 'react';
import './CartList.css';

const CartList = ({ product, removeItem }) => {

    const {id, name, img, price, quantity} = product;

    return (
        <tbody>
            <tr className='tableRoad'>
                <td>
                    <img src={img} alt={name} className='cartImg'/>
                </td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>${price}</td>
                <td>${price * quantity}</td>
                <td>
                    <button className='clearItem' onClick={() => removeItem(id)}>Remover del carrito</button>
                </td>
            </tr>
        </tbody>
    )
}

export default CartList;
