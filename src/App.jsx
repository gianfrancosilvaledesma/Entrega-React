import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { CarritoProvider } from './context';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros/nosotros';
import Carrito from './components/Carrito/carrito';
const App=()=> {
  

  return (
     <>
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/Carrito' element={<Carrito/>}/>
      <Route path='/Nosotros' element={<Nosotros/>}/>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
     </Routes>
     </BrowserRouter>
    </> 
  )
}

export default App
