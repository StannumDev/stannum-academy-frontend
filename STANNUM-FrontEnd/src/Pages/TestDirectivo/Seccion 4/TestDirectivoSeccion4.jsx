import React from 'react'
import { useForm } from "react-hook-form";

function TestDirectivoSeccion4() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    window.location.replace('/Test/Dominio/Directivo/5')
  };

  return (
    <>
      <div class="bg"></div>
      <div className='contenedorInicioTestDominioSeccion1'>
        <div className='text-center tituloDominio1Test'><h1>Test de <span>Dominio 1</span></h1></div>
        <div className='text-center titulo2InicioTestDominioSeccion1'><h2>DIRECTIVO</h2></div>
        <div className='text-center subtituloInicioTestDominioSeccion1'><h3>Sección 5 : <b>Conocimientos para ser PRO - Habilidades Directivas</b></h3></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>

      <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 01</div>
          <div className="preguntaDominio">¿Comprendes y desarrollas el negocio a partir de su visión y misión?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No se<b>cuales son</b></div>
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
            <div className='textoPregunta1-10 segundoTexto1-10'>Puedo explicarlas<b>y relacionarlas</b></div>
          </div>
          {errors.pregunta1 && <div className="error">Seleccione una respuesta.</div>}
        </div> 

      <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 02</div>
          <div className="preguntaDominio">¿Eres capaz de desarrollar el modelo de negocio de manera efectiva para cumplir la visión?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No tengo<b>habilidades</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("pregunta2", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Tengo habilidades<b>excepcionales</b></div>
          </div>
          {errors.pregunta2 && <div className="error">Seleccione una respuesta.</div>}
        </div> 

      <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 03</div>
          <div className="preguntaDominio">¿Eres capaz de crear y ejecutar planes estratégicos para lograr los objetivos?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No tengo<b>habilidades</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("pregunta3", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Tengo habilidades<b>excepcionales</b></div>
          </div>
          {errors.pregunta3 && <div className="error">Seleccione una respuesta.</div>}
        </div> 

      <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 04</div>
          <div className="preguntaDominio">¿Eres capaz de analizar y utilizar datos y estadísticas para medir la evolución del negocio?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No tengo<b>habilidades</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("pregunta4", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Tengo habilidades<b>excepcionales</b></div>
          </div>
          {errors.pregunta4 && <div className="error">Seleccione una respuesta.</div>}
        </div> 

      <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 05</div>
          <div className="preguntaDominio">¿Que grado de dominio tienes para aterrizar la visión en objetivos estratégicos?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No tengo<b>habilidades</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("pregunta5", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Tengo habilidades<b>excepcionales</b></div>
          </div>
          {errors.pregunta5 && <div className="error">Seleccione una respuesta.</div>}
        </div> 

      <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 06</div>
          <div className="preguntaDominio">¿Que grado de dominio tienes para el desarrollo integrado de las áreas funcionales para cumplir con los objetivos estratégicos? (Recursos humano, Administración y Finanzas, Operaciones, Marketing, Ventas, Legales, I+D, Logística, etc.)</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No tengo<b>habilidades</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("pregunta6", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Tengo habilidades<b>excepcionales</b></div>
          </div>
          {errors.pregunta6 && <div className="error">Seleccione una respuesta.</div>}
        </div> 

      <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 07</div>
          <div className="preguntaDominio">¿Podrías identificar el grado de dominio sobre tu habilidad para liderar equipos y motivar a los empleados?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No tengo<b>habilidades</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("pregunta7", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Tengo habilidades<b>excepcionales</b></div>
          </div>
          {errors.pregunta7 && <div className="error">Seleccione una respuesta.</div>}
        </div> 

      <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 08</div>
          <div className="preguntaDominio">¿Podrías identificar el grado de dominio sobre tu habilidad para para entender los números de tu negocio en los estados contables y utilizar los informes financiero para evaluar la rentabilidad de los planes estratégicos, y tomar decisiones en base a indicadores de desempeño?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No tengo<b>habilidades</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("pregunta8", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Tengo habilidades<b>excepcionales</b></div>
          </div>
          {errors.pregunta8 && <div className="error">Seleccione una respuesta.</div>}
        </div> 

        <div className='cajaBotonEnviarRespuestasDominio'>
          <button type="submit">Continuar (5/6)</button>
        </div>

      </form>
    </>
  )
}

export default TestDirectivoSeccion4