import { useContext } from "react";
import { FiltersContext } from "../context/Filters";


export const useFilters = () => {
    const {filters, setFilters} = useContext(FiltersContext)
    
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.precio >= filters.minPrice &&
          (
            filters.category === 'all' ||
            product.genero === filters.category
          )
        )
      })
  
    };
    return { filters, filterProducts, setFilters };
  }