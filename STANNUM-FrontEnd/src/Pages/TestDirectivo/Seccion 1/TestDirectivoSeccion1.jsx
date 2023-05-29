import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie'
import { useForm } from "react-hook-form";
import './testDirectivoSeccion1.css'

function TestDirectivoSeccion1() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const token = Cookies.get('token');

  if(token === undefined){
    window.location.replace('/Cerrar-sesion');
  }
  
  useEffect(() => {
    const getUser = async () =>{
    if (token) {
        const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/get-user/${token}`);
        if(respuesta.data.dominioDirectivoTestInicial.estrategico.sectionScore != "Undefined"){
          window.location.replace('/Test/Dominio/Directivo/2')
        }
    }}
    getUser()
  }, [token])

  const onSubmit = async (data) => {
    setLoading(true);
    const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/directivo/seccion1`,
      {
        token,
        question1: data.question1,
      }
    );
    if (respuesta.status === 200) {
      window.location.replace('/Test/Dominio/Directivo/2')
    }
    if (respuesta.status === 206) {
      window.location.replace('/Cerrar-sesion')
    }
  };

  return (
    <>
      <div className="bg"></div>
      <div className='contenedorInicioTestDominioSeccion1'>
        <div className='text-center tituloDominio1Test'><h1>Test de <span>Dominio 1</span></h1></div>
        <div className='text-center titulo2InicioTestDominioSeccion1'><h2>DIRECTIVO</h2></div>
        <div className='text-center subtituloInicioTestDominioSeccion1'><h3>Sección 1 : <b>Conciencia del emprendedor estratégico</b></h3></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 01</div>
          <div className="preguntaDominio">¿Qué tan sumergido en la operación estás?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>100% Sumergido<b>en la operación</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("question1", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>80% Totalmente<b>estratégico</b></div>
          </div>
          {errors.question1 && <div className="error">Seleccione una respuesta.</div>}
        </div>          
        <div className='cajaBotonEnviarRespuestasDominio'>
          <button type="submit">
            {loading ? (
              <span
                className="spinner-border spinner-border-sm mr-2"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              <>Continuar (1/6)</>
            )}            
          </button>
        </div>
      </form>
    </>
  )
}

export default TestDirectivoSeccion1