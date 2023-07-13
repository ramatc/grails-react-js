import React from 'react';
import './Form.css';

const Form = ({ handleChange, dataForm, getOrder }) => {
    return (
        <form
            onChange={handleChange}
        >
            <h2>Ingresé sus datos para completar la compra</h2>
            <div className='input-container'>
                <div>
                    <label htmlFor='name'>Nombre:</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Ingresé su nombre'
                        defaultValue={dataForm.name}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Telefono:</label>
                    <input
                        type='number'
                        name='phone'
                        id='phone'
                        placeholder='Ingresé su telefono'
                        defaultValue={dataForm.phone}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Ingresé su email'
                        defaultValue={dataForm.email}
                    />
                </div>
                <div>
                    <label htmlFor="repEmail">Repita su email:</label>
                    <input
                        type='email'
                        name='repEmail'
                        id='repEmail'
                        placeholder='Repita su email'
                        defaultValue={dataForm.repEmail}
                    />
                </div>
            </div>

            <button
                onClick={getOrder}
                disabled={!(dataForm.name !== ''
                    && dataForm.phone !== ''
                    && dataForm.email === dataForm.repEmail
                    && dataForm.phone.length > 5
                    && dataForm.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
                    && dataForm.name.match(/^[a-zA-Z\s]*$/))}
                className='orderBtn'
            >
                Generar orden
            </button>
        </form>
    )
}

export default Form;
