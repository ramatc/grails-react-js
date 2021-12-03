//Datos de la db
const products = [
    {
        id: 1,
        name: "Remera",
        img:"../../../assets/images/products/remera-blanca.png",
        description:"Descripción 1",
        price: 3000,
        stock: 20
    },
    {
        id: 2,
        name: "Pantalon",
        img:"img.png",
        description:"Descripción 2",
        price: 5000,
        stock: 5
    },
    {
        id: 3,
        name: "Remera",
        img:"img.png",
        description:"Descripción 3",
        price: 4500,
        stock: 10
    }
];

export const getFech = new Promise((resolve) => {
    setTimeout( () => {
        resolve(products)
    }, 2000)
});