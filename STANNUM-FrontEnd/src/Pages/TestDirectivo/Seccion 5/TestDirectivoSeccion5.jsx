import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import axios from "axios";
import { useForm } from "react-hook-form";

function TestDirectivoSeccion5() {

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
        if(respuesta.data.dominioDirectivoTestInicial.habilidadesDirectivas.sectionScore != "Undefined"){
          window.location.replace('/Test/Dominio/Directivo/6')
        }
    }}

    getUser()

  }, [token])

  const onSubmit = async (data) => {
    setLoading(true);
    const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/directivo/seccion5`,
      {
        token,
        question1: data.question1,
        question2: data.question2,
        question3: data.question3,
        question4: data.question4,
        question5: data.question5,
        question6: data.question6,
        question7: data.question7,
        question8: data.question8,
      }
    );
    if (respuesta.status === 200) {
      window.location.replace('/Test/Dominio/Directivo/6')
    }
    if (respuesta.status === 206) {
      window.location.replace('/Cerrar-sesion')
    }
    setLoading(false);
  };

  return (
    <>
      <div className="bg"></div>
      <div className='contenedorInicioTestDominioSeccion1'>
        <div className='text-center tituloDominio1Test'><h1>Test de <span>Dominio 1</span></h1></div>
        <div className='text-center titulo2InicioTestDominioSeccion1'><h2>DIRECTIVO</h2></div>
        <div className='text-center subtituloInicioTestDominioSeccion1'><h3>Sección 5 : <b>Conocimientos para ser PRO - Habilidades Directivas</b></h3></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 01</div>
          <div className="preguntaDominio">¿Comprendes y desarrollas el negocio a partir de su <b>visión</b> y <b>misión</b>?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No se<b>cuales son</b></div>
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
            <div className='textoPregunta1-10 segundoTexto1-10'>Puedo explicarlas<b>y relacionarlas</b></div>
          </div>
          {errors.question1 && <div className="error">Seleccione una respuesta.</div>}
        </div> 
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 02</div>
          <div className="preguntaDominio">¿Eres capaz de desarrollar el <b>modelo de negocio</b> de manera efectiva para cumplir la visión?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No tengo<b>habilidades</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("question2", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Tengo habilidades<b>excepcionales</b></div>
          </div>
          {errors.question2 && <div className="error">Seleccione una respuesta.</div>}
        </div> 
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 03</div>
          <div className="preguntaDominio">¿Eres capaz de crear y ejecutar <b>planes estratégicos</b> para lograr los objetivos?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No tengo<b>habilidades</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("question3", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Tengo habilidades<b>excepcionales</b></div>
          </div>
          {errors.question3 && <div className="error">Seleccione una respuesta.</div>}
        </div> 
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 04</div>
          <div className="preguntaDominio">¿Eres capaz de analizar y utilizar <b>datos</b> y <b>estadísticas</b> para medir la evolución del negocio?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No tengo<b>habilidades</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("question4", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Tengo habilidades<b>excepcionales</b></div>
          </div>
          {errors.question4 && <div className="error">Seleccione una respuesta.</div>}
        </div> 
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 05</div>
          <div className="preguntaDominio">¿Que grado de dominio tienes para aterrizar la <b>visión en objetivos estratégicos</b>?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No tengo<b>habilidades</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("question5", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Tengo habilidades<b>excepcionales</b></div>
          </div>
          {errors.question5 && <div className="error">Seleccione una respuesta.</div>}
        </div> 
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 06</div>
          <div className="preguntaDominio">¿Que grado de dominio tienes para el desarrollo integrado de las <b>áreas funcionales</b> para cumplir con los objetivos estratégicos? (Recursos humano, Administración y Finanzas, Operaciones, Marketing, Ventas, Legales, I+D, Logística, etc.)</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No tengo<b>habilidades</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("question6", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Tengo habilidades<b>excepcionales</b></div>
          </div>
          {errors.question6 && <div className="error">Seleccione una respuesta.</div>}
        </div> 
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 07</div>
          <div className="preguntaDominio">¿Podrías identificar el grado de dominio sobre tu habilidad para <b>liderar</b> equipos y motivar a los empleados?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No tengo<b>habilidades</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("question7", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Tengo habilidades<b>excepcionales</b></div>
          </div>
          {errors.question7 && <div className="error">Seleccione una respuesta.</div>}
        </div> 
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 08</div>
          <div className="preguntaDominio">¿Podrías identificar el grado de dominio sobre tu habilidad para <b>entender</b> los números de tu negocio en los estados <b>contables</b> y utilizar los informes financiero para evaluar la <b>rentabilidad</b> de los planes estratégicos, y tomar decisiones en base a <b>indicadores</b> de desempeño?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No tengo<b>habilidades</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("question8", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Tengo habilidades<b>excepcionales</b></div>
          </div>
          {errors.question8 && <div className="error">Seleccione una respuesta.</div>}
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
              <>Continuar (5/6)</>
            )}  
          </button>
        </div>
      </form>
    </>
  )
}

export default TestDirectivoSeccion5