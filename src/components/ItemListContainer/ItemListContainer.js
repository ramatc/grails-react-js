import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/getFetch';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();
    
    useEffect(() => {
        if(idCategory){
            getFetch
                .then(res => setProducts(res.filter(item => item.category === idCategory)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        }else{
            getFetch
                .then(res => setProducts(res))
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        }
    }, [idCategory]);

    return (
        <main>
            {loading ? <Loading/> : <ItemList products={products}/>}
        </main>
    )
}

export default ItemListContainer;
