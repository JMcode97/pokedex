import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import { Products } from '../../types';

export default function ProductsList () {

    const navigate = useNavigate();

    // START GET PRODUCTS
    const api = 'http://localhost:8080';
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
                    key={item._id}
                    onClick={() => navigate('/update-product/' + item._id)} > 
                    <ProductCard 
                    img={'https://via.placeholder.com/300x200'}
                    title={item.title}
                    price={item.price}
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