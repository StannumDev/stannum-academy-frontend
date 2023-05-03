import React from 'react';
import { useForm } from 'react-hook-form';
import './test.css';

function Test() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mt-5 px-4">
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>¿Quién es Messi?</h1>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="footballPlayer"
            value="footballPlayer"
            {...register('answer', { required: true })}
          />
          <label htmlFor="footballPlayer" className="form-check-label">Un jugador de fútbol</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="lawyer"
            value="lawyer"
            {...register('answer', { required: true })}
          />
          <label htmlFor="lawyer" className="form-check-label">Un abogado</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="doctor"
            value="doctor"
            {...register('answer', { required: true })}
          />
          <label htmlFor="doctor" className="form-check-label">Un médico</label>
        </div>
        {errors.answer && <div className="text-danger">Este campo es requerido</div>}
        <h1 className='mt-5'>¿Quién es Cristiano?</h1>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="footballPlayer2"
            value="footballPlayer"
            {...register('answer2', { required: true })}
          />
          <label htmlFor="footballPlayer2" className="form-check-label">Un jugador de fútbol</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="lawyer2"
            value="lawyer"
            {...register('answer2', { required: true })}
          />
          <label htmlFor="lawyer2" className="form-check-label">Un abogado</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="doctor2"
            value="doctor"
            {...register('answer2', { required: true })}
          />
          <label htmlFor="doctor2" className="form-check-label">Un médico</label>
        </div>
        {errors.answer2 && <div className="text-danger">Este campo es requerido</div>}
        <div className='text-end'>
          <button type="submit" className="btn botonTestSubmit mt-3">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Test;