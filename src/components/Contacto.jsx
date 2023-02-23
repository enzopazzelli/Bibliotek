import React from 'react'
import './Contacto.css'

const Contacto = () => {
  return (
    <div className='contact'>

      <h2>Contacto</h2>    
      <form action="mailto:enzopazzelli1@gmail.com" method="post" encType="text/plain">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" placeholder='Nombre' required /><br />
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" name="email" id="email" placeholder='tucorreo@mail.com' required /><br />
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea name="mensaje" id="mensaje" cols="10" rows="5" placeholder='Escribí un mensaje para nosotros'></textarea><br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Contacto