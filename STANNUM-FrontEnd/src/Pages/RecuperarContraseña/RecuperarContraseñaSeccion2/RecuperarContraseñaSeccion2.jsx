import React, { useState } from 'react';
import LogoChico from '../../../assets/LogoChico.png'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useForm } from "react-hook-form";

function RecuperarContraseñaSeccion2() {

  document.body.classList.add('recuperar-contraseña-body');

  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onBlur", defaultValues: { password: "" }, });
  const { token } = useParams();

  const onSubmit = async (data) => {
    setLoading(true);
    const respuesta = await axios.post(
        `https://prueba-back-mateolohezic.up.railway.app/password-recovery/new-password`,
        {
          token,
          password:data.password
      }
    );
    if (respuesta.status === 200) {
      setEnviado(true)
      setLoading(false);
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
        <div className='cajaVolverAlInicioRecuperarContraseña'>
          <div className='volverAlInicioLoginRecuperarContraseña'>
            <a href="/Iniciar-sesion" className='text-decoration-none'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="bi bi-arrow-left-short svgInicioVolverRecuperarContraseña" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                </svg>
                <span>Iniciar Sesion</span>
            </a>
          </div>
        </div>
        <div className='cajaRecuperarContraseña mb-5'>
          <div className='imagenRecuperarContraseña'><img src={LogoChico} alt="Logo Stannum" /></div>
          <div className='tituloOlvidasteTuContraseña'><h1><span>RESTAURAR</span> CONTRASEÑA</h1></div>
          <div className='explicacionOlvidasteTuContraseña'><p>Complete los siguientes campos para restaurar y cambiar su contraseña. Debe contener al menos una mayúscula y un número.</p></div>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
            <div className="row">
              <div className={`form-group d-flex flex-column`}>
                <label htmlFor="passwordNuevo" className='labelFormLogin'>Nueva contraseña</label>
                  <input
                    id='passwordNuevo'
                    type="password"
                    className={`inputLogin form-control  mt-2`}
                    {...register("password", {
                        required: true,
                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)\S{6,25}$/,
                        minLength: 6,
                        maxLength: 25,
                    })}
                  />
                  <span className="input-border input-border-alt"></span>
              </div>
            </div>
            {errors.password && errors.password.type === "required" && (
                <p className="text-danger mt-2 ms-1 fs-6">Contraseña requerida</p>
            )}
            {errors.password && errors.password.type === "pattern" && (
                <p className="text-danger mt-2 ms-1 fs-6">Contraseña invalida</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
                <p className="text-danger mt-2 ms-1 fs-6">
                    No puede contener menos de 6 caracteres
                </p>
            )}
            {errors.password && errors.password.type === "maxLength" && (
                <p className="text-danger mt-2 ms-1 fs-6">
                    No puede contener más de 25 caracteres
                </p>
            )}
            <div className="row mt-4">
              <div className={`form-group d-flex flex-column`}>
                <label htmlFor="passwordNuevo2" className='labelFormLogin'>Repetir contraseña</label>
                <input
                  id='passwordNuevo2'
                  type="password"
                  className={`inputLogin form-control  mt-2`}
                  {...register("password2", {
                    required: true,
                    validate: (value) => value === watch("password") || "Las contraseñas no coinciden.",
                  })}
                />
                <span className="input-border input-border-alt"></span>
              </div>
            </div>
            {errors.password2 && errors.password2.type === "required" && (
                <p className="text-danger mt-2 ms-1 fs-6">Contraseña requerida</p>
            )}
            {errors.password2 && errors.password2.type === "validate" && (
                <p className="text-danger mt-2 ms-1 fs-6">Las contraseñas no coinciden.</p>
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
                    <span>Restaurar contraseña</span>
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
      </>
    )
  } else{
    return (
      <>
        <div className='cajaRecuperarContraseña'>
          <div className='imagenRecuperarContraseña'><img src={LogoChico} alt="" /></div>
          <div className='tituloOlvidasteTuContraseña'><h1>CONTRASEÑA<span> RESTAURADA</span></h1></div>
          <div className='explicacionOlvidasteTuContraseña text-center'><p>¡Su contraseña fue restaurada con éxito!</p></div>
          <div className='mt-4 d-flex justify-content-center'>
            <a href='/Iniciar-sesion'><button type="button" className="botonVolverRecuperarContraseña">Iniciar sesión</button></a>
          </div>       
        </div>
      </>
    )
  }
}

export default RecuperarContraseñaSeccion2