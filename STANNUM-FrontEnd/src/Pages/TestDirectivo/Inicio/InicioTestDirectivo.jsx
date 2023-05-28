import React from 'react'
import './inicioTestDirectivo.css'
import { useForm } from "react-hook-form";

function InicioTestDirectivo() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    window.location.replace('/Test/Dominio/Directivo/1')
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
                    <input type="radio" {...register("pregunta1", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>80% Totalmente<b>estratégico</b></div>
          </div>
          {errors.pregunta1 && <div className="error">Seleccione una respuesta.</div>}
        </div>          
        <div className='cajaBotonEnviarRespuestasDominio'>
          <button type="submit">Continuar (1/6)</button>
        </div>
      </form>
    </>
  )
}

export default InicioTestDirectivo