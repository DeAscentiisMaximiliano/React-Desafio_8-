import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.js";
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.js";
import Brand from "./Components/Brand/Brand.js";
import Cart from "./Components/Cart/Cart.js";
import CartContextProvider from "./context/CartContext.js";





function App() {
  return (

    <BrowserRouter>
      
         <CartContextProvider>

          <div className="App">

            <NavBar/>
            <Brand/>

            <Routes>
               <Route path="/" element = {<ItemListContainer greetings={'ItemListContainer'}/> } />
               <Route path="/categoria/:categoriaId" element = {<ItemListContainer greetings={'ItemListContainer'}/> } />

               <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/> 

               <Route path="/cart" element={<Cart/>}/>



               <Route path="/*" element= { <Navigate to='/' replace />} />
            </Routes>
                                
          </div> 

         </CartContextProvider>
      
    </BrowserRouter>
    
   
  );
}

export default App;
