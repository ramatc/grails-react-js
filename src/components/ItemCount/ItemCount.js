import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const {counter, handleSubtract, handleAdd} = useCounter(initial, stock)

    return (
        <div className="main_item_count">
            <h2>Remera negra</h2>
            <img src="" alt="Remera negra"/>
            
            <div className="item_count">
                <button onClick={ handleSubtract }>-</button>
                <p>{ counter }</p>
                <button onClick={ handleAdd }>+</button>
            </div>

            <p>Stock disponible: { stock }</p>

            <button 
                onClick={ () => onAdd(counter) } 
                className="button_cart">
                    Agregar al carrito
            </button>

        </div>
    )
}

export default ItemCount;