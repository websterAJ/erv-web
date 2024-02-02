import {React, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllEventos } from "../../redux/actions";
export default function Eventos() {
    const dispatch = useDispatch();
    const eventos = useSelector((state) => state.eventos);
    let indicadores= [];
    let Items= [];
    useEffect(()=>{
        dispatch(getAllEventos());
    }, [eventos,dispatch]);

    if(eventos.length > 0){
        eventos.forEach((element, index) => {
            Items.push(
                <div class="col-md-4" key={index}>
                    <div class="box-item text-center">
                    <img src={element.flayer} alt="evento" width="50%" />
                        <h3>{element.titulo}</h3>
                        <p dangerouslySetInnerHTML={{__html:element.resumen}}></p>
                        <a href="#" class="btn btn-skin">MÁS INFORMACIÓN</a>
                    </div>
                </div>
            )
        })
    }
    
    return (
        <>
        <section class="box-content box-2 box-style-1" id="nav-event">
			<div class="container">
				<div class="heading">
					<h2>Eventos</h2>
				</div>
				<div class="row">
					<div class="wrap">
						{Items}
						<div class="clear"></div>
					</div>
				</div>
			</div>
		</section>
        </>
    );
}