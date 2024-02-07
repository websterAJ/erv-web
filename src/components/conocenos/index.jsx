import {React} from "react";
export default function Conocenos() {
    return (
        <>
            <section className="box-content box-1" id="nav-conocenos">
                    <div className="container">
                        <div className="heading">
                            <h2>Enlaces</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="box-item text-center">
                                    <center><img src="images/pioneros.png" width="50%" /></center>
                                    <h4 className="text-center">Area PIONERO</h4>
                                    <a href="#" class="btn btn-skin">Ingresar</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-item text-center">
                                    <center><img src="images/brijer.png" width="50%" /></center>
                                    <h4 className="text-center">Area BRIJER</h4>
                                    <a href="#" class="btn btn-skin">Ingresar</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-item text-center">
                                    <center><img src="images/erv.png" width="50%" /></center>
                                    <h4 className="text-center">Area BES</h4>
                                    <a href="#" class="btn btn-skin">Ingresar</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    );
}