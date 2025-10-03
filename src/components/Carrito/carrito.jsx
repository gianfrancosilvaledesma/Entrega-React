import { useContext } from "react"
import { CarritoContext } from "../../context"
import { Link } from "react-router-dom"
//import CartItem from "../CartItem/CartItem"

const Cart = () => {

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal === 0) {
        return (
            <>
                <h2>Por el momento no has comprado nada</h2>
                <img src="../public/img/carrito.jpg.webp" alt="" />
                <Link to="/"> Ver Productos</Link>
            </>
        )
    }


  return (
    <div>
         <h2>Tu Carrito</h2>
      {carrito.map(prod => (
        <div key={prod.item.id}>
          <h3>{prod.item.nombre}</h3>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Precio unitario: ${prod.item.precio}</p>
          <p>Subtotal: ${prod.item.precio * prod.cantidad}</p>
          <button onClick={() => eliminarProducto(prod.item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
      <Link to ="/Checkout"> Finalizar Compra</Link>
    </div>
  )
}

export default Cart