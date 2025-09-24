import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
 <>
   <header>
        <h1 className='texto'>Cerveceria LA CARBONERA</h1>
        <nav>
            <ul>
                <li>
                  <Link to="/">Cervezas</Link>
                  </li>
                <li>
                  <Link to="/Nosotros">Nosotros</Link>
                  </li>
                <li>
                  <Link to="/Carrito">Carrito</Link>
                  </li>
            </ul>
        </nav>
        <CartWidget/> 
     </header>
        
        </>
        
  )
}

export default NavBar