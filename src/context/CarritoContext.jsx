import { createContext, useState } from "react";

// 1) Crear el contexto
export const CarritoContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

// 2) Crear el Provider
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  // Agregar un producto al carrito
  const agregarProducto = (item, cantidad) => {
    const productoExistente = carrito.find(prod => prod.item.id === item.id);

    if (!productoExistente) {
      setCarrito(prev => [...prev, { item, cantidad }]);
      setCantidadTotal(prev => prev + cantidad);
      setTotal(prev => prev + item.precio * cantidad);
    } else {
      const carritoActualizado = carrito.map(prod => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
      setCantidadTotal(prev => prev + cantidad);
      setTotal(prev => prev + item.precio * cantidad);
    }
  };

  // Vaciar carrito
  const vaciarCarrito = () => {
    setCarrito([]);
    setCantidadTotal(0);
    setTotal(0);
  };

  // Eliminar producto individual
  const eliminarProducto = (id) => {
  const productoExistente = carrito.find(prod => prod.item.id === id);

  if (!productoExistente) return;

  if (productoExistente.cantidad > 1) {
    // Resta una unidad del producto
    const carritoActualizado = carrito.map(prod => {
      if (prod.item.id === id) {
        return { ...prod, cantidad: prod.cantidad - 1 };
      } else {
        return prod;
      }
    });
    setCarrito(carritoActualizado);
    setCantidadTotal(prev => prev - 1);
    setTotal(prev => prev - productoExistente.item.precio);
  } else {
    const carritoFiltrado = carrito.filter(prod => prod.item.id !== id);
    setCarrito(carritoFiltrado);
    setCantidadTotal(prev => prev - 1);
    setTotal(prev => prev - productoExistente.item.precio);
  }
};
  // const eliminarProducto = (id) => {
  //   const productoEliminado = carrito.find(prod => prod.item.id === id);
  //   const carritoFiltrado = carrito.filter(prod => prod.item.id !== id);

  //   setCarrito(carritoFiltrado);
  //   setCantidadTotal(prev => prev - productoEliminado.cantidad);
  //   setTotal(prev => prev - productoEliminado.item.precio * productoEliminado.cantidad);
  // };

  return (
    <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarProducto, vaciarCarrito, eliminarProducto }}>
      {children}
    </CarritoContext.Provider>
  );
};

