import React from 'react'
import styles from './styles.module.css'
import Offcanvas from '../offcanvas'

const Filtros = ({ productName, setProductName, categorias, setMinPrice, setMaxPrice, selectedCategories, handleCategoryChange, aplicarFiltro, isOffcanvasOpen, toggleOffcanvas }) => {
    return (
        <>
            <section className={styles.filter_container}>
                <form className={styles.form_container}>

                    {/* Filtro por nombre */}
                    <label htmlFor="">Buscar</label>
                    <input type="text" placeholder="Nombre" value={productName} onChange={(e) => setProductName(e.target.value)} />

                    {/* Filtro de categorias */}
                    <div className={styles.form_category}>
                        <label htmlFor="">Categoria</label>
                        {categorias.map((categoria) => (
                            <label className={styles.title_checkbox} key={categoria.id}>
                                <input
                                    type="checkbox"
                                    id={categoria.id}
                                    value={categoria.nombre}
                                    checked={selectedCategories.includes(categoria.nombre)}
                                    onChange={() => handleCategoryChange(categoria.nombre)}
                                />
                                <span className={styles.checkmark}></span>
                                {categoria.nombre}
                            </label>
                        ))}
                    </div>

                    {/* Filtros por precio */}
                    <div className={styles.price_container}>
                        <div>
                            <label htmlFor="">Minimo</label>
                            <span className={styles.symbol_dollar}>
                                <input type="text" placeholder='0' onChange={(e) => setMinPrice(e.target.value)} />
                            </span>
                        </div>
                        <span className={styles.dash}></span>
                        <div>
                            <label htmlFor="">Maximo</label>
                            <span className={styles.symbol_dollar}>
                                <input type="text" placeholder='0' onChange={(e) => setMaxPrice(e.target.value)} />
                            </span>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Filtros