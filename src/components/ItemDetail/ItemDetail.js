import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    const [cart, setCart]= useState(true);

    const {addItem} = useCartContext();
    
    const {id, name, img, price, stock} = item;

    const onAdd = (count) => {
        alert(`Gracias por la compra de ${count} ${name}`);
        setCart(false);
        addItem({...item, quantity: count})
    }

    return (
        <div key={id} className='containerDetail'>
            <div className='itemDetail'>
                <div className='imgDetail'>
                    <img src={img} alt={name}/>
                </div>
                <div>
                    <h3 className='titleDetail'>{name}</h3>
                    <p className='priceDetail'>${price}</p>
                    {cart 
                    ? 
                    <ItemCount stock={stock} initial={1} onAdd={onAdd}/> 
                    : 
                    <Link to="/cart">
                        <button className='btnHome'>Ir al carrito</button>
                    </Link>
                    }
                </div>
            </div>
            <Link to="/">
                <button className='btnHome'>Volver al inicio</button>
            </Link>
        </div>
    )
}

export default ItemDetail;
