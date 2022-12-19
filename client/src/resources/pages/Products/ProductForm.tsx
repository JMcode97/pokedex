import axios from 'axios';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Params, Products } from '../../types';

export default function ProductForm () {

    const api = 'https://e-commerce-api-du7d.onrender.com';
    const params = useParams<Params>();

    const [Form, setForm] = useState<Products>({
        title: '',
        price: 0,
    });

    const getProduct = async (id: string) => {
        const res = await axios.get(api + '/products/' + id);
        const { title, price } = res.data;
        setForm({title, price});
    }

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setForm({...Form, [name]: value});
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!params.id){
            await axios.post(api + '/products', Form)
            toast.success('New product created successfully');

        } else {
            await axios.put(api + '/products/' + params.id, Form)
            toast.success('Product has been updated successfully');

        }
        setForm({
            title: '',
            price: 0,
        })
    }

    useEffect(() => {
        if (params?.id) getProduct(params.id);
    }, [])

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

            {
                params.id ? 
                (
                    <button
                    type='submit' 
                    className='m-4 mx-auto w-full border border-teal-600 bg-teal-500 p-2 text-white' >
                    UPDATE
                    </button>
                ) : (
                    <button
                    type='submit' 
                    className='m-4 mx-auto w-full border border-teal-600 bg-teal-500 p-2 text-white' >
                    SAVE
                    </button>
                )
            }
            </form>
        </div>
        </>
    )
}