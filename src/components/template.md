 <div className='modal'>
      <h5>{cart.length > 0 ? 'El carrito esta lleno' : 'El carrito  
       esta vacio'}</h5>
      <div className='item-chart'>
        <img src='{book.imagen}'/>
        <p className='item-name'>{book.nombre}</p>
        <p className='item-qty'>{book.cantidad}</p>
        <p className='item-price'>{book.precio}</p>
        <button className='delete-item'>Quitar del carrito</button>
      </div>
      <div className='botones'>
        <button className='vaciar'>Vaciar carrito</button>
        <button className='comprar'>Comprar</button>
      </div>
</div>