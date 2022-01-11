import React from 'react';
import './Form.css';

const Form = ({handleChange, dataForm, getOrder}) => {
    return (
        <form
            onChange={handleChange}
        >
            <input
                type='text' 
                name='name' 
                placeholder='Ingresé su nombre' 
                defaultValue={dataForm.name}
            />
            <input
                type='number' 
                name='phone'
                placeholder='Ingresé su telefono' 
                defaultValue={dataForm.phone}
            />
            <input
                type='email' 
                name='email' 
                placeholder='Ingresé su email' 
                defaultValue={dataForm.email}
            />
            <input
                type='email' 
                name='repEmail' 
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
