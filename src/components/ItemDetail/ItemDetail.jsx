 import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"
import Contador from "../Contador/Contador"
import { CarritoContext } from '../../context'
import { useContext } from 'react'
import "../NavBar/NavBar.css"
import Button from 'react-bootstrap/Button';


 const ItemDetail = ({id, nombre, precio, img}) => {
     
  const [agregarCantidad, setAgregarCantidad] = useState(0)

const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);
  //   console.log("Productos agregados: " + cantidad)

    const item = { id, nombre, precio, img };
    agregarProducto(item, cantidad);
   }

  return (
  <div className="contenedorItem">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit exercitationem ab non perspiciatis reprehenderit facere! Quae perspiciatis laudantium officia? Minus, facilis molestias? Ex et eos nisi illum alias suscipit!</p>
    
  {agregarCantidad > 0 ? (
       <p><Button variant='outline-danger'><Link to="/Carrito"className='nav-link'>Ir al carrito</Link></Button></p>
      ) : (
        <Contador inicial={1} stock={10} onAdd={manejadorCantidad} />
      )}

    </div>
  )
}

export default ItemDetail