import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ products }) => {
    return (
        <section>
            {
                products.map(product => <Item product={product} key={product.id}/>)
            }
        </section>
    )
}

export default ItemList;
