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
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 02</div>
          <div className="preguntaDominio">¿Que es la Misión?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta2", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una declaración que describe el propósito fundamental de la empresa y su razón de ser.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta2", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una lista de objetivos a corto plazo que la empresa quiere lograr en el próximo año.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta2", { required: true })} value='3' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una descripción de los productos y servicios que ofrece la empresa.</span>
            </div>
          </div>
          {errors.pregunta2 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 03</div>
          <div className="preguntaDominio">¿Cuáles son los elementos que se incluyen en una misión empresarial?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta3", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La descripción de los productos y servicios de la empresa y su mercado objetivo.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta3", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La definición de los valores y principios que rigen la conducta de la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta3", { required: true })} value='3' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Qué es, qué hace, para quien lo hace, cómo lo hace.</span>
            </div>
          </div>
          {errors.pregunta3 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 04</div>
          <div className="preguntaDominio">¿Cómo se diferencia la visión de la misión de una empresa?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta4", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La misión describe los objetivos a corto plazo de la empresa, mientras que la visión describe los objetivos a largo plazo.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta4", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La misión y la visión son lo mismo y se utilizan indistintamente.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta4", { required: true })} value='3' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La misión describe lo que la empresa hace, mientras que la visión describe lo que la empresa quiere lograr a largo plazo.</span>
            </div>
          </div>
          {errors.pregunta4 && <div className="error">Seleccione una respuesta.</div>}
        </div>




        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 05</div>
          <div className="preguntaDominio">¿Qué significa tener una visión estratégica?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta5", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Tener una idea general del mercado y la competencia.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta5", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Tener una comprensión profunda de la industria y el entorno en el que se encuentra la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta5", { required: true })} value='3' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3"> Tener una idea clara de los objetivos a largo plazo de la empresa.</span>
            </div>
          </div>
          {errors.pregunta5 && <div className="error">Seleccione una respuesta.</div>}
        </div>


        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 06</div>
          <div className="preguntaDominio">¿Qué es el modelo de negocio?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta6", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La estrategia de marketing de una empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta6", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">El plan financiero de una empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta6", { required: true })} value='3' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La forma en que una empresa crea, entrega y captura valor.</span>
            </div>
          </div>
          {errors.pregunta6 && <div className="error">Seleccione una respuesta.</div>}
        </div>


        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 07</div>
          <div className="preguntaDominio">¿Qué elementos se incluyen en el modelo de negocio?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta7", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Los productos y servicios que ofrece la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta7", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La propuesta de valor, el segmento de clientes, los canales, la forma de relación, actividades y recursos clave, socios estratégicos, fuentes de ingresos y los costos asociados a la oferta de productos y servicios de la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta7", { required: true })} value='3' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Los canales de distribución que utiliza la empresa.</span>
            </div>
          </div>
          {errors.pregunta7 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 08</div>
          <div className="preguntaDominio">¿Qué es una propuesta de valor?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta8", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Un conjunto de promesas que una empresa hace a sus clientes.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta8", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una descripción detallada de los productos y servicios que ofrece una empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta8", { required: true })} value='3' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una oferta especial de precios que una empresa hace a sus clientes.</span>
            </div>
          </div>
          {errors.pregunta8 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 09</div>
          <div className="preguntaDominio">¿Por qué es importante tener una propuesta de valor clara y concisa?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta9", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Para que los clientes entiendan exactamente lo que ofrece la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta9", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Para que la empresa pueda cobrar precios más altos por sus productos y servicios.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta9", { required: true })} value='3' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Para que la empresa pueda reducir sus costos de producción.</span>
            </div>
          </div>
          {errors.pregunta9 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 10</div>
          <div className="preguntaDominio">¿Qué significa el término "Ventaja competitiva"?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta10", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Tener precios bajos en comparación con la competencia.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta10", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Ofrecer productos y servicios de alta calidad.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta10", { required: true })} value='3' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Tener una posición única en el mercado que permite a la empresa destacarse y tener éxito.</span>
            </div>
          </div>
          {errors.pregunta10 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 11</div>
          <div className="preguntaDominio">¿Qué es un plan estratégico?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta11", { required: true })} value='1' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Un documento que describe los objetivos y las estrategias de la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta11", { required: true })} value='2' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Un plan detallado que indica cómo la empresa llevará a cabo sus objetivos estratégicos.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta11", { required: true })} value='3' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una lista de tareas diarias para los empleados.</span>
            </div>
          </div>
          {errors.pregunta11 && <div className="error">Seleccione una respuesta.</div>}
        </div>

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 12</div>
          <div className="preguntaDominio">¿Cuánto sabes sobre desarrollo de negocios?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>Muy<b>poco</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("pregunta12", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Avanzado<b>10 años + Master</b></div>
          </div>
          {errors.pregunta12 && <div className="error">Seleccione una respuesta.</div>}
        </div> 

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 13</div>
          <div className="preguntaDominio">¿Cuánto sabes sobre marketing?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>Muy<b>poco</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("pregunta13", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Avanzado<b>10 años + Posgrado</b></div>
          </div>
          {errors.pregunta13 && <div className="error">Seleccione una respuesta.</div>}
        </div> 

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 14</div>
          <div className="preguntaDominio">¿Cuánto sabes sobre ventas?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>Muy<b>poco</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("pregunta14", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Avanzado<b>10 años + Posgrado</b></div>
          </div>
          {errors.pregunta14 && <div className="error">Seleccione una respuesta.</div>}
        </div> 

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 15</div>
          <div className="preguntaDominio">¿Cuánto sabes sobre gestión del talento?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>Muy<b>poco</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("pregunta15", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Avanzado<b>10 años + Posgrado</b></div>
          </div>
          {errors.pregunta15 && <div className="error">Seleccione una respuesta.</div>}
        </div> 

        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 16</div>
          <div className="preguntaDominio">¿Cuánto sabes sobre finanzas?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>Muy<b>poco</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("pregunta16", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Avanzado<b>10 años + Posgrado</b></div>
          </div>
          {errors.pregunta16 && <div className="error">Seleccione una respuesta.</div>}
        </div> 







        <div className='cajaBotonEnviarRespuestasDominio'>
          <button type="submit">Continuar (2/6)</button>
        </div>
      </form>
    </>
  )
}

export default TestDirectivoSeccion1