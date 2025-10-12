 import React from 'react'
import { useState } from "react"
import "./ItemDetail.css"
import { Link } from "react-router-dom"
import Contador from "../Contador/Contador"
import { CarritoContext } from '../../context'
import { useContext } from 'react'
import "../NavBar/NavBar.css"
import Button from 'react-bootstrap/Button';
import { toast, Zoom } from 'react-toastify'


 const ItemDetail = ({id, nombre, precio, img, descripcion}) => {
     
  const [agregarCantidad, setAgregarCantidad] = useState(0)

const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);
  //   console.log("Productos agregados: " + cantidad)

    const item = { id, nombre, precio, img, descripcion };
    agregarProducto(item, cantidad);
    toast.success('producto agregado!', {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Zoom,
})
   }

  return (
  <div className="contenedorItem">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p className='detalle'>{descripcion}</p>
    
  {agregarCantidad > 0 ? (
       <p><Button variant='outline-danger'><Link to="/Carrito"className='nav-link'>Ir al carrito</Link></Button></p>
      ) : (
        <Contador inicial={1} stock={10} onAdd={manejadorCantidad} />
      )}

    </div>
  )
}

export default ItemDetail