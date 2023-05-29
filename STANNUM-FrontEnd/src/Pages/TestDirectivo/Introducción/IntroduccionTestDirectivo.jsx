import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie'

function IntroduccionTestDirectivo() {
  
  const token = Cookies.get('token');
  
  if(token === undefined){
    window.location.replace('/Cerrar-sesion');
  }
  console.log(token);

  useEffect(() => {

    const getUser = async () =>{
    if (token) {
        const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/get-user/${token}`);
        if(!respuesta.data.questionnaire1StartEnabled){
          window.location.replace('/')
        }
        if (respuesta.data.dominioDirectivoTestInicial.habilidadesDigitales.sectionScore != "Undefined") {
          window.location.replace('/')
        } else if (respuesta.data.dominioDirectivoTestInicial.habilidadesDirectivas.sectionScore != "Undefined"){
          window.location.replace('/Test/Dominio/Directivo/6')
        } else if (respuesta.data.dominioDirectivoTestInicial.emprendimiento.sectionScore != "Undefined"){
          window.location.replace('/Test/Dominio/Directivo/5')
        } else if (respuesta.data.dominioDirectivoTestInicial.mercado.sectionScore != "Undefined"){
          window.location.replace('/Test/Dominio/Directivo/4')
        } else if (respuesta.data.dominioDirectivoTestInicial.conceptos.sectionScore != "Undefined"){
          window.location.replace('/Test/Dominio/Directivo/3')
        } else if (respuesta.data.dominioDirectivoTestInicial.estrategico.sectionScore != "Undefined"){
          window.location.replace('/Test/Dominio/Directivo/2')
        }
    }}
    getUser()

  }, [token])

  return (
    <>
      <div className="bg"></div>
      <div className='d-flex flex-column align-items-center'>
          <div className='text-center mt-5 tituloDominio1Test'><h1>Test de <span>Dominio 1</span></h1></div>
          <div className='text-center tituloDominio1TestRojo'><h2>DIRECTIVO</h2></div>
          <div className='parrafoBienvenidaCentro parrafoInicioTest text-center'><p>¡En este test se pondrán a prueba tus conocimientos sobre las capacidades directivas para saber que tipo de perfil tienes!</p></div>
          <div className='text-center mt-3 importanteDominio1TestRojo'><h3>¡Importante!</h3></div>
          <div className='parrafoBienvenidaCentro parraforInicioTest2 text-center'><p>El test dura aproximadamente 20 minutos y solo podrás hacerlo una vez.</p></div>
          <div className='parrafoBienvenidaCentro parraforInicioTest2 text-center'><p>En el futuro los test se volverán a habilitar para ir midiendo tu evolución.</p></div>
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