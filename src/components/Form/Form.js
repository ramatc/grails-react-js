import React from 'react';
import './Form.css';

const Form = ({handleChange, dataForm, getOrder}) => {
    return (
        <form
            onChange={handleChange}
        >
            <h2>Ingresé sus datos para completar la compra</h2>
            <label htmlFor='name'>Nombre:</label>
            <input
                type='text' 
                name='name'
                id='name' 
                placeholder='Ingresé su nombre' 
                defaultValue={dataForm.name}
            />
            <label htmlFor="phone">Telefono:</label>
            <input
                type='number' 
                name='phone'
                id='phone'
                placeholder='Ingresé su telefono' 
                defaultValue={dataForm.phone}
            />
            <br/>
            <label htmlFor="email">Email:</label>
            <input
                type='email' 
                name='email'
                id='email' 
                placeholder='Ingresé su email' 
                defaultValue={dataForm.email}
            />
            <label htmlFor="repEmail">Repita su email:</label>
            <input
                type='email' 
                name='repEmail'
                id='repEmail' 
                placeholder='Repita su email' 
                defaultValue={dataForm.repEmail}
            />

            <button
                onClick={getOrder}
                disabled={!(dataForm.name !== '' && dataForm.phone !== '' && dataForm.email === dataForm.repEmail)}
                className='orderBtn'
            >
                Generar orden
            </button>
        </form>
    )
}

export default Form;
