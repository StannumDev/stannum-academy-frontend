import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './editarPerfil.css'
import axios from "axios";
import Cookies from 'js-cookie'
import FotoDePerfil from '../../assets/UserDefecto.png'

function EditarPerfil() {

    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ mode: "onBlur" });
    const [archivoSubido, setArchivoSubido] = useState(null);

    const onSubmit = async (data) => {
        setLoading(true);
        console.log(data);
        setLoading(false)
    };

    const handleFileChange = (event) => {
        if (event.target.files[0]){
            const file = event.target.files[0];
            setValue("photo", file)
            setArchivoSubido(URL.createObjectURL(file));
        }
      };

    return (
    <>
        <div className="bg"></div>
        <div className='tituloPerfil'><h1>EDITAR MI PERFIL</h1></div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row rowEditarPerfil'>
                <div className='divFotoJugadorPerfil divFotoJugadorPerfilEditarPerfil'>
                    <label htmlFor="photo" className='botonFotoEditarPerfil'>
                    <i className="bi bi-pencil-square"></i>
                    <input
                        id="photo"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    </label>
                    <div className='contenedorImagen'>
                    <img src={archivoSubido || FotoDePerfil} alt="Perfil Stannum" />
                    </div>
                </div>
                <div className='cajaFormularioEditarPerfil'>
                    <div className="row rowEditarPerfilInput">
                        <div className='form-group col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                            <label htmlFor="name" className='labelFormEditarPerfil'>Nombre</label>
                            <input
                                autoComplete='false'
                                id='name'
                                type="text"
                                className={`inputEditarPerfil form-control  mt-2`}
                                {...register("name", {
                                    required: true,
                                    maxLength: 40,
                                })}
                            />
                            {errors.name && errors.name.type === "required" && (
                                <p className="text-danger mt-2 ms-1 fs-6">Nombre requerido.</p>
                            )}                        
                        </div>
                        <div className='form-group col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                            <label htmlFor="surname" className='labelFormEditarPerfil'>Apellido</label>
                            <input
                                id='surname'
                                type="text"
                                className={`inputEditarPerfil form-control mt-2`}
                                {...register("surname", { required: true, maxLength: 40 })}
                            />
                            {errors.surname && errors.surname.type === "required" && (
                                <p className="text-danger mt-2 ms-1 fs-6">Apellido requerido.</p>
                            )}
                        </div>
                    </div>
                    <div className="row rowEditarPerfilInput">
                        <div className='form-group col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                            <label htmlFor="emprendimiento" className='labelFormEditarPerfil'>Emprendimiento</label>
                            <input
                                autoComplete='false'
                                id='emprendimiento'
                                type="text"
                                className={`inputEditarPerfil form-control  mt-2`}
                                {...register("emprendimiento", {
                                    required: true,
                                    maxLength: 40,
                                })}
                            />
                            {errors.emprendimiento && errors.emprendimiento.type === "required" && (
                                <p className="text-danger mt-2 ms-1 fs-6">Emprendimiento requerido.</p>
                            )}
                        </div>
                        <div className='form-group col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                            <label htmlFor="age" className='labelFormEditarPerfil'>Nacimiento</label>
                            <input
                                autoComplete='false'
                                id='age'
                                type="date"
                                className={`inputEditarPerfil form-control  mt-2`}
                                {...register("age", {
                                    required: true,
                                    maxLength: 40,
                                })}
                            />
                            {errors.age && errors.age.type === "required" && (
                                <p className="text-danger mt-2 ms-1 fs-6">Edad requerida.</p>
                            )}
                        </div>
                    </div>
                    <div className="row rowEditarPerfilInput">
                        <div className='form-group col-12'>
                            <label htmlFor="territorio" className='labelFormEditarPerfil'>Territorio</label>
                            <input
                                autoComplete='false'
                                id='territorio'
                                type="text"
                                className={`inputEditarPerfil form-control  mt-2`}
                                {...register("territorio", {
                                    required: true,
                                    maxLength: 40,
                                })}
                            />
                            {errors.territorio && errors.territorio.type === "required" && (
                                <p className="text-danger mt-2 ms-1 fs-6">Territorio requerido.</p>
                            )}
                        </div>
                    </div>
                    <div className="row rowEditarPerfilInput">
                        <div className='form-group col-12'>
                            <label htmlFor="bio" className='labelFormEditarPerfil'>Biografía</label>
                            <textarea
                                autoComplete='false'
                                id='bio'
                                type="text"
                                className={`inputEditarPerfil form-control  mt-2`}
                                {...register("bio", {
                                    required: false,
                                    maxLength: 350,
                                })}
                            />
                            {errors.bio && errors.bio.type === "maxLength" && (
                                <p className="text-danger mt-2 ms-1 fs-6">No puede contener mas de 350 caracteres.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='botonesEditarPerfil'>
                <a href="/Perfil" className='descartarEditarPerfil'><button  type='button'>Descartar cambios</button></a>
                <button className='confirmarEditarPerfil' type='submit'>Guardar cambios</button>
            </div>
        </form>        
    </>
    )
}

export default EditarPerfil