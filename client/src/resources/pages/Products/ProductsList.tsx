import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ProductsList () {

    const api = 'http://localhost:8080';

    const [ProductsList, setProductsList] = useState([]);

    useEffect(() => {
        axios.get(api + '/products')
             .then(res => setProductsList(res.data))
    }, [])

    console.log(ProductsList)

    return (
        <>
            <h1>Products list</h1>
            <ul>
            {
                ProductsList.map((item: any) => {
                    return (
                        <>
                            <li>{item.title}</li>
                        </>
                    )
                })
            }
            </ul>
            
        </>
    )
}