import { useContext } from "react"
import { CarritoContext } from "../../context"
import { Link } from "react-router-dom"
import "./carrito.css"
import "../NavBar/NavBar.css"
import Button from 'react-bootstrap/Button';
import { toast,Zoom } from "react-toastify"


const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal,eliminarProducto} = useContext(CarritoContext)

    
  const toastEliminado = (id, nombre) => {
    eliminarProducto(id);
toast.warn('Eliminaste el producto', {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Zoom,
});
  };

    if(cantidadTotal === 0) {
        return (
            <>
                <h2>Por el momento no has comprado nada</h2>
                <img className="foto" src="img/carrito.jpg.webp" alt="Carrito" />
                <h3><Button variant="info"><Link to="/"className="nav-link"> Ver Productos</Link></Button></h3>
            </>
        )
    }


  return (
    <div className="carrito">
         <h2>Tu Carrito</h2>
      {carrito.map(prod => (
        <div key={prod.item.id}>
          <h3>{prod.item.nombre}</h3>
       <img src={prod.item.img} alt={prod.item.nombre} />
          <p>Cantidad: {prod.cantidad}</p>
          <p>Precio unitario: ${prod.item.precio}</p>
          <p>Subtotal: ${prod.item.precio * prod.cantidad}</p>
          <button onClick={() => toastEliminado(prod.item.id)}>Eliminar</button>
          
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
      <p><Link to ="/Checkout"> Finalizar Compra</Link></p>
    </div>
  )
}

export default Cart