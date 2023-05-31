import React, { useState } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom'
import keyIcon from '../../assets/key.png'
import Cookies from 'js-cookie'
import './formularioLogin.css'

function FormularioLogin() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur", defaultValues: { email: "", password: "", }, });

    const onSubmit = async (data) => {
        setLoading(true);
        const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/login-user`,
            {
                email: data.email.trim().toLowerCase(),
                password: data.password,
            }
        );

        if (respuesta.status === 200) {
                Cookies.set('token', respuesta.data.token, { expires: 1 });
            if (respuesta.data.adminToken) {
                Cookies.set('adminToken', respuesta.data.adminToken, { expires: 1 });
                setSubmitted(true)
            } else {
                setSubmitted(true)
            }
        }
        if (respuesta.status === 206) {
            setLoading(false);
            setError(true);
            setErrorMensaje(respuesta.data.message)
        }
        setLoading(false)
    };

    if(!submitted){
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                <div className="row">
                    <div className={`form-group d-flex flex-column`}>
                        <label htmlFor="email" className='labelFormLogin'>Correo electrónico</label>
                        <input
                            autoComplete='true'
                            id='email'
                            type="email"
                            className={`inputLogin form-control  mt-2`}
                            {...register("email", {
                                required: true,
                                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
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
                <div className="row">
                    <div className={`form-group mt-3  d-flex flex-column`}>
                        <div className='d-flex justify-content-between'>
                        <label htmlFor="password" className='labelFormLogin'>Contraseña</label>
                        <a href="/Recuperar-contraseña/Email" className="text-decoration-none linkOlvideContraseña">Olvidé mi contraseña</a>
                        </div>
                        <input
                            id='password'
                            type="password"
                            className={`inputLogin form-control mt-2`}
                            {...register("password", { required: true, maxLength: 40 })}
                        />
                        <span className="input-border input-border-alt"></span>
                        <a href="/Recuperar-contraseña/Email" className="text-decoration-none align-self-end linkOlvideContraseñaResponsive">Olvidé mi contraseña</a>
                    </div>
                </div>
                {errors.password && errors.password.type === "required" && (
                    <p className="text-danger mt-2 ms-1 fs-6">Contraseña requerida</p>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                    <p className="text-danger mt-2 ms-1 fs-6">
                        No puede contener más de 40 caracteres
                    </p>
                )}
                {error ? (
                    <>
                        <p className="text-danger mt-2 ms-1 fs-6">{errorMensaje}</p>
                    </>
                ) : (
                    <></>
                )}
                <div className='mt-5 d-flex divBotonIniciarSesion'>
                    <button type="submit" className="botonSubmitLogin">
                        {loading ? (
                            <span
                                className="spinner-border spinner-border-sm mr-2"
                                role="status"
                                aria-hidden="true"
                            ></span>
                        ) : (
                            <>
                            <img src={keyIcon} alt="Iniciar Sesión STANNUM" className='keyIconLogin me-1'/>
                            <span>
                                Iniciar sesión
                            </span>
                            </>
                        )}
                    </button>
                </div>
            </form>        
        </>
    )
    } else{
        return <Navigate to={'/'}/>
    }
}

export default FormularioLogin