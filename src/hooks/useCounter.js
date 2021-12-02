import {useState} from 'react';

export const useCounter = (initial, stock) => {

    const [counter, setCounter] = useState(initial);

    const handleAdd = () => {
        counter < stock ? 
            setCounter(prev => prev + 1) : alert("No hay más stock de este producto");
    }

     const handleSubtract = () => {
        counter > initial ? 
            setCounter(prev => prev - 1) : alert("La compra minima es de 1 remera");    
    }

    return {
        counter,
        handleAdd,
        handleSubtract
    }
}
