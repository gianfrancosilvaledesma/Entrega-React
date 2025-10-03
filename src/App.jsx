import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { CarritoProvider } from './context';
import Checkout from './components/Checkout/Checkout';
import NavBar from "./components/NavBar/NavBar"
import Footer from './components/footer/footer';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros/nosotros';
import Carrito from './components/Carrito/carrito';
import  'bootstrap/dist/css/bootstrap.min.css'
const App=()=> {
  

  return (
     <>
     <BrowserRouter>
     <CarritoProvider>
     <NavBar/>
     <Routes>
      <Route path='/Carrito' element={<Carrito/>}/>
      <Route path='/Nosotros' element={<Nosotros/>}/>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
       <Route path="/checkout" element={<Checkout/>}/>
     </Routes>
     <Footer/>
     </CarritoProvider>
     </BrowserRouter>
    </> 
  )
}

export default App
