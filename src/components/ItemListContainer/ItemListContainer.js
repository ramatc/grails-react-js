import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <p>{greeting} <i class="fas fa-handshake"></i></p>
        </div>
    )
}

export default ItemListContainer;
