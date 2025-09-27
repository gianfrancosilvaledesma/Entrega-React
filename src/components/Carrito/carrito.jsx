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
        {
            carrito.map(producto => <CartItem key={producto.id} {...producto}/>)
        }
        <h3> Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button onClick={()=> vaciarCarrito()}> Vaciar Carrito</button>
        <Link to ="/checkout"> Finalizar Compra</Link>
    </div>
  )
}

export default Cart