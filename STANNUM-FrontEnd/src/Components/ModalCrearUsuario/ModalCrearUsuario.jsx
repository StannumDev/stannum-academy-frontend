import React, { useState } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import Cookies from 'js-cookie'
import './modalCrearUsuario.css'

function ModalCrearUsuario() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur"});

    const onSubmit = async (data) => {
        setLoading(true);
        const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/create-user`,
            {
                email: data.email.trim().toLowerCase(),
            }
        );

        if (respuesta.status === 200) {
            window.location.reload(true)
        }
        if (respuesta.status === 206) {
            setLoading(false);
            setError(true);
            setErrorMensaje(respuesta.data.message)
        }
        setLoading(false)
    };



    return (
        <>
            <button className='botonAgregarUsuarioAdmin' type="button" data-bs-backdrop="static" data-bs-keyboard="false" data-bs-toggle="modal" data-bs-target="#modalCrearUsuario"><i className="bi bi-plus-lg me-2"></i>Crear</button>

            <div className="modal fade modalCrearUsuario" id="modalCrearUsuario" tabIndex="-1" aria-labelledby="modalCrearUsuarioLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content cuerpoModal">
                        <div className="modal-body d-flex flex-column justify-content-center align-items-center p-0">
                            <div className='completarPerfilTitulo'><h3>Crear un usuario</h3></div>
                            <div className='completarPerfilParrafo'><p>Ingresa el correo electrónico del usuario. Debe ser valido.</p></div>
                            <form onSubmit={handleSubmit(onSubmit)} className='mt-2 w-100'>
                                <div className="row">
                                    <div className='form-group col-12'>
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
                                {error ? (
                                    <>
                                        <p className="text-danger mt-2 ms-1 fs-6">{errorMensaje}</p>
                                    </>
                                ) : (
                                    <></>
                                )}                                
                                <div className='d-flex justify-content-center mt-4'>
                                    <button type='button' className='botonCancelarCrearUsuarioForm' data-bs-dismiss="modal" aria-label="Close">
                                        <i className="bi bi-x-lg me-2"></i>Cancelar
                                    </button>                        
                                    <button type='submit' className='botonCrearUsuarioForm'>
                                        {loading ? (
                                            <span
                                                className="spinner-border spinner-border-sm mr-2"
                                                role="status"
                                                aria-hidden="true"
                                                ></span>
                                                ) : (
                                                    <>
                                                <i className="bi bi-plus-lg me-2"></i>Crear
                                            </>
                                        )}
                                    </button>                        
                                </div>
                            </form>        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCrearUsuario