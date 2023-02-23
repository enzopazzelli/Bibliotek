import React from 'react';
import Filters from './Filters.jsx';
import { useId } from "react";
import './Header.css';
import { CartIcon } from './Icons.jsx';
import Cart from './Cart'


const Header = () => {
    const bookNavId = useId();
    const cartCheckboxId = useId();
    return (

        <header>
            <nav className="nav-bar">
                <label className="book-nav" htmlFor={bookNavId}>
                Filtros
                </label>
                <input id={bookNavId} type='checkbox' hidden />
                <Filters />

                <h1 className="logo" href="#">Bibliotek</h1>

                <label className="cart-button" htmlFor={cartCheckboxId}>
                    <CartIcon />
                </label>
                <input id={cartCheckboxId} type='checkbox' hidden />
                <Cart />
            </nav>
        </header>
    )
}

export default Header;
