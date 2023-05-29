import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import axios from "axios";
import { useForm } from "react-hook-form";

function TestDirectivoSeccion4() {

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
        if(respuesta.data.dominioDirectivoTestInicial.emprendimiento.sectionScore != "Undefined"){
          window.location.replace('/Test/Dominio/Directivo/5')
        }
    }}

    getUser()

  }, [token])

  const [showAdditionalInput1, setShowAdditionalInput1] = useState(false);
  const [showAdditionalInput2, setShowAdditionalInput2] = useState(false);
  const [showAdditionalInput3, setShowAdditionalInput3] = useState(false);
  const [showAdditionalInput4, setShowAdditionalInput4] = useState(false);
  const [showAdditionalInput5, setShowAdditionalInput5] = useState(false);
  const [showAdditionalInput6, setShowAdditionalInput6] = useState(false);
  const [showAdditionalInput14, setShowAdditionalInput14] = useState(false);
  const [showAdditionalInput15, setShowAdditionalInput15] = useState(false);

  const handleRadioChange1 = (event) => {
    setShowAdditionalInput1(event.target.value === 'Sí.');
  };
  const handleRadioChange2 = (event) => {
    setShowAdditionalInput2(event.target.value === 'Sí.');
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
  const handleRadioChange6 = (event) => {
    setShowAdditionalInput6(event.target.value === 'Sí.');
  };
  const handleRadioChange14 = (event) => {
    setShowAdditionalInput14(event.target.value === 'Sí.');
  };
  const handleRadioChange15 = (event) => {
    setShowAdditionalInput15(event.target.value === 'Sí.');
  };

  const onSubmit = async (data) => {
    setLoading(true);

    let justificacion1 = "Undefined"
    if (data.question1Justification && data.question1 != 'No.'){
      justificacion1= data.question1Justification.trim()
    }

    let justificacion2 = "Undefined"
    if (data.question2Justification && data.question2 != 'No.'){
      justificacion2= data.question2Justification.trim()
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

    let justificacion6 = "Undefined"
    if (data.question6Justification && data.question6 != 'No.'){
      justificacion6= data.question6Justification.trim()
    }

    let justificacion14 = "Undefined"
    if (data.question14Justification && data.question14 != 'No.'){
      justificacion14= data.question14Justification.trim()
    }

    let justificacion15 = "Undefined"
    if (data.question15Justification && data.question15 != 'No.'){
      justificacion15= data.question15Justification.trim()
    }

    const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/directivo/seccion4`,
      {
        token,
        question1: data.question1,
        question1Justification: justificacion1,
        question2: data.question2,
        question2Justification: justificacion2,
        question3: data.question3,
        question3Justification: justificacion3,
        question4: data.question4,
        question4Justification: justificacion4,
        question5: data.question5,
        question5Justification: justificacion5,
        question6: data.question6,
        question6Justification: justificacion6,
        question7: data.question7,
        question8: data.question8,
        question9: data.question9,
        question10: data.question10,
        question11: data.question11,
        question12: data.question12,
        question13: data.question13,
        question14: data.question14,
        question14Justification: justificacion14,
        question15: data.question15,
        question15Justification: justificacion15,
      }
    );
    if (respuesta.status === 200) {
      window.location.replace('/Test/Dominio/Directivo/5')
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
        <div className='text-center subtituloInicioTestDominioSeccion1'><h3>Sección 4 : <b>Conocimientos para ser PRO - Emprendimiento</b></h3></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 01</div>
          <div className="preguntaDominio">¿La <b>visión</b> de tu negocio está formalizada?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question1", { required: true })} value='Sí.' onChange={handleRadioChange1} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question1", { required: true })} value='No.' onChange={handleRadioChange1} />
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
          <div className="preguntaDominio">¿La <b>misión</b> de tu negocio está formalizada?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question2", { required: true })} value='Sí.' onChange={handleRadioChange2} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question2", { required: true })} value='No.' onChange={handleRadioChange2} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question2 && <div className="error">Seleccione una respuesta.</div>}
          {showAdditionalInput2 && (
            <>
            <div className="contenedorInputsPregunta1-3">
              <input type="text" {...register("question2Justification", { required: true })} className='inputLogin mt-3 ps-2 rounded' placeholder="¿Cuál?" />
            </div>
            {errors.question2Justification && <div className="error">Campo requerido.</div>}
            </>
          )}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 03</div>
          <div className="preguntaDominio">¿Los <b>objetivos estratégicos</b> están escritos?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question3", { required: true })} value='Sí.' onChange={handleRadioChange3} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question3", { required: true })} value='No.' onChange={handleRadioChange3} />
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
          <div className="preguntaDominio">¿La <b>propuesta de valor</b> de tu negocio está escrita?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question4", { required: true })} value='Sí.' onChange={handleRadioChange4} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question4", { required: true })} value='No.' onChange={handleRadioChange4} />
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
          <div className="preguntaDominio">¿Tienes un documento que describe a la perfección "<b>Quién es tu Cliente</b>"?</div>
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
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 06</div>
          <div className="preguntaDominio">¿Las <b>áreas funcionales</b> de tu negocio están definidas formalmente?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question6", { required: true })} value='Sí.' onChange={handleRadioChange6} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question6", { required: true })} value='No.' onChange={handleRadioChange6} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question6 && <div className="error">Seleccione una respuesta.</div>}
          {showAdditionalInput6 && (
            <>
            <div className="contenedorInputsPregunta1-3">
              <input type="text" {...register("question6Justification", { required: true })} className='inputLogin mt-3 ps-2 rounded' placeholder="¿Cuál?" />
            </div>
            {errors.question6Justification && <div className="error">Campo requerido.</div>}
            </>
          )}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 07</div>
          <div className="preguntaDominio">¿Planificas a <b>largo plazo</b>? (5 años o más)</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question7", { required: true })} value='Sí.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question7", { required: true })} value='No.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question7 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 08</div>
          <div className="preguntaDominio">¿Tienes <b>metas económicas</b> concretas y escritas?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question8", { required: true })} value='Sí.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question8", { required: true })} value='No.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question8 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 09</div>
          <div className="preguntaDominio">¿Evalúas formalmente la <b>satisfacción</b> de los clientes?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question9", { required: true })} value='Sí.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question9", { required: true })} value='No.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question9 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 10</div>
          <div className="preguntaDominio">¿Tienes <b>indicadores</b> para medir el desempeño en tu negocio?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question10", { required: true })} value='Sí.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question10", { required: true })} value='No.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question10 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 11</div>
          <div className="preguntaDominio">¿Tienes <b>reuniones estratégicas</b>?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question11", { required: true })} value='Sí.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question11", { required: true })} value='No.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question11 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 12</div>
          <div className="preguntaDominio">¿Tienes la <b>reunión anual</b> para cerrar el año?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question12", { required: true })} value='Sí.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question12", { required: true })} value='No.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question12 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 13</div>
          <div className="preguntaDominio">¿Planificas formalmente el <b>año completo</b> antes de arrancar?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question13", { required: true })} value='Sí.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question13", { required: true })} value='No.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question13 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 14</div>
          <div className="preguntaDominio">¿Utilizas alguna metodología de <b>gestión de proyectos</b>?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question14", { required: true })} value='Sí.' onChange={handleRadioChange14} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question14", { required: true })} value='No.' onChange={handleRadioChange14} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question14 && <div className="error">Seleccione una respuesta.</div>}
          {showAdditionalInput14 && (
            <>
            <div className="contenedorInputsPregunta1-3">
              <input type="text" {...register("question14Justification", { required: true })} className='inputLogin mt-3 ps-2 rounded' placeholder="¿Cuál?" />
            </div>
            {errors.question14Justification && <div className="error">Campo requerido.</div>}
            </>
          )}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 15</div>
          <div className="preguntaDominio">¿Utilizas alguna metodología de <b>gestión del tiempo</b>?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question15", { required: true })} value='Sí.' onChange={handleRadioChange15} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question15", { required: true })} value='No.' onChange={handleRadioChange15} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question15 && <div className="error">Seleccione una respuesta.</div>}
          {showAdditionalInput15 && (
            <>
            <div className="contenedorInputsPregunta1-3">
              <input type="text" {...register("question15Justification", { required: true })} className='inputLogin mt-3 ps-2 rounded' placeholder="¿Cuál?" />
            </div>
            {errors.question15Justification && <div className="error">Campo requerido.</div>}
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
              <>Continuar (4/6)</>
            )}  
          </button>
        </div>
      </form>
    </>
  )
}

export default TestDirectivoSeccion4