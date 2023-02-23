import { products as initialProducts } from "./mocks/products.json";
import Products from "./components/Products";
// import { useState } from "react";
import Header from "./components/Header";
// import Cart from './components/Cart'
import Footer from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import { CartProvider } from "./context/Cart";
import Contacto from './components/Contacto'



function App() {
 
  const { filters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Products products={filteredProducts} />
       <Contacto/>
      <Footer /> 
     
    </CartProvider>
  )
}

export default App
