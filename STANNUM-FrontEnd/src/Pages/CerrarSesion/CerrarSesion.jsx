import Cookies from 'js-cookie'
import React from 'react'

function CerrarSesion() {

    Cookies.remove('adminToken');
    Cookies.remove('token');
    window.location.replace('/');

    return (
    <></>
    )
}

export default CerrarSesion