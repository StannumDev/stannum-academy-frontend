import React from 'react'
import { useForm } from "react-hook-form";

function TestDirectivoSeccion3() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    window.location.replace('/Test/Dominio/Directivo/4')
  };

  return (
    <>
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
                <input type="radio" {...register("pregunta1", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta1", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.pregunta1 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 02</div>
          <div className="preguntaDominio">¿La misión de tu negocio está formalizada?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta2", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta2", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.pregunta2 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 03</div>
          <div className="preguntaDominio">¿Los objetivos estratégicos están escritos?</div>
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
                <input type="radio" {...register("pregunta3", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.pregunta3 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 04</div>
          <div className="preguntaDominio">¿La propuesta de valor de tu negocio está escrita?</div>
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
                <input type="radio" {...register("pregunta4", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.pregunta4 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 05</div>
          <div className="preguntaDominio">¿Tienes un documento que describe a la perfección "Quién es tu Cliente"?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta5", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta5", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No tengo.</span>
            </div>
          </div>
          {errors.pregunta5 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 06</div>
          <div className="preguntaDominio">¿Las áreas funcionales de tu negocio están definidas formalmente?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta6", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta6", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No están definidas.</span>
            </div>
          </div>
          {errors.pregunta6 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 07</div>
          <div className="preguntaDominio">¿Planificas a largo plazo? (5 años o más)</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta7", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta7", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No están definidas.</span>
            </div>
          </div>
          {errors.pregunta7 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 08</div>
          <div className="preguntaDominio">¿Tienes metas económicas concretas y escritas?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta8", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta8", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No tengo.</span>
            </div>
          </div>
          {errors.pregunta8 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 09</div>
          <div className="preguntaDominio">¿Evalúas formalmente la satisfacción de los clientes?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta9", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta9", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No tengo.</span>
            </div>
          </div>
          {errors.pregunta9 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 10</div>
          <div className="preguntaDominio">¿Tienes indicadores para medir el desempeño en tu negocio?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta10", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta10", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.pregunta10 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 11</div>
          <div className="preguntaDominio">¿Tienes reuniones estratégicas?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta11", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta11", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.pregunta11 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 12</div>
          <div className="preguntaDominio">¿Tienes la reunión anual para cerrar el año?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta12", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta12", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.pregunta12 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 13</div>
          <div className="preguntaDominio">¿Planificas formalmente el año completo antes de arrancar?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta13", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta13", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.pregunta13 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 14</div>
          <div className="preguntaDominio">¿Utilizas alguna metodología de gestión de proyectos?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta14", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta14", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.pregunta14 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 15</div>
          <div className="preguntaDominio">¿Utilizas alguna herramienta digital de gestión del tiempo?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta15", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Sí.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta15", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No.</span>
            </div>
          </div>
          {errors.pregunta15 && <div className="error">Seleccione una respuesta.</div>}
        </div>



        <div className='cajaBotonEnviarRespuestasDominio'>
          <button type="submit">Continuar (4/6)</button>
        </div>

      </form>
    </>
  )
}

export default TestDirectivoSeccion3