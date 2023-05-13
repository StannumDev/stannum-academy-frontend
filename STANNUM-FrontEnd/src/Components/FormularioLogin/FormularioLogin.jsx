import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from 'js-cookie'
import keyIcon from '../../assets/key.png'
import './formularioLogin.css'

function FormularioLogin() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur", defaultValues: { email: "", password: "", }, });

    const onSubmit = async (data) => {
        setLoading(true);
        const respuesta = await axios.post(
            `link/users/login-user`,
            {
                email: data.email.trim().toLowerCase(),
                password: data.password,
            }
        );
        if (respuesta.status === 200) {
            Cookies.set('id', respuesta.data.user._id, { expires: 365 });
            if (respuesta.data.user.role === "admin") {
                Cookies.set('token', respuesta.data.token, { expires: 365 });
                window.location.replace("/");
            } else {
                window.location.replace("/");
            }
        }
        if (respuesta.status === 206) {
            setLoading(false);
            setError(true);
            setErrorMensaje(respuesta.data.message)
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                <div className="row">
                    <div className={`form-group`}>
                        <label htmlFor="email" className='labelFormLogin'>Correo electrónico</label>
                        <input
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
                <div className="row">
                    <div className={`form-group mt-3`}>
                        <div className='d-flex justify-content-between'>
                        <label htmlFor="password" className='labelFormLogin'>Contraseña</label>
                        <a href="/Recuperar-contraseña/Email" className="text-decoration-none linkOlvideContraseña">Olvidé mi contraseña</a>
                        </div>
                        <input
                            type="password"
                            className={`inputLogin form-control mt-2`}
                            {...register("password", { required: true, maxLength: 40 })}
                        />
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
                <div className='mt-5 d-flex justify-content-end'>
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
}

export default FormularioLogin