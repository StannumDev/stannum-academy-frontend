import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './error404.css'

function Error404() {

  document.body.classList.add('error404');

  return (
    <>
    <HelmetProvider>        
      <Helmet>
          <meta name="description" content="404 STANNUM Academy" />
          <meta name="keywords" content="stannum, academia, academy, 404, error, no, encontrada" />
          <meta name="subject" content="Error 404" />
          <meta name="theme-color" content="#3A3A3A" />
          <title>Error 404</title>
      </Helmet>
    </HelmetProvider>
    <div className='d-flex flex-column justify-content-center text-center'>
        <div className='titulo404'><h1>PÁGINA <span>NO ENCONTRADA</span></h1></div>
        <div className='subtitulo404'><h2>404 - ERROR</h2></div>
        <div className='parrafo404'><p>La página que estas buscando no existe. Puede haber sido movida o eliminada.</p></div>
        <div className='parrafo404'><p><b>Puedes volver al inicio desde el siguiente botón.</b></p></div>
        <div><a href="/"><button className='botonError404'>Volver al inicio</button></a></div>
    </div>
    </>
  )
}

export default Error404