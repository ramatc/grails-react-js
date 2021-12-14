import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
    
    const {id, name, img, description, price, stock} = item;

    const handleOnAdd = (count) => {
        alert(`Gracias por la compra de ${count} ${name}`);
    }

    return (
        <div key={id}>
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <h3>{description}</h3>
            <p>${price}</p>
            <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
        </div>
    )
}

export default ItemDetail
