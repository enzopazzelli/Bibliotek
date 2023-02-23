import { useId } from 'react'
import { useFilters } from '../hooks/useFilters';
import './Filters.css';

const Filters = () => {
    const { filters, setFilters } = useFilters()


    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='2000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice} />
                <span>${filters.minPrice} </span>
            </div>
        
            <div>
                <label htmlFor={categoryFilterId}> Genero</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todos</option>
                    <option value="Realismo mágico">Realismo mágico</option>
                    <option value="Ciencia ficción">Ciencia Ficción</option>
                    <option value="Misterio">Misterio</option>
                    <option value="Novela">Novela</option>
                    <option value="Humor">Humor</option>
                    <option value="Romance">Romance</option>
                    <option value="Fantasía">Fantasía</option>
                </select>
            </div>
        </section>
    )
}

export default Filters;

/**
 * Realismo mágico
 * Ciencia ficción
 * Novela 
 * Novela 
 * Novela 
 * Novela
 * Novela
 * Novela 
 * Novela
 * Ciencia ficción
 * Misterio
 * Novela
 * Novela 
 * Novela 
 * Novela 
 * Novela 
 * Novela 
 * Novela 
 * Ciencia ficción
 */