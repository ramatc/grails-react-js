//Datos de la db
const products = [
    {
        id: 1,
        name: "Remera",
        img:"https://www.pngall.com/wp-content/uploads/2016/04/T-Shirt-Free-Download-PNG.png",
        description:"Descripción 1",
        price: 3000,
        stock: 20
    },
    {
        id: 2,
        name: "Pantalon",
        img:"https://assets.stickpng.com/images/580b57fbd9996e24bc43bf36.png",
        description:"Descripción 2",
        price: 5000,
        stock: 5
    },
    {
        id: 3,
        name: "Gorra",
        img:"https://assets.stickpng.com/images/580b57fbd9996e24bc43bee9.png",
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