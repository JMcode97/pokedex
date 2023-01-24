import axios from 'axios';
import { useEffect, useState } from 'react';
import pokedex from '../../../images/pokedex.png'
import '../../../styles.css'
import { Pokemon } from '../../types';

export default function PokemonsList() {

    const api = 'http://192.168.0.180:8080';
    
    const [ Pokemon, setPokemon ] = useState<Pokemon>({
        id: '',
        name: '',
        height: '',
        weight: '',
        img: '',
    });

    const getRandomPokemon = async () => {
        try {
            await axios.get<Pokemon>(`${api}/randomPokemon`)
            .then(res => setPokemon({...res.data}))
        } catch (err: any) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getRandomPokemon();
    }, [])

    useEffect(() => {
        console.table(Pokemon)
    }, [Pokemon])

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
                    src={Pokemon.img}
                    alt="pokemon"
                    className='absolute' />
                    <span 
                    id='pokemon-name'
                    className='absolute text-center' >
                    {Pokemon.name}
                    </span>
                    <span 
                    id='pokemon-id'
                    className='absolute text-center' >
                    {`#${Pokemon.id}`}
                    </span>
                    <span 
                    id='pokemon-height'
                    className='absolute text-center text-white' >
                    {`Altura: ${Pokemon.height}`}
                    </span>
                    <span 
                    id='pokemon-weight'
                    className='absolute text-center text-white' >
                    {`Peso: ${Pokemon.weight}`}
                    </span>
                </div>
            </div>
        </>
    )
}