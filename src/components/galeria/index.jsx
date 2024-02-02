import {React, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllGaleria } from "../../redux/actions";
export default function Galeria() {
    const dispatch = useDispatch();
    const galeria = useSelector((state) => state.galeria);
    let Items= [];
    useEffect(()=>{
        dispatch(getAllGaleria());
    }, [galeria,dispatch]);
    if(galeria.length > 0){
        galeria.forEach((element, index) => {
            Items.push(
                <div className="col-lg-4 col-sm-6">
                    <a href="#" className="portfolio-box">
                        <img src={element.flayer} className="img-responsive" alt=""/>
                    </a>
                </div>
            )
        })
    }else{
        Items.push(
            <div className="col-lg-12 col-sm-12 text-center">
                <h3>No hay imágenes cargadas aún.</h3>
            </div>
        )
    }
    return (
        <>
        <section className="box-content box-3" id="nav-gallery">
                    <div className="container">
                        <div className="row heading">
                            <div className="col-lg-12">	
                                <h2>Galeria</h2>
                            </div>
                        </div>
                        <div className="no-gutter">
                            {Items}
                        </div>
                    </div>
                </section>
        </>
    );
}