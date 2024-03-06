import { React, useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import { useDispatch, useSelector } from 'react-redux';
import { getAllCategorias, getAllProductos, getCarrito } from "../../redux/actions";

import { BsCartPlus } from "react-icons/bs";

import styles from './styles.module.css'
import Offcanvas from "../../components/offcanvas";
import Filtros from "../../components/filtros";
import axios from "axios";

export default function Intendencia() {
    const [product, setProduct] = useState({});
    const [productName, setProductName] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [maxPrice, setMaxPrice] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    function quitarAcentos(texto) {
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const dispatch = useDispatch();

    const productos = useSelector((state) => state.productos.filter(producto => {
        if (quitarAcentos(productName) || selectedCategories.length > 0 || minPrice || maxPrice) {
            const nombreMatch = quitarAcentos(productName) ? quitarAcentos(producto.nombre).toLowerCase().includes(quitarAcentos(productName).toLowerCase()) : true;
            const categoriasMatch = selectedCategories.length > 0 ? selectedCategories.some(category => producto.categoria?.includes(category)) : true;
            const minPriceMatch = minPrice ? parseFloat(producto.precio) >= parseFloat(minPrice) : true;
            const maxPriceMatch = maxPrice ? parseFloat(producto.precio) <= parseFloat(maxPrice) : true;
            return nombreMatch && categoriasMatch && minPriceMatch && maxPriceMatch;
        }
        return true;
    }));

    const categorias = useSelector((state) => state.categorias);

    const itemsPerPage = 6;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productos.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    let items = [];

    const findItem = (id) => {
        const item = productos.find((item) => item.id === id)
        setProduct(item)
    }

    const handleCategoryChange = (category) => {
        const newSelectedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((cat) => cat !== category)
            : [...selectedCategories, category];
        setSelectedCategories(newSelectedCategories);
    };

    const addProductToCart = async (producto_id, carrito_id, cantidad, subtotal) => {
        try {
            await axios.post('/carrito/add', {
                producto_id,
                carrito_id,
                cantidad,
                subtotal
            });
            dispatch(getCarrito(1));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        dispatch(getAllProductos());
        dispatch(getAllCategorias());
    }, [dispatch]);

    if (currentItems.length > 0) {
        currentItems.forEach((element) => {
            items.push(
                <div key={element.id} className="col-lg-4 col-sm-6">
                    <div key={element.id} className="panel panel-default" role="button" >
                        <div className={`panel-header ${styles.img_responsive}`} data-toggle="modal" data-target="#myModal" onClick={() => findItem(element.id)}>
                            <img src={element.imagen} alt={element.nombre} />
                        </div>
                        <div className={`panel-body ${styles.card_body}`} data-toggle="modal" data-target="#myModal">
                            <div className="text-center">
                                <h2 className={styles.card_title}>{element.nombre}</h2>
                            </div>
                            <div className={styles.card_information}>
                                <p className={styles.card_description}>{element.categoria}</p>
                                <p className={styles.card_description}>{element.descripcion}</p>
                                <p className={styles.card_description}>{element.stock}</p>
                            </div>
                        </div>
                        <div className={styles.panelFooter}>
                            <span className={styles.icon_container}><BsCartPlus className={styles.icon} /></span>
                            <button type="button" className={styles.btn} onClick={() => addProductToCart(element.id, 1, 1, element.precio)}>
                                <p className={styles.price}>$ {element.precio}</p>
                                <span className={styles.btn_txt}>Agregar al carrito</span>
                            </button>
                        </div>
                    </div>
                </div >
            )
        })
    } else {
        items.push(
            <div className="col-lg-12 col-sm-12 text-center">
                <h3>No hay productos cargados aún.</h3>
            </div>
        )
    }

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(productos.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <Navbar />
            <header className="text-center" style={{ 'marginTop': '25px' }}>
                <div className="container">
                    <h1>INTENDENCIA</h1>
                    <hr />
                </div>
            </header>
            <div className={`${styles.page_container}`} id="page-content">

                <div className={styles.filter_container}>
                    <Filtros
                        productName={productName}
                        setProductName={setProductName}
                        categorias={categorias}
                        setMinPrice={setMinPrice}
                        setMaxPrice={setMaxPrice}
                        selectedCategories={selectedCategories}
                        handleCategoryChange={handleCategoryChange}
                        isOffcanvasOpen={isOffcanvasOpen}
                        toggleOffcanvas={toggleOffcanvas}
                    />
                </div>

                <Offcanvas isOpen={isOffcanvasOpen} toggleOffcanvas={toggleOffcanvas} openLeft>
                    <section className="box-content box-5">
                        <form className={styles.form_container}>

                            <label htmlFor="">Buscar</label>
                            <input type="text" placeholder="Nombre" value={productName} onChange={(e) => setProductName(e.target.value)} />

                            <div className={styles.form_category}>
                                <label htmlFor="">Categoria</label>
                                {categorias.map((categoria) => (
                                    <div key={categoria.id}>
                                        <input
                                            type="checkbox"
                                            id={categoria.id}
                                            value={categoria.nombre}
                                            checked={selectedCategories.includes(categoria.nombre)}
                                            onChange={() => handleCategoryChange(categoria.nombre)}
                                        />
                                        <label className={styles.title_category} htmlFor={categoria.id}>{categoria.nombre}</label>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.price_container}>
                                <div>
                                    <label htmlFor="">Minimo</label>
                                    <input type="text" onChange={(e) => setMinPrice(e.target.value)} />
                                </div>
                                <span className={styles.dash}></span>
                                <div>
                                    <label htmlFor="">Maximo</label>
                                    <input type="text" onChange={(e) => setMaxPrice(e.target.value)} />
                                </div>
                            </div>
                            <button type='button' onClick={toggleOffcanvas}>Buscar</button>
                        </form>
                    </section>
                </Offcanvas>

                <div className="container">
                    <button className={styles.btn_offcanvas} onClick={toggleOffcanvas}>Filtros</button>
                    <div className="row">
                        <div className="col">
                            {items}
                        </div>
                    </div>

                    {/* ---------------------------------------------------------------------------
                    -----------------------------------PAGINADO-----------------------------------
                    --------------------------------------------------------------------------- */}
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <a className="page-link" href="#" onClick={() => {
                                    if (currentPage !== 1) {
                                        paginate(currentPage - 1)
                                    }
                                }}>&laquo;</a>
                            </li>
                            {pageNumbers.map(number => (
                                <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                                    <a onClick={() => paginate(number)} href="#" className="page-link">
                                        {number}
                                    </a>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
                                <a className="page-link" href="#" onClick={() => {
                                    if (currentPage < pageNumbers.length) {
                                        paginate(currentPage + 1)
                                    }
                                }}
                                >&raquo;</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div >

            {/* ---------------------------------------------------------------------------
            -----------------------------------MODAL-----------------------------------
            --------------------------------------------------------------------------- */}
            < div id="myModal" className="modal fade" role="dialog" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"></button>
                            <h4 className="modal-title">{product.nombre}</h4>
                        </div>
                        <div className={`modal-body ${styles.modal_body}`} >
                            <img className={styles.modal_img} src={product.imagen} alt={product.nombre} />
                            <div className={styles.modal_description}>
                                <p>{product.descripcion}</p>
                                <p>{product.precio}</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}