 import React from 'react'
import { useState } from "react"
import { Link } from "react-router-dom"
import Contador from "../Contador/Contador"


 const ItemDetail = ({id, nombre, precio, img}) => {
     
  const [agregarCantidad, setAgregarCantidad] = useState(0)



  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad)
  }

  return (
  <div className="contenedorItem">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit exercitationem ab non perspiciatis reprehenderit facere! Quae perspiciatis laudantium officia? Minus, facilis molestias? Ex et eos nisi illum alias suscipit!</p>
    
  {agregarCantidad > 0 ? (
        <Link to="/Carrito">Ir al carrito</Link>
      ) : (
        <Contador inicial={1} stock={10} onAdd={manejadorCantidad} />
      )}

    </div>
  )
}

export default ItemDetail