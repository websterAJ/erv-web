import { React, useEffect, useState } from "react";

import { BsCart } from "react-icons/bs";
import Offcanvas from "../offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { createCarrito, createOrder, getCarrito } from "../../redux/actions";

import { FaRegTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import styles from './styles.module.css'
import axios from "axios";

export default function Navbar() {
    const dispatch = useDispatch();
    const carrito = useSelector((state) => state.carrito);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    const crearPedido = async (users_id, carrito_id) => {
        try {
            await axios.post('/pedido', {
                users_id,
                carrito_id
            })
            dispatch(createCarrito(users_id))
            dispatch(getCarrito(users_id))
        } catch (error) {
            console.error(error);
        }
    }

    const changeCant = async (producto_id, carrito_id, cantidad, subtotal) => {
        try {
            const { data } = await axios.post('/carrito/changecant', {
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

    const deleteProduct = async (producto_id, carrito_id) => {
        try {
            const { data } = await axios.post('/carrito/delete', {
                producto_id,
                carrito_id,
            });
            dispatch(getCarrito(1));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        dispatch(getCarrito(1))
    }, [dispatch])

    return (
        <>
            <div id="nav-wrapper">
                <div id="nav" className="navbar navbar-default navbar-inner">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a href="#page-top" className="navbar-brand navbar-brand-centered">
                                <img src="images/erv.png" width="70%" alt="First slide" />
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="hidden">
                                    <a href="#page-top"></a>
                                </li>
                                <li>
                                    <a className="page-scroll first" href="/">Inicio</a>
                                </li>
                                <li>
                                    <a className="page-scroll" href="#nav-conocenos">Conocenos</a>
                                </li>
                                <li>
                                    <a className="page-scroll" href="#nav-event">Eventos</a>
                                </li>
                                <li>
                                    <a className="page-scroll" href="#nav-gallery">Galeria</a>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a className="page-scroll" href="#nav-adventures">Blog</a>
                                </li>
                                <li>
                                    <a className="page-scroll" href="/intendencia">Intendencia</a>
                                </li>
                                <li>
                                    <a className="page-scroll" href="/usuario">Usuario</a>
                                </li>
                                <li>
                                    <a className="page-scroll" href="#location">Contactanos</a>
                                </li>
                                <li>
                                    <a className="page-scroll" href="https://admin.ervzla.com/">Iniciar</a>
                                </li>
                                <li>
                                    <a className={styles.cart_link} onClick={toggleOffcanvas}>
                                        <BsCart className={styles.icon_cart} /><span className={styles.cart_length}>{carrito?.length > 0 ? carrito?.reduce((acc, val) => acc + val.cantidad, 0) : 0}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ---------------------------------------------------------------------------
                    -----------------------------------CARRITO---------------------------------
                    --------------------------------------------------------------------------- */}
                <Offcanvas isOpen={isOffcanvasOpen} toggleOffcanvas={toggleOffcanvas} title='Carrito'>
                    <div className="">
                        {carrito?.map((cart, index) => (
                            <div key={index} className={styles.cart_container}>
                                <picture>
                                    <img className={styles.cart_img} src={cart.imagen} alt="" />
                                </picture>
                                <div className={styles.cart_body}>
                                    <div className={styles.cart_title_container}>
                                        <h1 className={styles.cart_title}>{cart.nombre}</h1>
                                        <span>$ {cart.subtotal}</span>
                                    </div>
                                    <div className={styles.btn_container}>
                                        <button
                                            onClick={() => changeCant(cart.producto_id, cart.carrito_id, cart.cantidad - 1, parseFloat(cart.subtotal) - cart.precio)}
                                            disabled={cart.cantidad === 1}
                                        >
                                            <FaMinus className={styles.btn_icon} />
                                        </button>
                                        <span>{cart?.cantidad}</span>
                                        <button onClick={() => changeCant(cart.producto_id, cart.carrito_id, cart.cantidad + 1, parseFloat(cart.subtotal) + cart.precio)}>
                                            <FaPlus className={styles.btn_icon} />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className={styles.cart_btn_delete}
                                        onClick={() => deleteProduct(cart.producto_id, cart.carrito_id)}
                                    >
                                        <FaRegTrashAlt />
                                    </button>
                                </div>
                            </div>
                        ))}
                        {
                            carrito?.length > 0
                                ? (
                                    <div>
                                        <div className={styles.cart_price}><span>Total</span> <span>$ {carrito?.reduce((acc, val) => acc + parseFloat(val.subtotal), 0)}</span></div>
                                        <button className={styles.cart_btn_buy} onClick={() => crearPedido(carrito[0]?.users_id, carrito[0]?.carrito_id)}>Pagar</button>
                                    </div>
                                ) : (
                                    <div><p>No hay productos en el carrito</p></div>
                                )
                        }
                    </div>
                </Offcanvas>
            </div>
        </>
    );
}