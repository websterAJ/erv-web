import {React, Suspense, lazy} from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Conocenos from "../../components/conocenos";
import Testimonios from "../../components/testimonios";
import Blog from "../../components/blog";
import Galeria from "../../components/galeria";
const Header = lazy (() => import ("../../components/header"));
const Eventos = lazy (() => import ("../../components/eventos"));

export default function Home() {
    const submitData =()=>{

    }
    return (
        <>
            <Navbar/>
            <Suspense fallback = {<div id = {'loading'} />}>
                <Header/>
            </Suspense>
            <div id="page-content">
                <Conocenos/>
                <Suspense fallback = {<div id = {'loading'} />}>
                    <Testimonios/>
                </Suspense>
                <Suspense fallback = {<div id = {'loading'} />}>
                    <Eventos/>
                </Suspense>
                <Suspense fallback = {<div id = {'loading'} />}>
                    <Galeria/>
                </Suspense>
                <section className="box-content box-4 box-style-3">
                    <div className="container">
                        <div className="row">
                            <div className="box-item text-center">
                                <blockquote>
                                    <p>
                                        Así que, todas las cosas que queráis que los hombres hagan con vosotros, así también haced vosotros con ellos, porque esta es la ley y los profetas<br/>
                                        Mateo 7:12
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>
                <Suspense fallback = {<div id = {'loading'} />}>
                    <Blog/>
                </Suspense>
                <section className="box-content box-7" id="location">
                    <div className="clearfix">
                        <div className="heading" style={{marginBottom: 0}}>	
                            <h2>UBICACIÓN</h2>
                        </div>
                        <div className="box-item" >
                            <div className='embed-container maps'>
                            <Suspense fallback = {<div id = {'loading'} />}>
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.9609366477434!2d-66.95550482496205!3d10.503742989628881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5feb30d6a195%3A0x597712611e7b6f72!2sCentro%20Comercial%20Propatria!5e0!3m2!1ses!2sve!4v1706234025882!5m2!1ses!2sve"
                                    width="100%"
                                    height="400px"
                                    frameborder="0"
                                    style={{border: 0}}
                                    title="Mapa"
                                ></iframe>
                            </Suspense>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                        <a href="#page-top">
                                            <img src="images/erv.png" width="25%" alt="First slide"/>
                                        </a>
                                        <h3>Exploradores del Rey de Venezuela</h3>
                                        <p>Av. Principal de Propatria, Centro Comercial Propatria, Piso 5 Oficina B3. Caracas, Venezuela</p>
                                        <p>oficinanacionalerv@hotmail.com</p>
                                    </div>
                                    <div className="col-md-8">
                                        <h3>Formulario de contacto</h3>
                                        <div id="contact-form">
                                            <form name="form1" method="post" onSubmit={submitData}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                        <input type="text" className="form-control input-lg" name="name" id="name" placeholder="Ingrese su nombre" required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control input-lg" name="email" id="email" placeholder="Ingrese su apellido" required="required" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control input-lg" name="subject" id="subject" placeholder="Motivo del contacto" required="required" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea name="message" id="message" className="form-control" rows="4" cols="25" required="required"
                                                            placeholder="Mensaje"></textarea>
                                                        </div>						
                                                        <center><button type="submit" className="btn btn-skin" name="btnContactUs" id="btnContactUs">Enviar</button></center>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}