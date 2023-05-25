import React from 'react'
import { useForm } from "react-hook-form";
import './testDirectivoSeccion1.css'

function TestDirectivoSeccion1() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    window.location.replace('/Test/Dominio/Directivo/2')
  };

  return (
    <>
      <div className="bg"></div>
      <div className='contenedorInicioTestDominioSeccion1'>
        <div className='text-center tituloDominio1Test'><h1>Test de <span>Dominio 1</span></h1></div>
        <div className='text-center titulo2InicioTestDominioSeccion1'><h2>DIRECTIVO</h2></div>
        <div className='text-center subtituloInicioTestDominioSeccion1'><h3>Sección 2 : <b>Conocimientos para ser PRO - Conceptos</b></h3></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 01</div>
          <div className="preguntaDominio">¿Que es la Visión?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta1", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una descripción detallada de los productos y servicios que ofrece una empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta1", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Un plan de acción para alcanzar los objetivos a corto plazo de la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta1", { required: true })} value='3' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una declaración inspiradora que describe lo que la empresa quiere lograr a largo plazo.</span>
            </div>
          </div>
          {errors.pregunta1 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        






        <div className='cajaBotonEnviarRespuestasDominio'>
          <button type="submit">Continuar (2/6)</button>
        </div>
      </form>
    </>
  )
}

export default TestDirectivoSeccion1