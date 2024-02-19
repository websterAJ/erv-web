import {React, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
export default function Navbar() {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const carrito = useSelector(state => state.carrito);
    const [showFavorites, setShowFavorites] = useState(false);
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
                            <img src="images/erv.png" width="70%" alt="First slide"/>
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
                                    <a className="page-scroll" href="#location">Contactanos</a>
                                </li>
                                <li>
                                    <a className="page-scroll" href='' onClick={() => setShowFavorites(!showFavorites)}>
                                        <i className="fa fa-heart"></i>
                                        <span>{favorites?.length}</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="page-scroll" href={'/cart'}>
                                        <i className="fa fa-shopping-bag"></i>
                                        <span>{carrito[0] ? carrito[0]?.detalle_carritos?.reduce((acc, item) => acc + parseInt(item.cantidad), 0) : 0}</span>
                                    </a>
                                    <span> {carrito[0]?.detalle_carritos?.length > 0 ? `$ ${Math.round(carrito[0]?.total * 100) / 100}` : ''}</span>
                                </li>
                                <li>
                                    <a className="page-scroll" href="https://admin.ervzla.com/">Iniciar</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}