import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/getFetch';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        getFetch
            .then(res => setItem(res.find(item => item.id === parseInt(id))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [id]);
    
    return (
        <div>
            <h1>ItemDetailContainer</h1>
            {loading ? <Loading/> : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;
