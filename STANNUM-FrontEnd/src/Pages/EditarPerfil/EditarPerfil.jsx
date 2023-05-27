import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './editarPerfil.css'
import axios from "axios";
import FotoDePerfil from '../../assets/UserDefecto.png'

function EditarPerfil() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState("");
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ mode: "onBlur" });
    const [archivoSubido, setArchivoSubido] = useState(null);
    const [user, setUser] = useState({});

    const token = localStorage.getItem('token');

    useEffect(() => {
        const getUser = async () =>{
        if (token) {
            const respuesta = await axios.post(`http://localhost:8000/get-user/${token}`);
            console.log(respuesta);
            setUser(respuesta.data)
        }}
        getUser()
    }, [token])

    const onSubmit = async (data) => {
        setLoading(true);
        const fecha = data.birthdate.split('-');
        const nacimiento = `${fecha[2]}/${fecha[1]}/${fecha[0]}`;
        const respuesta = await axios.patch(`http://localhost:8000/patch-user`,
            {
                id: user._id,
                name: data.name,
                surname: data.surname,
                venture: data.venture,
                territory: data.territory,
                birthdate: nacimiento,
                biography: data.biography,
            }
        );

        if (respuesta.status === 200) {
            window.location.replace("/Perfil");        
        }
        if (respuesta.status === 206) {
            setLoading(false);
            setError(true);
            setErrorMensaje(respuesta.data.message)
        }
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
                                defaultValue={user.name !== 'Undefined' ? user.name : ''}
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
                                defaultValue={user.surname !== 'Undefined' ? user.surname : ''}
                                {...register("surname", { required: true, maxLength: 40 })}
                            />
                            {errors.surname && errors.surname.type === "required" && (
                                <p className="text-danger mt-2 ms-1 fs-6">Apellido requerido.</p>
                            )}
                        </div>
                    </div>
                    <div className="row rowEditarPerfilInput">
                        <div className='form-group col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                            <label htmlFor="venture" className='labelFormEditarPerfil'>Emprendimiento</label>
                            <input
                                autoComplete='false'
                                id='venture'
                                type="text"
                                className={`inputEditarPerfil form-control  mt-2`}
                                defaultValue={user.venture !== 'Undefined' ? user.venture : ''}
                                {...register("venture", {
                                    required: true,
                                    maxLength: 40,
                                })}
                            />
                            {errors.venture && errors.venture.type === "required" && (
                                <p className="text-danger mt-2 ms-1 fs-6">Emprendimiento requerido.</p>
                            )}
                        </div>
                        <div className='form-group col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                            <label htmlFor="birthdate" className='labelFormEditarPerfil'>Nacimiento</label>
                            <input
                                autoComplete='false'
                                id='birthdate'
                                type="date"
                                className={`inputEditarPerfil form-control  mt-2`}
                                defaultValue={user.birthdate !== 'Undefined' ? user.birthdate : ''}
                                {...register("birthdate", {
                                    required: true,
                                    maxLength: 40,
                                })}
                            />
                            {errors.birthdate && errors.birthdate.type === "required" && (
                                <p className="text-danger mt-2 ms-1 fs-6">Edad requerida.</p>
                            )}
                        </div>
                    </div>
                    <div className="row rowEditarPerfilInput">
                        <div className='form-group col-12'>
                            <label htmlFor="territory" className='labelFormEditarPerfil'>Territorio</label>
                            <input
                                autoComplete='false'
                                id='territory'
                                type="text"
                                className={`inputEditarPerfil form-control  mt-2`}
                                defaultValue={user.territory !== 'Undefined' ? user.territory : ''}
                                {...register("territory", {
                                    required: true,
                                    maxLength: 40,
                                })}
                            />
                            {errors.territory && errors.territory.type === "required" && (
                                <p className="text-danger mt-2 ms-1 fs-6">Territorio requerido.</p>
                            )}
                        </div>
                    </div>
                    <div className="row rowEditarPerfilInput">
                        <div className='form-group col-12'>
                            <label htmlFor="biography" className='labelFormEditarPerfil'>Biografía</label>
                            <textarea
                                autoComplete='false'
                                id='biography'
                                type="text"
                                className={`inputEditarPerfil form-control  mt-2`}
                                defaultValue={user.biography !== 'Undefined' ? user.biography : ''}
                                {...register("biography", {
                                    required: false,
                                    maxLength: 350,
                                })}
                            />
                            {errors.biography && errors.biography.type === "maxLength" && (
                                <p className="text-danger mt-2 ms-1 fs-6">No puede contener mas de 350 caracteres.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='botonesEditarPerfil'>
                <a href="/Perfil" className='descartarEditarPerfil'><button  type='button'>Descartar cambios</button></a>
                <button className='confirmarEditarPerfil' type='submit'>
                    {loading ? (
                        <span
                            className="spinner-border spinner-border-sm mr-2"
                            role="status"
                            aria-hidden="true"
                        ></span>
                    ) : (
                        <span>
                            Guardar cambios
                        </span>
                    )}
                </button>
            </div>
            {error ? (
                <>
                    <p className="text-danger mt-2 text-center mx-auto fs-5">{errorMensaje}</p>
                </>
            ) : (
                <></>
            )}
        </form>        
    </>
    )
}

export default EditarPerfil