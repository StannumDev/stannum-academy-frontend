import React from 'react'

function CerrarSesion() {

    localStorage.clear();
    window.location.replace('/');

    return (
    <></>
    )
}

export default CerrarSesion