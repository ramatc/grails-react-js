import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div>
            {
                products.map(product => <Item product={product}/>)
            }
         
        </div>
    )
}

export default ItemList;
