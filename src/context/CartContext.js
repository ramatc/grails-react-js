import {createContext, useState, useContext} from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ( {children} ) => {

    const [cartList, setCartList] = useState([]);

    const addItem = (item) => {

        const index = cartList.findIndex(index => index.id === item.id);

        if(index > -1){
            const oldItem = cartList[index].quantity;

            cartList.splice(index, 1);

            setCartList([...cartList, {...item, quantity: item.quantity + oldItem}]);
        }else{
            setCartList([...cartList, item]);
        }
    }

    const removeItem = (itemId) => {
        setCartList(cartList.filter(item => item.id !== itemId));
    }

    const clearCart = () => {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            removeItem,
            clearCart   
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

