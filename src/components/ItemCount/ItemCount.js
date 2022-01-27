import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const {counter, handleSubtract, handleAdd} = useCounter(initial, stock)

    return (
        <div className="main_item_count">
            <div className="item_count">
                <button onClick={ handleSubtract }>-</button>
                <p>{ counter }</p>
                <button onClick={ handleAdd }>+</button>
            </div>

            <p>Stock disponible: { stock }</p>

            <button 
                onClick={ () => onAdd(counter) } 
                className="btnDetail">
                    Agregar al carrito
            </button>
            

        </div>
    )
}

export default ItemCount;