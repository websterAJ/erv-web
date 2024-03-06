import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import { useDispatch, useSelector } from 'react-redux'

import styles from './styles.module.css'
import { getPedidos } from '../../redux/actions'
import axios from 'axios'

const User = () => {
    const dispatch = useDispatch()

    const pedidos = useSelector((state) => state.pedidos);

    const [order, setOrder] = useState([]);

    const createFactura = async (users_id, pedido_id) => {
        console.log(users_id, pedido_id);
        try {
            const { data } = await axios.post('/factura', {
                users_id,
                pedido_id
            })
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        dispatch(getPedidos(1))
    }, [dispatch])

    useEffect(() => {
        const grouped = pedidos?.reduce((acc, item) => {
            const existingItem = acc.find(i => i.pedidos_id === item.pedidos_id);
            if (existingItem) {
                existingItem.subtotal = parseFloat(existingItem.subtotal) + parseFloat(item.subtotal);
                existingItem.cantidad = parseFloat(existingItem.cantidad) + parseFloat(item.cantidad);
            } else {
                acc.push({ ...item });
            }
            return acc;
        }, []);
        setOrder(grouped);
    }, [pedidos]);


    return (
        <>
            <Navbar />
            <div className='container box-content box-5'>
                <div className={styles.user_container}>
                    <nav className={styles.user_navbar}>
                        <ul>
                            <li><a href="#">Item 1</a></li>
                            <li><a href="#">Item 2</a></li>
                            <li><a href="#">Item 3</a></li>
                        </ul>
                    </nav>
                    <div className={styles.user_content}>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nº Orden</th>
                                    <th scope="col">asd</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    order?.map((pedido) => (
                                        <tr>
                                            <th scope="row">{pedido.id}</th>
                                            <td>asd</td>
                                            <td>{pedido.cantidad}</td>
                                            <td>$ {pedido.subtotal}</td>
                                            <td>{pedido.fecha}</td>
                                            <td>{pedido.status_id === 3 ? 'Pendiente' : 'Pagado'}</td>
                                            <td><button onClick={() => createFactura(pedido.users_id, pedido.pedidos_id)}>Pagar</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User