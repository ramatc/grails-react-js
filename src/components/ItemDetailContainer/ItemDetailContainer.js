import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import { getFirestore, doc, getDoc} from 'firebase/firestore';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryDb = doc(db, 'products', id)
        getDoc(queryDb)
            .then(resp => setItem({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [id]);
    
    return (
        <div className='detailContainer'>
            {loading ? <Loading/> : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;
