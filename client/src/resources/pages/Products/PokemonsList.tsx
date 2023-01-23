import axios from 'axios';
import { useEffect } from 'react';
// import { Products } from '../../types';
import pokedex from '../../../images/pokedex.png'
import '../../../styles.css'

export default function PokemonsList() {

    // START GET PRODUCTS
    const api = 'https://pokeapi.co/api/v2';
    // const [ProductsList, setProductsList] = useState<Products[]>([]);
    // const getProducts = async () => {
    //     await axios.get<Products[]>(api + '/products')
    //                .then(res => setProductsList(res.data));
    // }
    // END GET PRODUCTS


    const getPokemon = async () => {
        axios.get(`${api}/pokemon/150`)
        // .then(res => console.log(res.data))
    }
        
    console.log(Math.floor(Math.random() * 11))

    useEffect(() => {
        // getProducts();
    }, [])

    return (
        <>
            <div
            id='main-container' 
            className='mt-5 p-2 w-full'>
                <h1
                className='text-center pb-5 font-bold text-2xl text-red-600' >
                POKÉDEX
                </h1>
                <div
                className='relative m-auto w-full' >
                    <img
                    id='pokedex-img'
                    src={pokedex}
                    alt="pokédex"
                    className='h-full m-auto object-scale-down'/>
                    <img
                    id='pokemon-img'
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
                    alt="pokemon"
                    className='absolute' />
                </div>
            </div>
        </>
    )
}