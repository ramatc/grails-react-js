//Datos de la db
const products = [
    {
        id: 1,
        name: "Funko POP | Game Of Thrones - Daenerys Targaryen",
        img:"https://lh5.googleusercontent.com/gol4NX_chAXeG-6zQtmfivEqLSoQZ4per0esFPbKNtiBYusF2aYMcY3Sr3p9TkAEn21lOMZHppeYWQ=w2560-h1297",
        description:"Descripción 1",
        price: 3000,
        stock: 20
    },
    {
        id: 2,
        name: "Funko POP | Game Of Thrones - Tormund Giantsbane",
        img:"https://lh6.googleusercontent.com/Ga_z-4t9HrZRBMZ7D-YA_k9VCiB-taMNDz6EQDYQG0h-owtaN3yZbsPgzeawFhNrLtk3fM_B4pgEUp0eK2lu=w2560-h1297",
        description:"Descripción 3",
        price: 4500,
        stock: 10
    },
    {
        id: 3,
        name: "Funko POP | Game Of Thrones - Tyrion Lannister",
        img:"https://lh3.googleusercontent.com/N2y5nN2SJr24muv-TqBB2DNKRBu_-BlaykcpMEhZjMS3Tr4hHrVV7RAAlIWcglXE9WVOgWr3e8UK1G8ZIhTj=w2560-h1297",
        description:"Descripción 3",
        price: 4500,
        stock: 10
    },
    {
        id: 4,
        name: "Funko POP | Game Of Thrones - Jon Snow",
        img:"https://lh5.googleusercontent.com/DcsOKs-cbSwXe5WVLkQj5FIOL1fw6OI_n5fEzhXKR968CtRxAz1dDiMkZUv1EWO5i8R9mDdteb17L3FRsLVS=w2560-h1297",
        description:"Descripción 3",
        price: 4500,
        stock: 10
    },
    {
        id: 5,
        name: "Funko POP | Game Of Thrones - Night King",
        img:"https://lh3.googleusercontent.com/UIkewfoXr8zzYyy_4gYU3Vcu8ExxGJ55kbtYA-3o-BIwMm7UURwFNXZQThh25YyrgNPTzmiqsDs6xw6TDBnJ=w2560-h1297",
        description:"Descripción 3",
        price: 4500,
        stock: 10
    },
    {
        id: 6,
        name: "Funko POP | Game Of Thrones - Brienne of Tarth",
        img:"https://lh4.googleusercontent.com/b49wwFOoapQ8g99myvlTx7kphkcezTLshf_6RKfSTnj3VX7dKrlWDzhF_mTQWoq9ilE4dUNGOfCUp7JMarVy=w2560-h1297",
        description:"Descripción 3",
        price: 4500,
        stock: 10
    },
    {
        id: 7,
        name: "Funko POP | Game Of Thrones - Ghost",
        img:"https://lh3.googleusercontent.com/fife/AAWUweX8JQxGR9GD-3a_msjHMNhImqLFun1LxgVluTks4_LXNN03po7FIMRmoNe7WQ1MytAytShX-OpLfASSfrPcum0agaJH10UBV9LAzyOTQidnaj6lArwOp7DB-h92J3YknAB0BgkysdWrYfMIdZD_cWGNFw-opPOUYkjeVhm5YSlpeZekFCdAv-YTucvpdqZVNWb19sqT3dr22_SQVv4QAqfpQnpTLk_A37LaqqLp9ZkrvBdetW10Lpp5tP_ofbyjl_dZ7xIqDj4jLBMnaSKg83VtN5awV41WaujojSkF0LSmHdh-U0UdxyGV_QYi4UImZGrxIL8ihj9D3SfhgSRwI1nX0gq4gHBuTg9fjARPy4m9RXcP5jaLHZJ9sRnovkqO_T0DiBDVV_uA_4Iyu7XQOph57ztR7_QcqtS-Sakr3QG1IXxXJIy_jLKXfZy2SklgXUFIXsxMES73qatMJYybOJ88-48Ucl6-PKjlDLN0HIZ6tFSQ42DYJUNcJjoQuIVErv6tchJ4E2fJg3Aku95paDOynvidxA1D9eEJ1Y4mOdseg4E16bfvgfQiQqA-ebafsZBbwkscycz_p34MjTYGNoVCmstdPeXaxRT93VFtjyh2TP-8dxk2wNjfVfx9VEzOn6wRvBjdeNqwlkIAATOus35AthTrJ43eVKsf1_4jVq9RTCU0MbkQefxLL06yhhUUGabhswC5uLGMkP0O1GWzCKNbJYrscZAHmE8=w2560-h1297-ft",
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