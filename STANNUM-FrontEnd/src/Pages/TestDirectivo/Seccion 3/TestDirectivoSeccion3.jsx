import React, { useState } from 'react';
import { useForm } from "react-hook-form";

function TestDirectivoSeccion3() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [showAdditionalInput1, setShowAdditionalInput1] = useState(false);
  const [showAdditionalInput2, setShowAdditionalInput2] = useState(false);
  const [showAdditionalInput3, setShowAdditionalInput3] = useState(false);
  const [showAdditionalInput4, setShowAdditionalInput4] = useState(false);
  const [showAdditionalInput5, setShowAdditionalInput5] = useState(false);
  const [showAdditionalInput6, setShowAdditionalInput6] = useState(false);
  const [showAdditionalInput14, setShowAdditionalInput14] = useState(false);
  const [showAdditionalInput15, setShowAdditionalInput15] = useState(false);

  const handleRadioChange1 = (event) => {
    setShowAdditionalInput1(event.target.value === '1');
  };
  const handleRadioChange2 = (event) => {
    setShowAdditionalInput2(event.target.value === '1');
  };
  const handleRadioChange3 = (event) => {
    setShowAdditionalInput3(event.target.value === '1');
  };
  const handleRadioChange4 = (event) => {
    setShowAdditionalInput4(event.target.value === '1');
  };
  const handleRadioChange5 = (event) => {
    setShowAdditionalInput5(event.target.value === '1');
  };
  const handleRadioChange6 = (event) => {
    setShowAdditionalInput6(event.target.value === '1');
  };
  const handleRadioChange14 = (event) => {
    setShowAdditionalInput14(event.target.value === '1');
  };
  const handleRadioChange15 = (event) => {
    setShowAdditionalInput15(event.target.value === '1');
  };

  const onSubmit = (data) => {
    console.log(data);
    window.location.replace('/Test/Dominio/Directivo/4')
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
          <div className="preguntaDominio">¿La visión de tu negocio está formalizada?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question1", { required: true })} value='1' onChange={handleRadioChange1} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question1", { required: true })} value='2' onChange={handleRadioChange1} />
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
          <div className="preguntaDominio">¿La misión de tu negocio está formalizada?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question2", { required: true })} value='1' onChange={handleRadioChange2} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question2", { required: true })} value='2' onChange={handleRadioChange2} />
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
          <div className="preguntaDominio">¿Los objetivos estratégicos están escritos?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question3", { required: true })} value='1' onChange={handleRadioChange3} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question3", { required: true })} value='2' onChange={handleRadioChange3} />
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
          <div className="preguntaDominio">¿La propuesta de valor de tu negocio está escrita?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question4", { required: true })} value='1' onChange={handleRadioChange4} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question4", { required: true })} value='2' onChange={handleRadioChange4} />
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
          <div className="preguntaDominio">¿Tienes un documento que describe a la perfección "Quién es tu Cliente"?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question5", { required: true })} value='1' onChange={handleRadioChange5} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question5", { required: true })} value='2' onChange={handleRadioChange5} />
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
          <div className="preguntaDominio">¿Las áreas funcionales de tu negocio están definidas formalmente?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question6", { required: true })} value='1' onChange={handleRadioChange6} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question6", { required: true })} value='2' onChange={handleRadioChange6} />
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
          <div className="preguntaDominio">¿Planificas a largo plazo? (5 años o más)</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question7", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question7", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question7 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 08</div>
          <div className="preguntaDominio">¿Tienes metas económicas concretas y escritas?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question8", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question8", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question8 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 09</div>
          <div className="preguntaDominio">¿Evalúas formalmente la satisfacción de los clientes?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question9", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question9", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question9 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 10</div>
          <div className="preguntaDominio">¿Tienes indicadores para medir el desempeño en tu negocio?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question10", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question10", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question10 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 11</div>
          <div className="preguntaDominio">¿Tienes reuniones estratégicas?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question11", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question11", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question11 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 12</div>
          <div className="preguntaDominio">¿Tienes la reunión anual para cerrar el año?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question12", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question12", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question12 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 13</div>
          <div className="preguntaDominio">¿Planificas formalmente el año completo antes de arrancar?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question13", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question13", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.question13 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 14</div>
          <div className="preguntaDominio">¿Utilizas alguna metodología de gestión de proyectos?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question14", { required: true })} value='1' onChange={handleRadioChange14} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question14", { required: true })} value='2' onChange={handleRadioChange14} />
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
          <div className="preguntaDominio">¿Utilizas alguna herramienta digital de gestión del tiempo?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question15", { required: true })} value='1' onChange={handleRadioChange15} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question15", { required: true })} value='2' onChange={handleRadioChange15} />
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
          <button type="submit">Continuar (4/6)</button>
        </div>
      </form>
    </>
  )
}

export default TestDirectivoSeccion3