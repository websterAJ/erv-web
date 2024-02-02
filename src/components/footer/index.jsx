import {React} from "react";
export default function Footer() {
    return (
        <>
            <footer>
            <div className="wrap-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="copyright">Copyright &copy; Desarrollado Por <a href="https://www.devtorres.com">DevTorres</a></div>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline social-buttons">
                                <li><a href="https://twitter.com/comandoerv?lang=es"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li><a href="https://www.facebook.com/exploradores.ve/?locale=es_LA"><i className="fa fa-facebook"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </footer>
        </>
    );
}