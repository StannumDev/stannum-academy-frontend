import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Cookies from 'js-cookie'
import axios from "axios";
import FotoDePerfil from '../../assets/UserDefecto.png'

function EditarPerfilAdmin() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState("");
    const [foto, setFoto] = useState("");
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ mode: "onBlur" });
    const [archivoSubido, setArchivoSubido] = useState(null);
    const [user, setUser] = useState({});

    const adminToken = Cookies.get('adminToken');
    const token = Cookies.get('token');
    const { id } = useParams();
    
    if(adminToken === undefined){
        window.location.replace('/Cerrar-sesion');
    }

    const formatDate = (fecha) =>{
        if (fecha) {
            const [day, month, year] = fecha.split('/');
            return `${year}-${month}-${day}`;        
        }
    }

    useEffect(() => {

        const verifyToken = async () =>{
            if (adminToken) {
                const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/verify-token`,
                    {
                        adminToken
                    }
                );
                if (respuesta.status === 206) {
                    window.location.replace('/Cerrar-sesion');
                }
            } else{
                window.location.replace('/Cerrar-sesion');
            }
        }

        verifyToken()

        const getUser = async () =>{
            if (id) {
                const respuesta = await axios.post(`https://prueba-back-mateolohezic.up.railway.app/get-user-id/${id}`,
                    {
                        token
                    }
                );
                if (respuesta.status === 200) {
                setUser(respuesta.data)
                if (respuesta.data.name !== "Undefined"){
                    setValue("name", respuesta.data.name);
                }
                if (respuesta.data.surname !== "Undefined"){
                    setValue("surname", respuesta.data.surname);
                }
                if (respuesta.data.venture !== "Undefined"){
                    setValue("venture", respuesta.data.venture);
                }
                if (respuesta.data.birthdate !== "Undefined"){
                    setValue("birthdate", formatDate(respuesta.data.birthdate));
                }
                if (respuesta.data.territory !== "Undefined"){
                    setValue("territory", respuesta.data.territory);
                }
                if (respuesta.data.biography !== "Undefined"){
                    setValue("biography", respuesta.data.biography);
                }} else {
                    window.location.replace('/Cerrar-sesion');
                }
            }
        }

        getUser()

        const getPhoto = async () => {
            try {
              const response = await axios.get(`https://prueba-back-mateolohezic.up.railway.app/get-photo-id/${id}`, {
                responseType: 'blob',
              });
              if (response.status === 200) {              
                const url = window.URL.createObjectURL(new Blob([response.data]));
                setFoto(url)
              }
            } catch (error) {
              console.error(error);
            }
        };

        getPhoto();
    }, [id])

    const onSubmit = async (data) => {
        setLoading(true);
        const fecha = data.birthdate.split('-');
        const nacimiento = `${fecha[2]}/${fecha[1]}/${fecha[0]}`;
        const respuesta = await axios.patch(`https://prueba-back-mateolohezic.up.railway.app/patch-user`,
            {
                token,
                id: user._id,
                name: data.name.trim(),
                surname: data.surname.trim(),
                venture: data.venture.trim(),
                territory: data.territory.trim(),
                birthdate: nacimiento,
                biography: data.biography.trim(),
            }
        );

        if (data.photo) {
            await axios.post(
                "https://prueba-back-mateolohezic.up.railway.app/upload-photo",
                {
                    file: data.photo,
                    userId: user._id
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
        }

        if (respuesta.status === 200) {
            window.location.replace("/Administracion/Jugadores");        
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
        <div className='tituloPerfil'><h1>EDITAR PERFIL</h1></div>
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
                    <img src={archivoSubido || foto || FotoDePerfil} alt="Perfil Stannum" />
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
                                    required: false,
                                    maxLength: 40,
                                })}
                            />     
                            {errors.name && errors.name.type === "maxLength" && (
                                <p className="text-danger mt-2 ms-1 fs-6">No puede contener mas de 40 caracteres.</p>
                            )}             
                        </div>
                        <div className='form-group col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                            <label htmlFor="surname" className='labelFormEditarPerfil'>Apellido</label>
                            <input
                                id='surname'
                                type="text"
                                className={`inputEditarPerfil form-control mt-2`}
                                {...register("surname", { required: false, maxLength: 40 })}
                            />
                            {errors.surname && errors.surname.type === "maxLength" && (
                                <p className="text-danger mt-2 ms-1 fs-6">No puede contener mas de 40 caracteres.</p>
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
                                {...register("venture", {
                                    required: false,
                                    maxLength: 40,
                                })}
                            />
                            {errors.venture && errors.venture.type === "maxLength" && (
                                <p className="text-danger mt-2 ms-1 fs-6">No puede contener mas de 40 caracteres.</p>
                            )}
                        </div>
                        <div className='form-group col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                            <label htmlFor="birthdate" className='labelFormEditarPerfil'>Nacimiento</label>
                            <input
                                autoComplete='false'
                                id='birthdate'
                                type="date"
                                className={`inputEditarPerfil form-control  mt-2`}
                                {...register("birthdate", {
                                    required: false,
                                    maxLength: 40,
                                })}
                            />
                            {errors.birthdate && errors.birthdate.type === "maxLength" && (
                                <p className="text-danger mt-2 ms-1 fs-6">No puede contener mas de 40 caracteres.</p>
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
                                {...register("territory", {
                                    required: false,
                                    maxLength: 40,
                                })}
                            />
                            {errors.territory && errors.territory.type === "maxLength" && (
                                <p className="text-danger mt-2 ms-1 fs-6">No puede contener mas de 40 caracteres.</p>
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
                <a href="/Administracion/Jugadores" className='descartarEditarPerfil'><button  type='button'>Descartar cambios</button></a>
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

export default EditarPerfilAdmin