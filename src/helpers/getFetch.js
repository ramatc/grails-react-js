//Datos de la db
const products = [
    {
        id: 1,
        name: "Funko POP | Game Of Thrones - Daenerys Targaryen",
        img:"../assets/images/products/product1.png",
        description:"Descripción 1",
        price: 3000,
        stock: 20
    },
    {
        id: 2,
        name: "Funko POP | Game Of Thrones - Davos Seaworth",
        img:"../../assets/images/products/product2.png",
        description:"Descripción 2",
        price: 5000,
        stock: 5
    },
    {
        id: 3,
        name: "Funko POP | Game Of Thrones - Tormund Giantsbane",
        img:"../assets/images/products/product3.png",
        description:"Descripción 3",
        price: 4500,
        stock: 10
    },
    {
        id: 4,
        name: "Funko POP | Game Of Thrones - Tyrion Lannister",
        img:"../assets/images/products/product4.png",
        description:"Descripción 3",
        price: 4500,
        stock: 10
    },
    {
        id: 5,
        name: "Funko POP | Game Of Thrones - Jon Snow",
        img:"../assets/images/products/product5.png",
        description:"Descripción 3",
        price: 4500,
        stock: 10
    },
    {
        id: 6,
        name: "Funko POP | Game Of Thrones - Night King",
        img:"../assets/images/products/product6.png",
        description:"Descripción 3",
        price: 4500,
        stock: 10
    },
    {
        id: 7,
        name: "Funko POP | Game Of Thrones - Brienne of Tarth",
        img:"../assets/images/products/product7.png",
        description:"Descripción 3",
        price: 4500,
        stock: 10
    },
    {
        id: 8,
        name: "Funko POP | Game Of Thrones - Ghost",
        img:"../assets/images/products/product8.png",
        description:"Descripción 3",
        price: 4500,
        stock: 10
    },
    {
        id: 9,
        name: "Funko POP | Game Of Thrones - Daenerys",
        img:"https://cdn.shopify.com/s/files/1/0051/1072/6702/products/2_6bf40eb9-24b9-4764-9c83-78f5db9d22d6_1024x.png?v=1583977452",
        description:"Descripción 3",
        price: 4500,
        stock: 10
    }
];

export const getFetch = new Promise((resolve) => {
    setTimeout( () => {
        resolve(products)
    }, 2000)
});