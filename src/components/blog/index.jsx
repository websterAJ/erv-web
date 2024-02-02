import {React, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlog } from "../../redux/actions";
export default function Blog() {
    const dispatch = useDispatch();
    const post = useSelector((state) => state.post);
    let indicadores= [];
    let Items= [];
    useEffect(()=>{
        dispatch(getAllBlog());
    }, [post,dispatch]);
    if(post.length>0){
        post.forEach((element, index) => {
            Items.push(
                <div className="box-item col-md-3" key={index}>
                    <img src={element.flayer} className="img-responsive"/>
                    <div className="content">
                    <h3>{element.titulo}</h3>
                    <p dangerouslySetInnerHTML={{__html:element.resumen}}></p>
                        <span>{element.fecha}</span>
                        <a href="#" class="btn btn-skin">LEER MAS</a>
                    </div>
                </div>
            )
        })
    }else{
        Items.push(
            <div className="col-lg-12 col-sm-12 text-center" key={1}>
                <div className="content">
                    <h1>No hay publicaciones disponibles.</h1>
                </div>
            </div>
        )
        
    }
    
    return (
        <>
            <section className="box-content box-5" id="nav-adventures">
                <div className="container">
                    <div className="row heading">
                        <h2>Blog</h2>
                    </div>
                    <div className="row">
                        {Items}
                    </div>
                </div>
            </section>
        </>
    );
}