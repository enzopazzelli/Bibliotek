import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from '../reducers/cart.js'

export const CartContext = createContext();

function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    })

    return { state, addToCart, removeFromCart, clearCart }

}

export function CartProvider({ children }) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()


    
    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }
    }>
            {children}
        </CartContext.Provider>
    )
}


    // const addToCart = product => {

    //     // setCart([...cart, product])

    //     //Chequear si el producto ya esta en el carrito
    //     const productInCartIndex = cart.findIndex(item => item.id === product.id)

    //     if (productInCartIndex >= 0) {
    //         //una forma es usanto structuredClone
    //         const newCart = structuredClone(cart);
    //         newCart[productInCartIndex].quantity += 1
    //         return setCart(newCart)
    //     }

    //     // Producto  no esta en el carrito
    //     setCart(prevState => ([
    //         ...prevState,
    //         {
    //             ...product,
    //             quantity: 1
    //         }
    //     ]))
    // };

    // const removeFromCart = product => {
    //     setCart(prevState => prevState.filter(item => item.id !== product.id))

    // }

    // const clearCart = () => {
    //     setCart([])
    // }