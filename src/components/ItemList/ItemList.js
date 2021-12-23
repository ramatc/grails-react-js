import React, {memo} from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = memo(
    ({ products }) => {
        return (
            <section>
                {
                    products.map(product => <Item product={product} key={product.id}/>)
                }
            </section>
        )
    }
);

export default ItemList;
