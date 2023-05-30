import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import axios from "axios";
import { useForm } from "react-hook-form";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './testDirectivoSeccion.css'

function TestDirectivoSeccion2() {

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
        if(respuesta.data.dominioDirectivoTestInicial.conceptos.sectionScore != "Undefined"){
          window.location.replace('/Test/Dominio/Directivo/3')
        }
    }}
    getUser()
  }, [token])

  const onSubmit = async (data) => {
    setLoading(true);
    const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/directivo/seccion2`,
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
        question9: data.question9,
        question10: data.question10,
        question11: data.question11,
        question12: data.question12,
        question13: data.question13,
        question14: data.question14,
        question15: data.question15,
        question16: data.question16
      }
    );
    if (respuesta.status === 200) {
      window.location.replace('/Test/Dominio/Directivo/3')
    }
    if (respuesta.status === 206) {
      window.location.replace('/Cerrar-sesion')
    }
    setLoading(false);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Sección 2 test Dominio 1: Directivo para jugador en STANNUM Academy" />
          <meta name="keywords" content="stannum, academia, academy, test, dominio, directivo, respuestas, puntos, sección, preguntas, conocimiento, prueba, examen" />
          <meta name="subject" content="Sección 2 test Dominio 1: Directivo" />
          <meta name="theme-color" content="#3A3A3A" />
          <title>Sección 2 - Test directivo | STANNUM Academy</title>
        </Helmet>
      </HelmetProvider>
      <div className="bg"></div>
      <div className='contenedorInicioTestDominioSeccion1'>
        <div className='text-center tituloDominio1Test'><h1>Test de <span>Dominio 1</span></h1></div>
        <div className='text-center titulo2InicioTestDominioSeccion1'><h2>DIRECTIVO</h2></div>
        <div className='text-center subtituloInicioTestDominioSeccion1'><h3>Sección 2 : <b>Conocimientos para ser PRO - Conceptos</b></h3></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 01</div>
          <div className="preguntaDominio">¿Que es la <b>visión</b>?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question1", { required: true })} value='Una descripción detallada de los productos y servicios que ofrece una empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una descripción detallada de los productos y servicios que ofrece una empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question1", { required: true })} value='Un plan de acción para alcanzar los objetivos a corto plazo de la empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Un plan de acción para alcanzar los objetivos a corto plazo de la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question1", { required: true })} value='Una declaración inspiradora que describe lo que la empresa quiere lograr a largo plazo.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una declaración inspiradora que describe lo que la empresa quiere lograr a largo plazo.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question1", { required: true })} value='No sé.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No sé.</span>
            </div>
          </div>
          {errors.question1 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 02</div>
          <div className="preguntaDominio">¿Que es la <b>misión</b>?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question2", { required: true })} value='Una declaración que describe el propósito fundamental de la empresa y su razón de ser.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una declaración que describe el propósito fundamental de la empresa y su razón de ser.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question2", { required: true })} value='Una lista de objetivos a corto plazo que la empresa quiere lograr en el próximo año.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una lista de objetivos a corto plazo que la empresa quiere lograr en el próximo año.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question2", { required: true })} value='Una descripción de los productos y servicios que ofrece la empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una descripción de los productos y servicios que ofrece la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question2", { required: true })} value='No sé.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No sé.</span>
            </div>
          </div>
          {errors.question2 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 03</div>
          <div className="preguntaDominio">¿Cuáles son los <b>elementos</b> que se incluyen en una misión empresarial?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question3", { required: true })} value='La descripción de los productos y servicios de la empresa y su mercado objetivo.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La descripción de los productos y servicios de la empresa y su mercado objetivo.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question3", { required: true })} value='La definición de los valores y principios que rigen la conducta de la empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La definición de los valores y principios que rigen la conducta de la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question3", { required: true })} value='Qué es, qué hace, para quien lo hace, cómo lo hace.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Qué es, qué hace, para quien lo hace, cómo lo hace.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question3", { required: true })} value='No sé.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No sé.</span>
            </div>
          </div>
          {errors.question3 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 04</div>
          <div className="preguntaDominio">¿Cómo se <b>diferencia</b> la visión de la misión de una empresa?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question4", { required: true })} value='La misión describe los objetivos a corto plazo de la empresa, mientras que la visión describe los objetivos a largo plazo.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La misión describe los objetivos a corto plazo de la empresa, mientras que la visión describe los objetivos a largo plazo.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question4", { required: true })} value='La misión y la visión son lo mismo y se utilizan indistintamente.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La misión y la visión son lo mismo y se utilizan indistintamente.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question4", { required: true })} value='La misión describe lo que la empresa hace, mientras que la visión describe lo que la empresa quiere lograr a largo plazo.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La misión describe lo que la empresa hace, mientras que la visión describe lo que la empresa quiere lograr a largo plazo.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question4", { required: true })} value='No sé.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No sé.</span>
            </div>
          </div>
          {errors.question4 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 05</div>
          <div className="preguntaDominio">¿Qué significa tener una <b>visión estratégica</b>?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question5", { required: true })} value='Tener una idea general del mercado y la competencia.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Tener una idea general del mercado y la competencia.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question5", { required: true })} value='Tener una comprensión profunda de la industria y el entorno en el que se encuentra la empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Tener una comprensión profunda de la industria y el entorno en el que se encuentra la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question5", { required: true })} value='Tener una idea clara de los objetivos a largo plazo de la empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Tener una idea clara de los objetivos a largo plazo de la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question5", { required: true })} value='No sé.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No sé.</span>
            </div>
          </div>
          {errors.question5 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 06</div>
          <div className="preguntaDominio">¿Qué es el <b>modelo de negocio</b>?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question6", { required: true })} value='La estrategia de marketing de una empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La estrategia de marketing de una empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question6", { required: true })} value='El plan financiero de una empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">El plan financiero de una empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question6", { required: true })} value='La forma en que una empresa crea, entrega y captura valor.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La forma en que una empresa crea, entrega y captura valor.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question6", { required: true })} value='No sé.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No sé.</span>
            </div>
          </div>
          {errors.question6 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 07</div>
          <div className="preguntaDominio">¿Qué <b>elementos</b> se incluyen en el modelo de negocio?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question7", { required: true })} value='Los productos y servicios que ofrece la empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Los productos y servicios que ofrece la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question7", { required: true })} value='La propuesta de valor, el segmento de clientes, los canales, la forma de relación, actividades y recursos clave, socios estratégicos, fuentes de ingresos y los costos asociados a la oferta de productos y servicios de la empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">La propuesta de valor, el segmento de clientes, los canales, la forma de relación, actividades y recursos clave, socios estratégicos, fuentes de ingresos y los costos asociados a la oferta de productos y servicios de la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question7", { required: true })} value='Los canales de distribución que utiliza la empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Los canales de distribución que utiliza la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question7", { required: true })} value='No sé.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No sé.</span>
            </div>
          </div>
          {errors.question7 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 08</div>
          <div className="preguntaDominio">¿Qué es una <b>propuesta de valor</b>?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question8", { required: true })} value='Un conjunto de promesas que una empresa hace a sus clientes.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Un conjunto de promesas que una empresa hace a sus clientes.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question8", { required: true })} value='Una descripción detallada de los productos y servicios que ofrece una empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una descripción detallada de los productos y servicios que ofrece una empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question8", { required: true })} value='Una oferta especial de precios que una empresa hace a sus clientes.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una oferta especial de precios que una empresa hace a sus clientes.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question8", { required: true })} value='No sé.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No sé.</span>
            </div>
          </div>
          {errors.question8 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 09</div>
          <div className="preguntaDominio">¿Por qué es importante tener una <b>propuesta de valor clara y concisa</b>?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question9", { required: true })} value='Para que los clientes entiendan exactamente lo que ofrece la empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Para que los clientes entiendan exactamente lo que ofrece la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question9", { required: true })} value='Para que la empresa pueda cobrar precios más altos por sus productos y servicios.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Para que la empresa pueda cobrar precios más altos por sus productos y servicios.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question9", { required: true })} value='Para que la empresa pueda reducir sus costos de producción.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Para que la empresa pueda reducir sus costos de producción.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question9", { required: true })} value='No sé.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No sé.</span>
            </div>
          </div>
          {errors.question9 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 10</div>
          <div className="preguntaDominio">¿Qué significa el término "<b>Ventaja competitiva</b>"?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question10", { required: true })} value='Tener precios bajos en comparación con la competencia.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Tener precios bajos en comparación con la competencia.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question10", { required: true })} value='Ofrecer productos y servicios de alta calidad.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Ofrecer productos y servicios de alta calidad.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question10", { required: true })} value='Tener una posición única en el mercado que permite a la empresa destacarse y tener éxito.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Tener una posición única en el mercado que permite a la empresa destacarse y tener éxito.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question10", { required: true })} value='No sé.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No sé.</span>
            </div>
          </div>
          {errors.question10 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 11</div>
          <div className="preguntaDominio">¿Qué es un <b>plan estratégico</b>?</div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question11", { required: true })} value='Un documento que describe los objetivos y las estrategias de la empresa.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Un documento que describe los objetivos y las estrategias de la empresa.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question11", { required: true })} value='Un plan detallado que indica cómo la empresa llevará a cabo sus objetivos estratégicos.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Un plan detallado que indica cómo la empresa llevará a cabo sus objetivos estratégicos.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question11", { required: true })} value='Una lista de tareas diarias para los empleados.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">Una lista de tareas diarias para los empleados.</span>
            </div>
          </div>
          <div className="contenedorInputsPregunta1-3">
            <div className="contenedorInteriorPregunta1-3">
              <label className="radioInputContainer1-3">
                <input type="radio" {...register("question11", { required: true })} value='No sé.' />
                <span className="checkmark1-3"></span>
              </label>
              <span className="labelInput1-3">No sé.</span>
            </div>
          </div>
          {errors.question11 && <div className="error">Seleccione una respuesta.</div>}
        </div>
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 12</div>
          <div className="preguntaDominio">¿Cuánto sabes sobre desarrollo de <b>negocios</b>?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>Muy<b>poco</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("question12", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Avanzado<b>10 años + Master</b></div>
          </div>
          {errors.question12 && <div className="error">Seleccione una respuesta.</div>}
        </div>           
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 13</div>
          <div className="preguntaDominio">¿Cuánto sabes sobre <b>marketing</b>?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>Muy<b>poco</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("question13", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Avanzado<b>10 años + Posgrado</b></div>
          </div>
          {errors.question13 && <div className="error">Seleccione una respuesta.</div>}
        </div>   
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 14</div>
          <div className="preguntaDominio">¿Cuánto sabes sobre <b>ventas</b>?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>Muy<b>poco</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("question14", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Avanzado<b>10 años + Posgrado</b></div>
          </div>
          {errors.question14 && <div className="error">Seleccione una respuesta.</div>}
        </div>           
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 15</div>
          <div className="preguntaDominio">¿Cuánto sabes sobre <b>gestión del talento</b>?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>Muy<b>poco</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("question15", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Avanzado<b>10 años + Posgrado</b></div>
          </div>
          {errors.question15 && <div className="error">Seleccione una respuesta.</div>}
        </div>           
        <div className="contenedorPreguntaTestDominio">
          <div className="tituloPreguntaDominio">Pregunta 16</div>
          <div className="preguntaDominio">¿Cuánto sabes sobre <b>finanzas</b>?</div>
          <div className='cajaPregunta1-10'>
            <div className='textoPregunta1-10 primerTexto1-10'>Muy<b>poco</b></div>
            <div className="contenedorInputsPregunta1-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <div key={value} className="d-flex flex-column align-items-center">
                  <label key={value} className="radioInputContainer">
                    <input type="radio" {...register("question16", { required: true })} value={value} />
                    <span className="checkmark"></span>
                  </label>
                  <span className="labelInput1-10">{value}</span>
                </div>
              ))}
            </div>
            <div className='textoPregunta1-10 segundoTexto1-10'>Avanzado<b>10 años + Posgrado</b></div>
          </div>
          {errors.question16 && <div className="error">Seleccione una respuesta.</div>}
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
              <>Continuar (2/6)</>
            )}  
          </button>
        </div>
      </form>
    </>
  )
}

export default TestDirectivoSeccion2