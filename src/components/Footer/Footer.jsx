import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
    <h3>Gracias por elegirnos</h3>
    <h4>Nuestra Direccion:</h4>
    <iframe id="mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.035338368433!2d-56.18945192499858!3d-34.90556267284762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81cca023f7a9%3A0x144e806a0872bdf0!2sAvenida%2018%20de%20Julio%20%26%20Ejido%2C%2011100%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1741223771434!5m2!1ses!2suy"
        // width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"   
         >
            </iframe>
             <h5>
        Telefono: 2334456709 / mail: mailprueba@gmail.com
    </h5>
</div>
  )
}

export default Footer
