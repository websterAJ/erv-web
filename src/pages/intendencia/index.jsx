import {React,useEffect} from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import { useDispatch, useSelector } from 'react-redux';
import { getAllProductos } from "../../redux/actions";

export default function Intendencia() {
    const dispatch = useDispatch();
    const productos = useSelector((state) => state.productos);
    let items=[]
    useEffect(()=>{
        dispatch(getAllProductos());
    }, [productos,dispatch]);

    if(productos.length > 0){
        productos.forEach((element, index) => {
            items.push(
                <div className="col-lg-3 col-sm-6">
                    <div className="panel ">
                        <div className="panel-header">
                            <img src={element.imagen} className="img-responsive" alt=""/>
                        </div>
                        <div className="panel-body">
                            <div className="text-center">
                                <h3>{element.nombre}</h3>
                            </div>
                            <p>{element.descripcion}</p>
                            <div className="text-right">
                                <p>${element.precio}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            )
        })
    }else{
        items.push(
            <div className="col-lg-12 col-sm-12 text-center">
                <h3>No hay productos cargadas aún.</h3>
            </div>
        )
    }

    return (
        <>
            <Navbar/>
            <header className="text-center" style={{'margin-top':'25px'}}>
                <div className="container">
                    <h1>INTENDENCIA</h1>
                    <hr />
                </div>
            </header>
            <div id="page-content">
                <section className="box-content box-5">
                    <div className="container">
                        <div className="row">
                            {items}
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}