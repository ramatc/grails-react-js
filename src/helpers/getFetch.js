//Imagenes de los productos
import product1 from '../assets/images/products/product1.png';
import product2 from '../assets/images/products/product2.png';
import product3 from '../assets/images/products/product3.png';
import product4 from '../assets/images/products/product4.png';
import product5 from '../assets/images/products/product5.png';
import product6 from '../assets/images/products/product6.png';
import product7 from '../assets/images/products/product7.png';

//Datos de la db
const products = [
    {
        id: 1,
        name: "Funko POP | Game Of Thrones - Daenerys Targaryen",
        img: product1,
        description:"Descripción 1",
        category: "funko",
        price: 3000,
        stock: 20
    },
    {
        id: 2,
        name: "Funko POP | Game Of Thrones - Davos Seaworth",
        img: product2,
        description:"Descripción 3",
        category: "funko",
        price: 4500,
        stock: 10
    },
    {
        id: 3,
        name: "Funko POP | Game Of Thrones - Tormund Giantsbane",
        img: product3,
        description:"Descripción 3",
        category: "funko",
        price: 4500,
        stock: 10
    },
    {
        id: 4,
        name: "Funko POP | Game Of Thrones - Tyrion Lannister",
        img: product4,
        description:"Descripción 3",
        category: "funko",
        price: 4500,
        stock: 10
    },
    {
        id: 5,
        name: "Funko POP | Game Of Thrones - Jon Snow",
        img: product5,
        description:"Descripción 3",
        category: "funko",
        price: 4500,
        stock: 10
    },
    {
        id: 6,
        name: "Funko POP | Game Of Thrones - Night King",
        img: product6,
        description:"Descripción 3",
        category: "funko",
        price: 4500,
        stock: 10
    },
    {
        id: 7,
        name: "Funko POP | Game Of Thrones - Brienne of Tarth",
        img: product7,
        description:"Descripción 3",
        category: "funko",
        price: 4500,
        stock: 10
    }
];

export const getFetch = new Promise((resolve) => {
    setTimeout( () => {
        resolve(products)
    }, 2000)
});