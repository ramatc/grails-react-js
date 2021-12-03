import React, {useState, useEffect} from 'react';
import { getFetch } from '../../helpers/getFetch';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import './ItemListContainer.css';

const ItemListContainer = () => {

    const handleOnAdd = (count) => {
        alert(`Gracias por la compra de ${count} Remera(s) negra`);
    }

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
            .then(res => setProducts(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [])

    return (
        <main>
            <ItemCount stock={7} initial={1} onAdd={handleOnAdd}/>
            {loading ? <Loading/> : <ItemList products={products}/>}
        </main>
    )
}

export default ItemListContainer;
