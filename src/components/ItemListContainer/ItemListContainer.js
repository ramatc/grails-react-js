import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {

    const handleOnAdd = (count) => {
        alert(`Gracias por la compra de ${count} Remera(s) negra`);
    }

    return (
        <main>
            <p className="greeting">{greeting} <i className="fas fa-handshake"></i></p>
            <ItemCount stock={7} initial={1} onAdd={handleOnAdd}/>
        </main>
    )
}

export default ItemListContainer;
