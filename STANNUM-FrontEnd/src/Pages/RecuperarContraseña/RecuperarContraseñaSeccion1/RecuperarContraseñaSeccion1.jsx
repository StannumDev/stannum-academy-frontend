import React, { useState } from 'react';
import LogoChico from '../../../assets/LogoChico.png'
import axios from "axios";
import { useForm } from "react-hook-form";
import keyIcon from '../../../assets/key.png'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import './recuperarContraseña.css'

function RecuperarContraseñaSeccion1() {

  document.body.classList.add('recuperar-contraseña-body');

  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur", defaultValues: { email: "" }, });

  const onSubmit = async (data) => {
    setLoading(true);
    const respuesta = await axios.post(
        `https://prueba-back-mateolohezic.up.railway.app/password-recovery`,
        {
            email: data.email.trim().toLowerCase(),
        }
    );
    if (respuesta.status === 200) {
      setEnviado(true);
    }
    if (respuesta.status === 206) {
        setLoading(false);
        setError(true);
        setErrorMensaje(respuesta.data.message)
    }
};

  if(!enviado){

    return (
      <>
        <HelmetProvider>
          <Helmet>
            <meta name="description" content="Recuperar contraseña en STANNUM Academy" />
            <meta name="keywords" content="stannum, academia, academy, iniciar, sesión, login, olvide, recuperar, contraseña, nueva, usuario, olvidar" />
            <meta name="subject" content="Recuperar contraseña" />
            <meta name="theme-color" content="#3A3A3A" />
            <title>Olvidé mi contraseña | STANNUM Academy</title>
          </Helmet>
        </HelmetProvider>
        <div className='cajaVolverAlInicioRecuperarContraseña'>
          <div className='volverAlInicioLoginRecuperarContraseña'>
            <a href="/Iniciar-sesion" className='text-decoration-none'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="bi bi-arrow-left-short svgInicioVolverRecuperarContraseña" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                </svg>
                <span>Iniciar Sesión</span>
            </a>
          </div>
        </div>
        <div className='cajaRecuperarContraseña'>
          <div className='imagenRecuperarContraseña'><img src={LogoChico} alt="" /></div>
          <div className='tituloOlvidasteTuContraseña'><h1><span>¿OLVIDASTE</span> TU CONTRASEÑA?</h1></div>
          <div className='explicacionOlvidasteTuContraseña'><p>Ingresa tu correo electrónico y te enviaremos un enlace para cambiar tu contraseña.</p></div>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
            <div className="row">
              <div className={`form-group d-flex flex-column`}>
                <label htmlFor="emailRecuperar" className='labelFormLogin'>Correo electrónico</label>
                <input
                    autoComplete='true'
                    id='emailRecuperar'
                    type="email"
                    className={`inputLogin form-control  mt-2`}
                    {...register("email", {
                        required: true,
                        pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
                        maxLength: 40,
                    })}
                />
                <span className="input-border input-border-alt"></span>
              </div>
            </div>
            {errors.email && errors.email.type === "required" && (
                <p className="text-danger mt-2 ms-1 fs-6">Correo requerido</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
                <p className="text-danger mt-2 ms-1 fs-6">Correo invalido</p>
            )}
            {errors.email && errors.email.type === "maxLength" && (
                <p className="text-danger mt-2 ms-1 fs-6">
                    No puede contener más de 40 caracteres
                </p>
            )}
            <div className='mt-5 d-flex justify-content-center'>
              <button type="submit" className="botonSubmitEmailRecuperar">
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm mr-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  <>
                    <img src={keyIcon} alt="Llave Iniciar Sesión" className='keyIconLogin me-1'/>
                    <span>Enviar correo</span>
                  </>
                )}
              </button>
            </div>
            {error ? (
              <>
                  <p className="text-danger mt-2 px-2 fs-6 text-center">{errorMensaje}</p>
              </>
            ) : (
              <></>
            )}
          </form>        
        </div>
        <div className='d-flex solicitarAccesoDivRecuperar justify-content-center align-items-center mt-5 mb-5'>
          <span className='textoNoTienesUnaCuentaRecuperarContraseña'>¿No tienes una cuenta?</span>
          <a href='https://stannum.com.ar/' target="_blank">
            <button className='botonSolicitarAccesoRecuperarContraseña'>Solicitar acceso</button>
          </a>
        </div>
      </>
    )
  } else{
    return (
      <>
        <div className='cajaRecuperarContraseña'>
          <div className='imagenRecuperarContraseña'><img src={LogoChico} alt="" /></div>
          <div className='tituloOlvidasteTuContraseña'><h1>SOLICITUD<span> COMPLETADA</span></h1></div>
          <div className='explicacionOlvidasteTuContraseña'><p>Se ha enviado un email a tu correo electrónico!. Sigue los pasos para cambiar tu contraseña.</p></div>
          <div className='mt-4 d-flex justify-content-center'>
            <a href='/Iniciar-sesion'><button type="button" className="botonVolverRecuperarContraseña">Volver al inicio</button></a>
          </div>       
        </div>
      </>
    )
  }
}

export default RecuperarContraseñaSeccion1