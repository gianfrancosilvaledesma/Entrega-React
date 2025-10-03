import Item from '../Item/Item'
import "./ItemList.css"
import { Link } from 'react-router-dom'

const ItemList = ({productos}) => {
  return (
  <div className='cervezasContenedor'>
   {productos.map(item=> <Item {...item}/>)}
   </div>
 )
 }

export default ItemList