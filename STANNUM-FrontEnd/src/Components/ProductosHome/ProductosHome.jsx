import React from 'react'
import './productosHome.css'
import cardTMD from '../../assets/cardTMDHome.png'
import cardPROEM from '../../assets/cardPROEMHome.png'
import flecha from '../../assets/flechaProductosHome.png'

function ProductosHome() {
  return (
    <>
        <div className='contenedorProductosHome'>
            <div className='textosProductosHome'>
                <div className='tituloProductosHome'><button disabled={true}>PRODUCTOS</button></div>
                <h3>Programas  a demanda.</h3>
                <h4>Con videos Micro-learning.</h4>
                <p><b>Stannum Game</b>, es una plataforma que ofrece programas de entrenamientos para emprendedores, ayudándolos a que puedan llevar sus emprendimientos al siguiente nivel.</p>
                <p>Utilizamos una metodología basada en el entrenamiento de triatlón, combinada con la diversion de los videojuegos, para ofrecer una forma divertida de aprender a ser un emprendedor.</p>
                <button type='button' className='programasDisponiblesProductosHome'>Programas disponibles</button>
            </div>
            <div className='cardPROEMHome'><img src={cardPROEM} alt="PROEM DIGITAL" /></div>
            <div className='cardTMDHome'><img src={cardTMD} alt="TRENNO MARK DIGITAL" /></div>            
            <img src={flecha} alt="Productos STANNUM" className='flechaProductosHome' />
        </div>
    </>
  )
}

export default ProductosHome