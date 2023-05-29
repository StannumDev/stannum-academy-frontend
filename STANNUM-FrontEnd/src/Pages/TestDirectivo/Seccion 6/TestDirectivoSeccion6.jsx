import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import axios from "axios";
import { useForm } from "react-hook-form";

function TestDirectivoSeccion6() {

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
        if(respuesta.data.dominioDirectivoTestInicial.habilidadesDigitales.sectionScore != "Undefined"){
          window.location.replace('/Test/Dominio/Directivo/Felicidades')
        }
    }}

    getUser()

  }, [token])

  const onSubmit = async (data) => {
    setLoading(true);

    let justificacion1 = "Undefined"
    if (data.question1Justification && data.question1 != 'No.'){
      justificacion1= data.question1Justification.trim()
    }

    let justificacion3 = "Undefined"
    if (data.question3Justification && data.question3 != 'No.'){
      justificacion3= data.question3Justification.trim()
    }

    let justificacion4 = "Undefined"
    if (data.question4Justification && data.question4 != 'No.'){
      justificacion4= data.question4Justification.trim()
    }

    let justificacion5 = "Undefined"
    if (data.question5Justification && data.question5 != 'No.'){
      justificacion5= data.question5Justification.trim()
    }

    const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/directivo/seccion6`,
      {
        token,
        question1: data.question1,
        question1Justification: justificacion1,
        question2: data.question2,
        question3: data.question3,
        question3Justification: justificacion3,
        question4: data.question4,
        question4Justification: justificacion4,
        question5: data.question5,
        question5Justification: justificacion5
      }
    );
    if (respuesta.status === 200) {
      window.location.replace('/Test/Dominio/Directivo/Felicidades')
    }
    if (respuesta.status === 206) {
      window.location.replace('/Cerrar-sesion')
    }
    setLoading(false);
  };

  const [showAdditionalInput1, setShowAdditionalInput1] = useState(false);
  const [showAdditionalInput3, setShowAdditionalInput3] = useState(false);
  const [showAdditionalInput4, setShowAdditionalInput4] = useState(false);
  const [showAdditionalInput5, setShowAdditionalInput5] = useState(false);

  const handleRadioChange1 = (event) => {
    setShowAdditionalInput1(event.target.value === 'Sí.');
  };
  const handleRadioChange3 = (event) => {
    setShowAdditionalInput3(event.target.value === 'Sí.');
  };
  const handleRadioChange4 = (event) => {
    setShowAdditionalInput4(event.target.value === 'Sí.');
  };
  const handleRadioChange5 = (event) => {
    setShowAdditionalInput5(event.target.value === 'Sí.');
  };

  return (
    <>
      <div className="bg"></div>
      <div className='contenedorInicioTestDominioSeccion1'>
        <div className='text-center tituloDominio1Test'><h1>Test de <span>Dominio 1</span></h1></div>
        <div className='text-center titulo2InicioTestDominioSeccion1'><h2>DIRECTIVO</h2></div>
        <div className='text-center subtituloInicioTestDominioSeccion1'><h3>Sección 6 : <b>Conocimientos para ser PRO - Habilidades Digitales</b></h3></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 01</div>
          <div className="preguntaDominio">¿Utilizas una plataforma de <b>almacenamiento</b> de información en la <b>Nube</b>, como Dropbox o Google Drive?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question1", { required: true })} value='Sí.' onChange={handleRadioChange1}  />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question1", { required: true })} value='No.' onChange={handleRadioChange1}  />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question1 && <div className="error">Seleccione una respuesta.</div>}
          {showAdditionalInput1 && (
            <>
            <div className="contenedorInputsPregunta1-3">
              <input type="text" {...register("question1Justification", { required: true })} className='inputLogin mt-3 ps-2 rounded' placeholder="¿Cuál?" />
            </div>
            {errors.question1Justification && <div className="error">Campo requerido.</div>}
            </>
          )}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 02</div>
          <div className="preguntaDominio">¿Qué tan avanzada/o estás en el <b>manejo</b> de la Nube?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No se<b>como funciona</b></div>
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
            <div className='textoPregunta1-10 segundoTexto1-10'>Soy un<b>experto</b></div>
          </div>
          {errors.question2 && <div className="error">Seleccione una respuesta.</div>}
        </div> 
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 03</div>
          <div className="preguntaDominio">¿Utilizas algún software de <b>gestión</b>?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question3", { required: true })} value='Sí.' onChange={handleRadioChange3}  />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question3", { required: true })} value='No.' onChange={handleRadioChange3}  />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question3 && <div className="error">Seleccione una respuesta.</div>}
          {showAdditionalInput3 && (
            <>
            <div className="contenedorInputsPregunta1-3">
              <input type="text" {...register("question3Justification", { required: true })} className='inputLogin mt-3 ps-2 rounded' placeholder="¿Cuál?" />
            </div>
            {errors.question3Justification && <div className="error">Campo requerido.</div>}
            </>
          )}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 04</div>
          <div className="preguntaDominio">¿Utilizas algún software de <b>gestión de proyectos</b>?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question4", { required: true })} value='Sí.' onChange={handleRadioChange4}  />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question4", { required: true })} value='No.' onChange={handleRadioChange4}  />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question4 && <div className="error">Seleccione una respuesta.</div>}
          {showAdditionalInput4 && (
            <>
            <div className="contenedorInputsPregunta1-3">
              <input type="text" {...register("question4Justification", { required: true })} className='inputLogin mt-3 ps-2 rounded' placeholder="¿Cuál?" />
            </div>
            {errors.question4Justification && <div className="error">Campo requerido.</div>}
            </>
          )}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 05</div>
          <div className="preguntaDominio">¿Utilizas alguna herramienta digital para <b>gestión del tiempo</b>?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question5", { required: true })} value='Sí.' onChange={handleRadioChange5} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question5", { required: true })} value='No.' onChange={handleRadioChange5} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question5 && <div className="error">Seleccione una respuesta.</div>}        
          {showAdditionalInput5 && (
            <>
            <div className="contenedorInputsPregunta1-3">
              <input type="text" {...register("question5Justification", { required: true })} className='inputLogin mt-3 ps-2 rounded' placeholder="¿Cuál?" />
            </div>
            {errors.question5Justification && <div className="error">Campo requerido.</div>}
            </>
          )}
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
              <>Continuar (6/6)</>
            )}  
          </button>
        </div>
      </form>
    </>
  )
}

export default TestDirectivoSeccion6