import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Products } from '../../types';

export default function NewProduct () {

    const api = 'http://localhost:8080';

    const [Form, setForm] = useState<Products>({
        title: '',
        price: 0,
    });

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setForm({...Form, [name]: value});
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log(Form);
        axios.post(api + '/products', Form);
    }

    return (
        <>
            <form
            onSubmit={handleSubmit}
            className='flex-col p-10' >
                <div>
                <label>
                Product name
                </label>
                <input 
                autoFocus
                type='text'
                name='title' 
                value={Form.title}
                className='border border-slate-500' 
                onChange={handleForm} />
                </div>

                <div>
                <label>
                Product price
                </label>
                <input 
                type='number'
                name='price' 
                value={Form.price}
                className='border border-slate-500' 
                onChange={handleForm} />
                </div>

                <button
                type='submit' 
                className='border border-teal-600 bg-teal-500 p-2 text-white' >
                SEND
                </button>
            </form>
        </>
    )
}