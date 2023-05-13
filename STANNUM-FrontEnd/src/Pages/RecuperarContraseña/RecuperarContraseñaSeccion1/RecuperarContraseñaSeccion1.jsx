import React, { useState } from 'react';
import LogoChico from '../../../assets/LogoChico.png'
import axios from "axios";
import { useForm } from "react-hook-form";
import keyIcon from '../../../assets/key.png'
import './recuperarContraseñaSeccion1.css'

function RecuperarContraseñaSeccion1() {

  document.body.classList.add('recuperar-contraseña-body');

  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur", defaultValues: { email: "" }, });

  const onSubmit = async (data) => {
    setLoading(true);
    setEnviado(true);
    // const respuesta = await axios.post(
    //     `link/users/login-user`,
    //     {
    //         email: data.email.trim().toLowerCase(),
    //     }
    // );
    // if (respuesta.status === 200) {

    // }
    // if (respuesta.status === 206) {
    //     setLoading(false);
    //     setError(true);
    //     setErrorMensaje(respuesta.data.message)
    // }
};

  if(!enviado){

    return (
      <>
        <div className='cajaRecuperarContraseña'>
          <div className='imagenRecuperarContraseña'><img src={LogoChico} alt="" /></div>
          <div className='tituloOlvidasteTuContraseña'><h1><span>¿OLVIDASTE</span> TU CONTRASEÑA?</h1></div>
          <div className='explicacionOlvidasteTuContraseña'><p>Ingrese su correo electrónico y le enviaremos un enlace para cambiar su contraseña.</p></div>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
            <div className="row">
              <div className={`form-group`}>
                <label htmlFor="email" className='labelFormLogin'>Correo electrónico</label>
                  <input
                    autoComplete='false'
                    type="text"
                    className={`inputLogin form-control  mt-2`}
                    {...register("email", {
                        required: true,
                        pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
                        maxLength: 40,
                    })}
                  />
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
              <button type="submit" className="botonSubmitLogin">
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
          </form>        
        </div>
        <div className='d-flex justify-content-center align-items-center gap-3 mt-5'>
          <span className='textoNoTienesUnaCuentaRecuperarContraseña'>¿No tienes una cuenta?</span>
          <button className='botonSolicitarAccesoRecuperarContraseña'>Solicitar acceso</button>
        </div>
      </>
    )
  } else{
    return (
      <>
        <div className='cajaRecuperarContraseña'>
          <div className='imagenRecuperarContraseña'><img src={LogoChico} alt="" /></div>
          <div className='tituloOlvidasteTuContraseña'><h1>SOLICITUD<span> COMPLETADA</span></h1></div>
          <div className='explicacionOlvidasteTuContraseña'><p>Se ha enviado un email a su correo electrónico! siga los pasos para cambiar su contraseña.</p></div>
          <div className='mt-4 d-flex justify-content-center'>
            <a href='/Iniciar-sesion'><button type="button" className="botonVolverRecuperarContraseña">Volver al inicio</button></a>
          </div>       
        </div>
      </>
    )
  }
}

export default RecuperarContraseñaSeccion1