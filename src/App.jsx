import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      <ItemListContainer saludo={"Hola bienvenidos a la cerveceria"} edad={"24"}/> 
 <NavBar/>
    </> 
  )
}

export default App
