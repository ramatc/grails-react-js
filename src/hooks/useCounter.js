import {useState} from 'react';

export const useCounter = (initial, stock) => {

    const [counter, setCounter] = useState(initial);

    const handleAdd = () => {
        counter < stock ? 
            setCounter(prev => prev + 1) : setCounter(stock);
    }

     const handleSubtract = () => {
        counter > initial ? 
            setCounter(prev => prev - 1) : setCounter(initial);    
    }

    return {
        counter,
        handleAdd,
        handleSubtract
    }
}
