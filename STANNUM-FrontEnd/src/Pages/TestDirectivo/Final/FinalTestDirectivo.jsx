import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function FinalTestDirectivo() {
  
  const token = Cookies.get('token');
  
  if(token === undefined){
    window.location.replace('/Cerrar-sesion');
  }

  useEffect(() => {

    const getUser = async () =>{
    if (token) {
        const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/get-user/${token}`);
        if (respuesta.data.dominioDirectivoTestInicial.habilidadesDigitales.sectionScore === "Undefined" || respuesta.data.dominioDirectivoTestInicial.habilidadesDirectivas.sectionScore === "Undefined" || respuesta.data.dominioDirectivoTestInicial.emprendimiento.sectionScore === "Undefined" || respuesta.data.dominioDirectivoTestInicial.mercado.sectionScore === "Undefined" || respuesta.data.dominioDirectivoTestInicial.conceptos.sectionScore === "Undefined" || respuesta.data.dominioDirectivoTestInicial.estrategico.sectionScore === "Undefined") {
          window.location.replace('/')
        }
    }}
    getUser()

  }, [token])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Final test Dominio 1: Directivo para jugador en STANNUM Academy" />
          <meta name="keywords" content="stannum, academia, academy, test, dominio, directivo, respuestas, puntos, sección, preguntas, conocimiento, prueba, examen" />
          <meta name="subject" content="Final test Dominio 1: Directivo" />
          <meta name="theme-color" content="#3A3A3A" />
          <title>Felicidades - Test directivo | STANNUM Academy</title>
        </Helmet>
      </HelmetProvider>
      <div className="bg"></div>
      <div className='d-flex flex-column align-items-center'>
          <div className='text-center mt-5 tituloDominio1Test'><h1>Test de <span>Dominio 1</span></h1></div>
          <div className='text-center tituloDominio1TestRojo'><h2>DIRECTIVO</h2></div>
      </div>
      <div className='contenedorInicioTestDominio text-white'>
        <div className='text-center tituloInicioTestDominio'><h2>FELICIDADES!</h2></div>
        <div className='text-center subtituloInicioTestDominio'><h2>Completaste el test Dominio 1 : <b>Directivo.</b> Comenzaste tu camino para convertirte en un <b>PRO</b></h2></div>
        <div className='text-center textoInicioTestDominio'><p>Ya puedes ver los resultados disponibles en <b>tu perfil</b>.</p></div>
      </div>
      <div className='cajaBotonEnviarRespuestasDominio'>
        <a href="/"><button type="button">Inicio</button></a>
      </div>
    </>
  )
}

export default FinalTestDirectivo