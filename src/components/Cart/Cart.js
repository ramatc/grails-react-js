import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';
import CartList from '../CartList/CartList';
import Form from '../Form/Form';
import './Cart.css';

const Cart = () => {
    const [idOrder, setIdOrder] = useState('');
    const [dataForm, setDataForm] = useState({name: '', phone: '', email: '', repEmail: ''});
    const {cartList, removeItem, clearCart, totalPrice} = useCartContext();

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        });
    }

    const getOrder = (e) => {
        e.preventDefault();
        let order = {
            buyer: dataForm,
            items: cartList.map(item => {
                const id = item.id;
                const name = item.name;
                const price = item.price * item.quantity;
                const quantity = item.quantity;

                return {id, name, price, quantity};
            }),
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()
        }

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(resp => setIdOrder(resp.id))
            .catch(err => console.log(err))
            .finally(() => {
                clearCart();
                setDataForm({
                    name: '', phone: '', email: ''
                })
            });
    };

    return (
        <div className='cart'>
            {cartList.length < 1 
                ?
                <div>
                    <h1>No hay productos en el carrito</h1>
                    <Link to="/">Seguir comprando</Link>
                </div> 
                : 
                <div>
                    <section>
                        {cartList.map(product => <CartList product={product} key={product.id} removeItem={removeItem}/>)}
                    </section>
                    <div className='divButton'>
                        <h1>Precio total: {totalPrice()} </h1>
                        <button onClick={clearCart} className='clearCart'>Vaciar carrito</button>
                    </div>
                    <Form handleChange={handleChange} getOrder={getOrder} dataForm={dataForm}/>
                </div>
            }
            <h3 className='order'>
                {idOrder.length !== 0 && `ID de su orden: ${idOrder}`}
            </h3>
        </div>
    )
}

export default Cart;
