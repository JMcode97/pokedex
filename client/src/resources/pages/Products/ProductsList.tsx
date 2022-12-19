import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { Products } from '../../types';

export default function ProductsList () {

    // START GET PRODUCTS
    const api = 'https://e-commerce-api-du7d.onrender.com';
    const [ProductsList, setProductsList] = useState<Products[]>([]);
    const getProducts = async () => {
        await axios.get<Products[]>(api + '/products')
                   .then(res => setProductsList(res.data));
    }
    // END GET PRODUCTS



    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
        <div 
        className='w-full p-10' >
        <div>
        <h1 
        className='mb-5 font-mono text-3xl text-red-500 text-center' >
        Products list
        </h1>
        <ul
        className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
        {
            ProductsList.map(item => {
                return (
                    <li
                    key={item._id} > 
                    <ProductCard 
                    id={item._id}
                    img={'https://via.placeholder.com/300x200'}
                    title={item.title}
                    price={item.price}
                    load={getProducts}
                    />
                    </li>
                )
            })
        }
        </ul>  
        </div>
        </div>
        </>
    )
}