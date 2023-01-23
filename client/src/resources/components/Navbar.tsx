import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar () {
    return (
        <>
            <div
            className=' bg-teal-600 p-12 flex justify-center' >
            <ul
            className='inline-flex text-white justify-around w-2/6' >
            <li
            className='border border-teal-700' >
            <Link to={'/'} className='p-4'>Home</Link>
            </li>
            {/* <li
            className='border border-teal-700' >
            <Link to={'/new-product'} className='p-4' >New Product</Link>
            </li> */}
            </ul>
            </div>
        </>
    )
}