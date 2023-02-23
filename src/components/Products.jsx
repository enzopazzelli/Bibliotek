import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';

const Products = ({ products }) => {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='bookList'>
            <div>
                {products.map(product => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        <div className="book-container" key={product.id}>
                            <img src={product.imagen} alt="Nombre del libro" className="book-img" />
                            <div className="contenedorSinTitulo">
                                <h5 className="book-title">{product.nombre}</h5>
                                <span className="book-price">${product.precio}</span>

                                <button className="book-add" style={{ backgroundColor: isProductInCart ? 'rgb(201, 106, 106)' : 'rgb(82, 170, 85)' }} onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon /> 
                      : <AddToCartIcon />
                  }</button>
                            </div>
                        </div>

                    )
                })}
            </div>
        </main>
    )
}
export default Products;




/**
 * onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
 */

/**
 * onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
 */