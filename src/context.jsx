//1) voy a importar el useState y CreateContext

import { useState, createContext } from "react";

//2) crear el contexto

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});


export const CarritoProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    //verificamos por consola
    console.log(carrito)


    const agregarAlCarrito = (item, cantidad) =>{
        const productoExistente = carrito.find(prod => prod.item.id === item.id)

        if(!productoExistente) {
           setCarrito(prev => [...prev, {item, cantidad}])
           setCantidadTotal(prev => prev + cantidad)
           setTotal(prev => prev + (item.precio * cantidad))
            //La sinntaxis: prev => [...prev,], {item, cantidad}]) se utiliza para crear un nuevo array a partir del estado anterior del carrito y agregar un nuevo objeto que representa el producto agregado.
        } else {
            const carritoActualizado = carrito.map( prod => {
                if(prod.item.id === item.id){
                    return {...prod, cantidad: prod.cantidad + cantidad}
                } else {
                    return prod;
                }
            })
            setCarrito(carritoActualizado)
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        }
    }

    //funcion para eliminar el producto:

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id)
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id)

        setCarrito(carritoActualizado)
        setCantidadTotal(prev => prev - productoEliminado.cantidad)
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad))
    }

    //funcion para vaciar el carrito

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0)
    }
 

    return(
        <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>


    )
}

