import {React} from "react";
export default function Navbar() {
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