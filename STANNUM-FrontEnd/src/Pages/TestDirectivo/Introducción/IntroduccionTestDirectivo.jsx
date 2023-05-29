import React from 'react'

function IntroduccionTestDirectivo() {
  
  return (
    <>
      <div className="bg"></div>
      <div className='d-flex flex-column align-items-center'>
          <div className='text-center mt-5 tituloDominio1Test'><h1>Test de <span>Dominio 1</span></h1></div>
          <div className='text-center tituloDominio1TestRojo'><h2>DIRECTIVO</h2></div>
          <div className='parrafoBienvenidaCentro parrafoInicioTest text-center'><p>¡En este test se pondrán a prueba tus conocimientos sobre las capacidades directivas para saber que tipo de perfil tienes!</p></div>
          <div className='text-center mt-3 importanteDominio1TestRojo'><h3>¡Importante!</h3></div>
          <div className='parrafoBienvenidaCentro parraforInicioTest2 text-center'><p>El test dura aproximadamente 20 minutos y solo podrás hacerlo una vez al iniciar.</p></div>
          <div className='parrafoBienvenidaCentro parraforInicioTest2 text-center'><p>En un futuro los test se volverán a habilitar para ir midiendo tu evolución</p></div>
      </div>
      <div className='contenedorInicioTestDominio text-white'>
        <div className='text-center tituloInicioTestDominio'><h2>Iniciar Test</h2></div>
        <div className='text-center subtituloInicioTestDominio'><h2>Dominio 1 : <b>Directivo</b></h2></div>
        <div className='text-center textoInicioTestDominio'><p>Responde con <b>honestidad</b> y <b>sinceridad</b>.</p></div>
      </div>
      <div className='cajaBotonEnviarRespuestasDominio'>
        <a href="/Test/Dominio/Directivo/1"><button type="button">Empezar</button></a>
      </div>
    </>
  )
}

export default IntroduccionTestDirectivo