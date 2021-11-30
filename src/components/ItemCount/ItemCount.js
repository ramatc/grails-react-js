import React, {useState} from 'react';
import remera_negra from '../../assets/images/remera-negra.png';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const handleAdd = () => {
        if(count < stock){
            setCount(count + 1)
        }else{
            alert("No hay más stock de este producto")
        }
    }

    const handleSubtract = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    return (
        <div className="main_item_count">
            <h2>Remera negra</h2>
            <img src={remera_negra} alt="Remera negra"/>
            <div className="item_count">
                <button onClick={handleSubtract}>-</button>
                <p>{count}</p>
                <button onClick={handleAdd}>+</button>
            </div>
            <p>Stock: {stock}</p>
            <button 
                onClick={() => onAdd(count)} 
                className="button_cart">
                    Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount;