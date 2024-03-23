import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../components/navbar'
import { useDispatch, useSelector } from 'react-redux'

import { getPedidos } from '../../redux/actions'
import axios from 'axios'

import styles from './styles.module.css'

const User = () => {
    const dispatch = useDispatch()

    const pedidos = useSelector((state) => state.pedidos);
    const [order, setOrder] = useState({});
    const [orders, setOrders] = useState([]);
    const fileInput = useRef(null);

    const [formData, SetFormData] = useState({
        nombre: '',
        telefono: '',
        cedula: '',
        fecha: '',
        monto: '',
        nReferencia: '',
        comprobante: null,
    });

    const createFactura = async ({ referencia, pedido_id, monto }) => {
        try {
            const dataForm = new FormData();
            dataForm.append('referencia', referencia);
            dataForm.append('pedido_id', pedido_id);
            dataForm.append('comprobante', formData.comprobante);
            dataForm.append('fecha', new Date().toJSON().slice(0, 10))
            dataForm.append('monto', monto);

            const { data } = await axios.post('/pago', dataForm, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

        } catch (error) {
            console.error(error);
        }
    };

    const handleFormData = (e) => {
        const { name, value } = e.target

        SetFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            SetFormData({
                ...formData,
                comprobante: file,
            });
        }
    };

    const resetForm = () => {
        SetFormData({
            nombre: '',
            telefono: '',
            cedula: '',
            fecha: '',
            monto: '',
            nReferencia: '',
            comprobante: null
        })
    }

    const resetFile = () => {
        fileInput.current.value = null;
    }

    useEffect(() => {
        dispatch(getPedidos(1))
    }, [dispatch])

    useEffect(() => {
        const grouped = pedidos?.reduce((acc, item) => {
            const pedido = acc.find(i => i.pedidos_id === item.pedidos_id);

            if (pedido) {
                pedido.productos.push(item.producto_id)
                pedido.subtotal = parseFloat(pedido.subtotal) + parseFloat(item.subtotal);
                pedido.cantidad = parseFloat(pedido.cantidad) + parseFloat(item.cantidad);
            } else {
                acc.push({ ...item, productos: [item.producto_id] });
            }

            return acc;
        }, []);
        setOrders(grouped);
    }, [pedidos]);


    return (
        <>
            <Navbar />
            <div className='container'>
                <h1 className={styles.order_title}>Mis Pedidos</h1>
                <div className={`container ${styles.user_container}`}>
                    {/* <nav className={styles.user_navbar}>
                        <ul>
                            <li><a href="#">Item 1</a></li>
                            <li><a href="#">Item 2</a></li>
                            <li><a href="#">Item 3</a></li>
                        </ul>
                    </nav> */}
                    <div className={styles.user_content}>
                        {
                            orders?.map((pedido) => (
                                <div className={styles.order_container}>
                                    <div className={styles.order_column}>
                                        <span>Nº de Orden </span>
                                        <span>{pedido.pedidos_id}</span>
                                    </div>
                                    <div className={styles.order_column}>
                                        <span>Fecha</span>
                                        <span>{pedido.fecha}</span>
                                    </div>
                                    <div className={styles.order_column}>
                                        <span>Total</span>
                                        <span>$ {pedido.subtotal}</span>
                                    </div>
                                    <div className={styles.order_column}>
                                        <span>Estado</span>
                                        <span> {pedido.status_id === 3 ? 'Pendiente' : pedido.status_id === 4 && 'Pagado'}</span>
                                    </div>
                                    <button className={styles.btn_order} data-toggle="modal" data-target="#myModal"
                                        onClick={() => setOrder({
                                            id: pedido.id,
                                            pedido_id: pedido.pedidos_id,
                                            productos: pedido.productos,
                                            subtotal: pedido.subtotal,
                                        })}
                                    >
                                        Pagar
                                    </button>
                                </div>
                            ))
                        }

                        {/* ---------------------------------------------------------------------------
                        -----------------------------------MODAL-----------------------------------
                        --------------------------------------------------------------------------- */}
                        <div id="myModal" className="modal fade" role="dialog" >
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4>Nº de Pedido - {order.pedido_id}</h4>
                                    </div>
                                    <div className="modal-body" >
                                        <form className={styles.form_container}>
                                            <div>
                                                <label htmlFor="">Nombre</label>
                                                <input type="text" name="nombre" id="" value={formData.nombre} onChange={handleFormData} />
                                            </div>

                                            <div>
                                                <label htmlFor="">Teléfono</label>
                                                <input type="tel" name="telefono" id="" value={formData.telefono} onChange={handleFormData} />
                                            </div>

                                            <div>
                                                <label htmlFor="">Cédula</label>
                                                <input type="text" name="cedula" id="" value={formData.cedula} onChange={handleFormData} />
                                            </div>
                                            <div>
                                                <span>Total </span>
                                                <span>$ {order.subtotal}</span>
                                            </div>
                                            <div>
                                                <label>Cargar comprobante de pago</label>
                                                <input
                                                    ref={fileInput}
                                                    type="file"
                                                    name="comprobante"
                                                    id="comprobante"
                                                    onChange={handleFileChange}
                                                    accept='image/*' />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-default"
                                            data-dismiss="modal"
                                            onClick={() => createFactura({
                                                referencia: order.id,
                                                monto: order.subtotal,
                                                pedido_id: order.pedido_id
                                            })}>
                                            Enviar
                                        </button>
                                        <button type="submit" className="btn btn-default" data-dismiss="modal"
                                            onClick={() => {
                                                resetForm()
                                                resetFile()
                                            }}>
                                            Cerrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
            </div >

        </>
    )
}

export default User