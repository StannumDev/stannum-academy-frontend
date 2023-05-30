import Cookies from 'js-cookie'
import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
function CerrarSesion() {

    Cookies.remove('adminToken');
    Cookies.remove('token');
    window.location.replace('/');

    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="Cerrar sesión STANNUM Academy" />
                <meta name="keywords" content="stannum, academia, academy, cerrar, sesión, usuario, cuenta, jugador" />
                <meta name="subject" content="Cerrar sesión" />
                <meta name="theme-color" content="#3A3A3A" />
                <title>Cargando | STANNUM Academy</title>
            </Helmet>
        </HelmetProvider>
    </>
    )
}

export default CerrarSesion