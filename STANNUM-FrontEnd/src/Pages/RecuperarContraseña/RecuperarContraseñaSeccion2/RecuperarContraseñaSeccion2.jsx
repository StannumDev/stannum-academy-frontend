import React, { useState } from 'react';
import LogoChico from '../../../assets/LogoChico.png'
import axios from "axios";
import { useForm } from "react-hook-form";
import './recuperarContraseñaSeccion2.css'

function RecuperarContraseñaSeccion2() {

  document.body.classList.add('recuperar-contraseña-body');

  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onBlur", defaultValues: { password: "" }, });

  const onSubmit = async (data) => {
    console.log(data);
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
          <div className='imagenRecuperarContraseña'><img src={LogoChico} alt="Logo Stannum" /></div>
          <div className='tituloOlvidasteTuContraseña'><h1><span>RESTAURAR</span> CONTRASEÑA</h1></div>
          <div className='explicacionOlvidasteTuContraseña'><p>Complete los siguientes campos para restaurar y cambiar su contraseña. Debe contener al menos una mayúscula y un número.</p></div>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
            <div className="row">
              <div className={`form-group`}>
                <label htmlFor="password" className='labelFormLogin'>Nueva contraseña</label>
                  <input
                    type="password"
                    className={`inputLogin form-control  mt-2`}
                    {...register("password", {
                        required: true,
                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)\S{6,25}$/,
                        minLength: 6,
                        maxLength: 25,
                    })}
                  />
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
              <div className={`form-group`}>
                <label htmlFor="email" className='labelFormLogin'>Repetir contraseña</label>
                <input
                  type="password"
                  className={`inputLogin form-control  mt-2`}
                  {...register("password2", {
                    required: true,
                    validate: (value) => value === watch("password") || "Las contraseñas no coinciden.",
                  })}
                />
              </div>
            </div>
            {errors.password2 && errors.password2.type === "required" && (
                <p className="text-danger mt-2 ms-1 fs-6">Contraseña requerida</p>
            )}
            {errors.password2 && errors.password2.type === "validate" && (
                <p className="text-danger mt-2 ms-1 fs-6">Las contraseñas no coinciden.</p>
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
                    <span>Restaurar contraseña</span>
                  </>
                )}
              </button>
            </div>
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
            <a href='/Iniciar-sesion'><button type="button" className="botonVolverRecuperarContraseña">Volver al inicio</button></a>
          </div>       
        </div>
      </>
    )
  }
}

export default RecuperarContraseñaSeccion2