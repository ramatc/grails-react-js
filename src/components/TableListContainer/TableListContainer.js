import React from 'react';
import CartList from '../CartList/CartList';

const TableListContainer = ( {cartList, removeItem} ) => {
  return (  
        <table>
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre del producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                    <th>Remover item</th>
                </tr>
            </thead>
            {cartList.map(product => <CartList product={product} key={product.id} removeItem={removeItem}/>)}
        </table>
    );
};

export default TableListContainer;

