import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <CartContextProvider> 
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route 
                    path="/" 
                    exact 
                    element={ <ItemListContainer/> } 
                    />
                <Route 
                    path="/category/:idCategory" 
                    exact 
                    element={ <ItemListContainer/> } 
                    />    
                <Route 
                    path="/item/:id" 
                    exact 
                    element={ <ItemDetailContainer/> } 
                    />    
                <Route 
                    path="/cart" 
                    exact 
                    element={ <Cart/> } 
                    />    
            </Routes>
            <Footer/>
        </BrowserRouter>
    </CartContextProvider>  
  );
}

export default App;
