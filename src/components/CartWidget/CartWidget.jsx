import "./CartWidget.css"

const CartWidget = () => {

    const imgCarrito= "https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-cart-icon-png-image_4143896.jpg"

  return (
    <div>
        <img className="imgCarrito" src={imgCarrito} alt="Imagen de un carrito de compras" />
        <strong>7</strong>
    </div>
  )
}

export default CartWidget