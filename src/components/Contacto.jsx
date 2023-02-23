import React from 'react'
import './Contacto.css'

const Contacto = () => {
  return (
    <div className='contact'>

      <h2>Contacto</h2>
      <form id="contactUs" method="post" action="#">
      

        <input type="text" name="name" id="name" required="required" className="form" placeholder="Nombre" />
        <input type="email" name="mail" id="mail" required="required" className="form" placeholder="Email" />
        <textarea name="message" id="message" className="form textArea" placeholder="Mensaje"></textarea>
        <button type="submit" id="submit" name="submit" className="formBtn semibold">Enviar</button>
      </form>
    </div>
  )
}

export default Contacto