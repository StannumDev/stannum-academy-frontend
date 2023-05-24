import React from 'react'
import { useForm } from "react-hook-form";
import './TestDirectivoSeccion1.css'

function TestDirectivoSeccion1() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                <input type="radio" {...register("pregunta1", { required: true })} value='Una descripción detallada de los productos y servicios que ofrece una empresa' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una descripción detallada de los productos y servicios que ofrece una empresa</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta1", { required: true })} value='Un plan de acción para alcanzar los objetivos a corto plazo de la empresa' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Un plan de acción para alcanzar los objetivos a corto plazo de la empresa</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta1", { required: true })} value='Una declaración inspiradora que describe lo que la empresa quiere lograr a largo plazo' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una declaración inspiradora que describe lo que la empresa quiere lograr a largo plazo</span>
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
                <input type="radio" {...register("pregunta2", { required: true })} value='Una declaración que describe el propósito fundamental de la empresa y su razón de ser.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una declaración que describe el propósito fundamental de la empresa y su razón de ser.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta2", { required: true })} value='Una lista de objetivos a corto plazo que la empresa quiere lograr en el próximo año.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una lista de objetivos a corto plazo que la empresa quiere lograr en el próximo año.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta2", { required: true })} value='Una descripción de los productos y servicios que ofrece la empresa.' />
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
                <input type="radio" {...register("pregunta3", { required: true })} value='La descripción de los productos y servicios de la empresa y su mercado objetivo.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La descripción de los productos y servicios de la empresa y su mercado objetivo.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta3", { required: true })} value='La definición de los valores y principios que rigen la conducta de la empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La definición de los valores y principios que rigen la conducta de la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta3", { required: true })} value='Qué es, qué hace, para quien lo hace, cómo lo hace.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Qué es, qué hace, para quien lo hace, cómo lo hace.</span>
            </div>
          </div>
          {errors.pregunta3 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 04</div>
          <div className="preguntaDominio">4. ¿Cómo se diferencia la visión de la misión de una empresa?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta4", { required: true })} value='La misión describe los objetivos a corto plazo de la empresa, mientras que la visión describe los objetivos a largo plazo' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La misión describe los objetivos a corto plazo de la empresa, mientras que la visión describe los objetivos a largo plazo</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta4", { required: true })} value='La misión y la visión son lo mismo y se utilizan indistintamente' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La misión y la visión son lo mismo y se utilizan indistintamente</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("pregunta4", { required: true })} value='La misión describe lo que la empresa hace, mientras que la visión describe lo que la empresa quiere lograr a largo plazo' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La misión describe lo que la empresa hace, mientras que la visión describe lo que la empresa quiere lograr a largo plazo</span>
            </div>
          </div>
          {errors.pregunta4 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className='cajaBotonEnviarRespuestasDominio'>
          <button type="submit">Continuar (2/6)</button>
        </div>

      </form>
    </>
  )
}

export default TestDirectivoSeccion1