import React from 'react'
import './testDirectivo.css'

function TestDirectivo() {
  return (
    <>
        <div className='d-flex flex-column align-items-center'>
            <div className='text-center mt-5'><h1 className='tituloDominio1Test'>Test de Dominio 1</h1></div>
            <div className='text-center'><h1 className='tituloDominio1TestRojo'>DIRECTIVO</h1></div>
            <div className='parrafoBienvenidaCentro text-center'><p>¡En este test se pondrán a prueba tus conocimientos sobre las capacidades directivas para saber que tipo de perfil tienes!</p></div>
            <div className='text-center mt-4'><h2 className='importanteDominio1TestRojo'>¡Importante!</h2></div>
            <div className='parrafoImportanteDominio1Test text-center'><p>El test dura aproximadamente 20 minutos y solo podrás hacerlo una vez al iniciar.</p></div>
            <div className='parrafoImportanteDominio1Test text-center'><p>En un futuro los test se volverán a habilitar para ir midiendo tu evolución</p></div>
        </div>
    </>
  )
}

export default TestDirectivo