import {React, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllBanner } from "../../redux/actions";
export default function Header() {
    const dispatch = useDispatch();
    const banners = useSelector((state) => state.banners);
    let indicadores= [];
    let imagenes= [];
    useEffect(()=>{
        dispatch(getAllBanner());
    }, [banners,dispatch]);
    if(banners.length >0){
        banners.forEach((element, index) => {
            if(index === 0){
                indicadores.push(<li data-target="#carousel-generic" data-slide-to={index} className="active"  key={index}></li>);
                imagenes.push(
                    <div className="item active" key={index}>
                        <img src={element.imagen} alt="banner" width="100%"/>
                        <div class="header-text hidden-xs">
                            <div class="col-md-12 text-center"></div>
                        </div>
                    </div>
                );
            }else{
                indicadores.push(<li data-target="#carousel-generic" data-slide-to={index} key={index}></li>);
                imagenes.push(
                    <div className="item" key={index}>
                        <img src={element.imagen} alt="banner" width="100%"/>
                        <div class="header-text hidden-xs">
                            <div class="col-md-12 text-center"></div>
                        </div>
                    </div>
                );
            }
        })
    }
    
    return (
        <>
            <header>
                <div className="box-shadow">
                    <div id="carousel-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {indicadores}
                        </ol>
                        <div className="carousel-inner">
                            {imagenes}
                        </div>
                        <a className="left carousel-control" href="#carousel-generic" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a className="right carousel-control" href="#carousel-generic" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}