import { CartIcon, ClearCartIcon } from "./Icons";
import { useId } from "react";
import { useCart } from "../hooks/useCart";
// import './Cart.css';

function CartItem({ imagen, nombre, precio, quantity, addToCart }) {
    return (
        <li >
            <img src={imagen} alt={nombre} />
            <div>
                <strong>{nombre}</strong> - ${precio}
            </div>

            <footer>
                <small>
                    Cantidad: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}




const Cart = () => {
    const cartCheckboxId = useId();
    const { cart, clearCart, addToCart } = useCart()
    return (

        <>
            {/* <label className="cart-button" htmlFor={cartCheckboxId}>
    <CartIcon />
    </label>
    <input id={cartCheckboxId} type='checkbox' hidden /> */}

            <aside className="cart">
                    <h5>{cart.length > 0 ? 'Estos son tus productos:' : 'El carrito esta vacio'}</h5>
                <ul>
                    {
                        cart.map(product => (<CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product} />
                        ))
                    }
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
                <button onClick={clearCart}>
                    Comprar
                </button>
            </aside>




        </>
    )
}

export default Cart


/**
 * return de CartItem
 * 
 * 
 *  <li>
            <img src={imagen} alt={nombre} />
            <div>
                <strong>{nombre}</strong> - ${precio}
            </div>

            <footer>
                <small>
                    Cantidad: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
 */