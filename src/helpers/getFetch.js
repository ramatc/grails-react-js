//Imagenes de los productos
import product1 from '../assets/images/products/product1.png';
import product2 from '../assets/images/products/product2.png';
import product3 from '../assets/images/products/product3.png';
import product4 from '../assets/images/products/product4.png';
import product5 from '../assets/images/products/product5.png';
import product6 from '../assets/images/products/product6.png';
import product7 from '../assets/images/products/product7.png';
import product8 from '../assets/images/products/product8.png';
import product9 from '../assets/images/products/product9.png';
import product10 from '../assets/images/products/product10.png';

//Datos de la db
const products = [
    {
        id: 1,
        name: "Supreme Nike Reversible Puffy Jacket Black",
        img: product1,
        description:"Descripción 1",
        category: "jacket",
        price: 950,
        stock: 5
    },
    {
        id: 2,
        name: "Supreme Nike Reversible Puffy Jacket Yellow",
        img: product2,
        description:"Descripción 3",
        category: "jacket",
        price: 1200,
        stock: 5
    },
    {
        id: 3,
        name: "Supreme Nike Reversible Puffy Jacket Red",
        img: product3,
        description:"Descripción 3",
        category: "jacket",
        price: 800,
        stock: 7
    },
    {
        id: 4,
        name: "Supreme Nike Reversible Puffy Jacket Blue",
        img: product4,
        description:"Descripción 3",
        category: "jacket",
        price: 800,
        stock: 7
    },
    {
        id: 5,
        name: "Supreme Nike Jewel Stripe Soccer Jersey Black",
        img: product5,
        description:"Descripción 3",
        category: "jersey",
        price: 500,
        stock: 25
    },
    {
        id: 6,
        name: "Supreme Nike Jewel Stripe Soccer Jersey Orange",
        img: product6,
        description:"Descripción 3",
        category: "jersey",
        price: 500,
        stock: 25
    },
    {
        id: 7,
        name: "Supreme Nike Jewel Stripe Soccer Jersey White",
        img: product7,
        description:"Descripción 3",
        category: "jersey",
        price: 500,
        stock: 20
    },
    {
        id: 8,
        name: "Nike Air Force 1 Low Supreme White",
        img: product8,
        description:"Descripción 3",
        category: "sneaker",
        price: 4500,
        stock: 10
    },
    {
        id: 9,
        name: "Nike Air Force 1 Low Supreme Black",
        img: product9,
        description:"Descripción 3",
        category: "sneaker",
        price: 4500,
        stock: 10
    },
    {
        id: 10,
        name: "Nike Air Force 1 Low Supreme Wheat",
        img: product10,
        description:"Descripción 3",
        category: "sneaker",
        price: 3500,
        stock: 10
    }
];

export const getFetch = new Promise((resolve) => {
    setTimeout( () => {
        resolve(products)
    }, 2000)
});