import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Products } from '../../types';

export default function NewProduct () {

    const navigate = useNavigate();

    const api = 'http://localhost:8080';

    const [Form, setForm] = useState<Products>({
        title: '',
        price: 0,
    });

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setForm({...Form, [name]: value});
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post(api + '/products', Form)
        toast.success('New product created successfully');
        setForm({
            title: '',
            price: 0,
        })
    }

    return (
        <>
        <div
        className='p-10' >
        <form
            onSubmit={handleSubmit}
            className='flex flex-col p-10 mx-auto w-1/2 border border-slate-300' >
            <div
            className='flex flex-col mx-auto w-full' >
            <label>
            Product name
            </label>
            <input 
            autoFocus
            type='text'
            name='title' 
            value={Form.title}
            className='my-2 border border-slate-500' 
            onChange={handleForm} />
            </div>

            <div
            className='flex flex-col mx-auto w-full' >
            <label>
            Product price
            </label>
            <input 
            type='number'
            name='price' 
            value={Form.price}
            className='my-2 border border-slate-500' 
            onChange={handleForm} />
            </div>

            <button
            type='submit' 
            className='m-4 mx-auto w-full border border-teal-600 bg-teal-500 p-2 text-white' >
            SEND
            </button>
            </form>
        </div>
        </>
    )
}