import axios from 'axios';
import { useEffect, useState } from 'react';
import { Products } from '../../types';

export default function ProductsList () {

    // START GET PRODUCTS
    const api = 'http://localhost:8080';
    const [ProductsList, setProductsList] = useState<Products[]>([]);
    const getProducts = async () => {
        await axios.get(api + '/products')
                   .then(res => setProductsList(res.data));
    }
    // END GET PRODUCTS

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <h1 
            className='font-mono text-3xl text-red-500' >
            Products list
            </h1>
            <ul>
            {
                ProductsList.map(item => {
                    return (
                        <>
                            <li 
                            key={item._id} >
                            {item.title}
                            </li>
                        </>
                    )
                })
            }
            </ul>
            
        </>
    )
}