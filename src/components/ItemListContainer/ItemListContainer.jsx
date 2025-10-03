import { useState, useEffect } from "react"
import { db } from "../../servicios/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import ItemList from "../ItemList/ItemList"
 import { useParams } from "react-router-dom"


// const ItemListContainer = () => {
//   const [productos, setProductos] = useState ([])


  const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)

  const {idCategoria} = useParams()


   useEffect(()=>{
    setLoading(true)
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db,"productos")
    getDocs(misProductos)
      .then(res =>{
          const nuevosProductos = res.docs.map(doc=>{
            const data = doc.data()
            return {id: doc.id, ... data}
          })
          setProductos(nuevosProductos)
      })
      .catch(error => console.log(error))
      .finally(()=>{
        console.log("Proceso terminado")
        setLoading(false)
      })
  },[idCategoria])




  return (
 <>
    <h1>Cervezas a tu gusto</h1>
    <ItemList productos={productos}/>

    </>
  )
}

export default ItemListContainer