import React from 'react'
import './inicioTestDirectivo.css'
import { useForm } from "react-hook-form";

function InicioTestDirectivo() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    window.location.replace('/Test/Dominio/Directivo/Seccion-1')
  };

  return (
    <>
        <div className='d-flex flex-column align-items-center'>
            <div className='text-center mt-5 tituloDominio1Test'><h1>Test de <span>Dominio 1</span></h1></div>
            <div className='text-center tituloDominio1TestRojo'><h2>DIRECTIVO</h2></div>
            <div className='parrafoBienvenidaCentro parrafoInicioTest text-center'><p>¡En este test se pondrán a prueba tus conocimientos sobre las capacidades directivas para saber que tipo de perfil tienes!</p></div>
            <div className='text-center mt-3 importanteDominio1TestRojo'><h3>¡Importante!</h3></div>
            <div className='parrafoBienvenidaCentro parraforInicioTest2 text-center'><p>El test dura aproximadamente 20 minutos y solo podrás hacerlo una vez al iniciar.</p></div>
            <div className='parrafoBienvenidaCentro parraforInicioTest2 text-center'><p>En un futuro los test se volverán a habilitar para ir midiendo tu evolución</p></div>
        </div>
        <div className='contenedorInicioTestDominio text-white'>
          <div className='text-center tituloInicioTestDominio'><h2>Inicio del Test</h2></div>
          <div className='text-center subtituloInicioTestDominio'><h2>Sección 1 : <b>Conciencia del emprendedor estratégico</b></h2></div>
          <div className='text-center textoInicioTestDominio'><p>Un Emprendedor <b>profesional</b> mantiene un equilibrio de actividades en donde el 80% son estratégicas y menos del 20% son operativas, por por lo tanto, vamos a repetir la pregunta 1 cada cierto tiempo hasta llegar a 80% <b>estratégico</b>.</p></div>
        </div>



        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contenedorPreguntaTestDominio">
            <div className="tituloPreguntaDominio">Pregunta 01</div>
            <div className="preguntaDominio">¿Qué tan sumergido en la operación estás?</div>
            <div className='cajaPregunta1-10'>
              <div className='textoPregunta1-10 primerTexto1-10'>Muy sumergido<b>en la operación</b></div>
              <div className="contenedorInputsPregunta1-10">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <div key={value} className="d-flex flex-column align-items-center">
                    <label key={value} className="radioInputContainer">
                      <input type="radio" {...register("rating", { required: true })} value={value} />
                      <span className="checkmark"></span>
                    </label>
                    <span className="labelInput1-10">{value}</span>
                  </div>
                ))}
              </div>
              <div className='textoPregunta1-10 segundoTexto1-10'>Totalmente<b>estratégico</b></div>
            </div>
          </div>          
          <div className='cajaBotonEnviarRespuestasDominio'>
            <button type="submit">Continuar (1/6)</button>
            {errors.rating && <div className="error1-10">Hay preguntas sin responder.</div>}
          </div>
        </form>
    </>
  )
}

export default InicioTestDirectivo