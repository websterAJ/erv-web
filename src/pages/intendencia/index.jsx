import {React, Suspense, lazy} from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Intendencia() {
    
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
                            
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}