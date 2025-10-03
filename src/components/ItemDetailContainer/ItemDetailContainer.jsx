import { useEffect, useState } from "react";
//  import { getUnProducto } from "../../../Asyncronico";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../servicios/config";
import { getDoc, doc } from "firebase/firestore";
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const {idItem} = useParams()

  // useEffect(() => {
  //   getUnProducto(idItem).then((respuesta) => setProducto(respuesta));
  // }, [idItem]);

  useEffect(()=>{
    const nuevoDoc = doc(db,"productos", idItem)

    
    getDoc(nuevoDoc)
    
      .then(res =>{
        if (res.exists()) { 
        const data = res.data()
        const nuevoProducto = {id: res.id, ...data}
        console.log("Producto obtenido:", nuevoProducto);
        setProducto(nuevoProducto)
         } else {
        console.log("No existe el producto con id:", idItem);
      }
      })
      .catch(error=> console.log(error))
  },[idItem])

  

  return (
    <div>
      {producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>}
      {/* <ItemDetail {...producto} /> */}
    </div>
  );
};

export default ItemDetailContainer;