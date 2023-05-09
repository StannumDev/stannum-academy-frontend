import React from 'react'
import './Inicio.css'

function Inicio() {

  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <div className='text-center mt-5'><h1 className='tituloBienvenido'>¡Bienvenido a<br/><span className='tituloBienvenidoVerde'>Stannum Academy!</span></h1></div>
        <div className='parrafoBienvenidaCentro text-center'><p>Este es el <b>centro de alto rendimiento</b> en donde podrás adquirir los conocimientos y las habilidades necesarias para llevar a tu emprendimiento al siguiente nivel</p></div>
        <div className='text-center mt-5'><h2 className='tusPrimerosPasos'>Tus primeros pasos</h2></div>
      </div>
    </>
  )
}

export default Inicio