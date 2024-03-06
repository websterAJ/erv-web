import React, { useEffect } from 'react';
import styles from './styles.module.css';

import { IoCloseOutline } from "react-icons/io5";

const Offcanvas = ({ title, children, isOpen, toggleOffcanvas, openLeft }) => {

    const offcanvasClass = `${styles.offcanvas} ${openLeft ? styles.openLeft : styles.openRight}`;

    useEffect(() => {
        // Al montar el componente
        if (isOpen) {
            // Añadir clase al body para ocultar el scroll
            document.body.style.overflow = 'hidden';
        }

        // Al desmontar el componente
        return () => {
            // Remover la clase del body cuando se cierre el Offcanvas
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {isOpen && <div className={styles.overlay} onClick={toggleOffcanvas}></div>}
            <div className={`${offcanvasClass} ${isOpen ? styles.open : ''}`}>

                <div className={styles.content}>
                    <header>
                        <h1 className={styles.title}>{title}</h1>
                        <button className={styles.btn_close} onClick={toggleOffcanvas}><IoCloseOutline className={styles.icon_close} /></button>
                    </header>
                    <div className={styles.content_body}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Offcanvas;
