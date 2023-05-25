import React, { useState } from 'react';
import { useForm } from "react-hook-form";

function TestDirectivoSeccion5() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showAdditionalInput, setShowAdditionalInput] = useState(false);

  const handleRadioChange = (event) => {
    const answer = event.target.value;
    setShowAdditionalInput(answer === '1'); // Show the additional input if the answer is '1' (Yes)
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className='contenedorInicioTestDominioSeccion1'>
        <div className='text-center tituloDominio1Test'><h1>Test de <span>Dominio 1</span></h1></div>
        <div className='text-center titulo2InicioTestDominioSeccion1'><h2>DIRECTIVO</h2></div>
        <div className='text-center subtituloInicioTestDominioSeccion1'><h3>Sección 6 : <b>Conocimientos para ser PRO - Habilidades Digitales</b></h3></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>


        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 01</div>
          <div className="preguntaDominio">¿Utilizas una plataforma de almacenamiento de información en la Nube, como Dropbox o Google Drive?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta1", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta1", { required: true })} value='3' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.pregunta1 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 02</div>
          <div className="preguntaDominio">¿Qué tan avanzada/o estás en el manejo de la Nube?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>No se<b>como funciona</b></div>
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
            <div className='textoPregunta1-10 segundoTexto1-10'>Soy un<b>experto</b></div>
          </div>
          {errors.pregunta2 && <div className="error">Seleccione una respuesta.</div>}
        </div> 

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 03</div>
          <div className="preguntaDominio">¿Utilizas algún software de gestión?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta3", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta3", { required: true })} value='3' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.pregunta3 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 04</div>
          <div className="preguntaDominio">¿Usas un software de gestión de proyectos?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta4", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta4", { required: true })} value='3' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.pregunta4 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 05</div>
          <div className="preguntaDominio">¿Utilizas alguna herramienta digital para gestión del tiempo?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta5", { required: true })} value="1" onChange={handleRadioChange} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta5", { required: true })} value="3" onChange={handleRadioChange} />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.pregunta5 && <div className="error">Seleccione una respuesta.</div>}
          
          {showAdditionalInput && (
            <>
            <div className="contenedorInputsPregunta1-3">
              <input type="text" {...register("pregunta5Explicacion", { required: true })} className='inputLogin mt-3 ps-2 rounded' placeholder="¿Cuál?" />
            </div>
            {errors.pregunta5Explicacion && <div className="error">Campo requerido.</div>}
            </>
          )}
        </div>

        <div className='cajaBotonEnviarRespuestasDominio'>
          <button type="submit">Continuar (6/6)</button>
        </div>

      </form>
    </>
  )
}

export default TestDirectivoSeccion5