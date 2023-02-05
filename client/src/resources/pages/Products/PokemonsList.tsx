import axios from 'axios';
import {  useEffect, useMemo, useState } from 'react';
import pokedex from '../../../images/pokedex.png'
import '../../../styles.css'
import AppButton from '../../components/AppButton';
import { Pokemon } from '../../types';
import PuffLoader from "react-spinners/PuffLoader";

export default function PokemonsList() {

    const api = 'http://192.168.0.180:8080';

    const defaultImg = (require('../../../images/grey-pokeball.png'));
    
    const [ Pokemon, setPokemon ] = useState<Pokemon>({
        id: '',
        name: '',
        height: '',
        weight: '',
        img: '',
    });

    const PokemonInitState = useMemo(() => {
        const pokemonObject: Pokemon = {
            id: '∞',
            name: '',
            height: '...',
            weight: '...',
            img: '',
        }

        return pokemonObject
    }, []);

    const PokemonErrorState = useMemo(() => {
        const pokemonObject: Pokemon = {
            id: '∞',
            name: 'No existe',
            height: '...',
            weight: '...',
            img: defaultImg,
        }

        return pokemonObject
    }, [defaultImg]);

    const getPreviousPokemon = async () => {
        try {
            if(Pokemon.id !== '') {
                setPokemon(PokemonInitState)
            }
            let currentId = Pokemon.id;
            await axios.get<Pokemon>(`${api}/previousPokemon/${currentId}`)
            .then(res => {
                setPokemon({...res.data})
                sessionStorage.setItem('pokemon', JSON.stringify(res.data))
            })

        } catch (err: any) {
            console.log(err.message)
        }
    }

    const getRandomPokemon = async () => {
        try {
            if(Pokemon.id !== '') {
                setPokemon(PokemonInitState)
            }
            await axios.get<Pokemon>(`${api}/randomPokemon`)
            .then(res => {
                setPokemon({...res.data})
                sessionStorage.setItem('pokemon', JSON.stringify(res.data))
            })

        } catch (err: any) {
            console.log(err.message)
        }
    }

    const getNextPokemon = async () => {
        try {
            if(Pokemon.id !== '') {
                setPokemon(PokemonInitState)
            }
            let currentId = Pokemon.id;
            await axios.get<Pokemon>(`${api}/nextPokemon/${currentId}`)
            .then(res => {
                setPokemon({...res.data})
                sessionStorage.setItem('pokemon', JSON.stringify(res.data))
            })

        } catch (err: any) {
            console.log(err.message)
        }
    }

    const [ PokemonSearch, setPokemonSearch] = useState<string>('');
    const handlePokemonSearch = (e: any) => setPokemonSearch(e.target.value);

    const getPokemon = async (e: any) => {
        try {
                e.preventDefault();
                if(PokemonSearch.length > 0) {
                    if(Pokemon.id !== '') {
                        setPokemon(PokemonInitState)
                    }
                    let searchId = checkId(PokemonSearch)
                    await axios.get<Pokemon>(`${api}/pokemon/${searchId}`)
                    .then(res => {
                        setPokemon({...res.data})
                        sessionStorage.setItem('pokemon', JSON.stringify(res.data))
                    })
                }
        } catch (err: any) {
            setPokemon(PokemonErrorState)
            console.log(err.message)
        }
    }

    const loaderStyles: React.CSSProperties = {
        position: 'absolute',
        top: '31%',
        left: '16%',
        width: '20%',
        height: '28%'
      };

    const checkId = (id: any) => {
        if(isNaN(id)) {
            return id
        }else {
            if(id >= 1 && id <= 151) {
                return id.toString()
            }else {
                // Agregar mensaje a swal
                return console.log('Solo puedes ingresar de 1 a 151')
            }
        }
    }

    useEffect(() => {
        if(sessionStorage.getItem('pokemon') === '' || sessionStorage.getItem('pokemon') === null) {
            axios.get<Pokemon>(`${api}/randomPokemon`)
            .then(res => {
                setPokemon({...res.data})
                sessionStorage.setItem('pokemon', JSON.stringify(res.data))
            })
        }
        let pokemon = JSON.parse(sessionStorage.getItem('pokemon')!);
        setPokemon({...pokemon})
    }, [])

    

    return (
        <>
            <div
            id='main-container' 
            className='mt-5 p-2 w-full'>
                {/* TITLE */}
                <h1
                className='text-center pb-5 font-bold text-2xl text-red-600' >
                POKÉDEX
                </h1>
                {/* SEARCH INPUT */}
                <form
                onSubmit={getPokemon}
                className='relative m-auto mb-5 w-4/6' >
                    <input 
                    type="text"
                    className='p-2 w-full border border-slate-400'
                    onChange={handlePokemonSearch} />
                    <button
                    className='absolute right-0 bottom-0 top-0 p-2 bg-blue-600 text-white'
                    type='submit' >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                {/* POKÉDEX */}
                <div
                className='relative m-auto w-full' >
                    {
                        (Pokemon.img === '' || Pokemon.img === undefined) ? (
                            <PuffLoader
                            color={'#d63636'}
                            loading={true}
                            cssOverride={loaderStyles}
                            size={'100%'}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            />
                        ) : (
                            <>
                            <img
                            id='pokemon-img'
                            src={Pokemon.img}
                            alt="pokemon"
                            className='absolute' />
                            <span 
                            id='pokemon-name'
                            className='absolute text-center' >
                            {Pokemon.name ?? 'cargando pokédex...'}
                            </span>
                            </> 
                        )}
                    <img
                    id='pokedex-img'
                    src={pokedex}
                    alt="pokédex"
                    className='h-full m-auto object-scale-down'/>
                    <span 
                    id='pokemon-id'
                    className='absolute text-center' >
                    {`#${Pokemon.id ?? '∞'}`}
                    </span>
                    <span 
                    id='pokemon-height'
                    className='absolute text-center text-white' >
                    {`Altura: ${Pokemon.height ?? 'cargando'}`}
                    </span>
                    <span 
                    id='pokemon-weight'
                    className='absolute text-center text-white' >
                    {`Peso: ${Pokemon.weight ?? 'cargando'}`}
                    </span>
                </div>
                {/* BUTTONS */}
                <div 
                className='flex justify-between m-auto mt-5 w-5/6' >
                    <AppButton 
                    onClick={getPreviousPokemon}
                    placeHolder={'ANTERIOR'}
                    bgColor={'bg-blue-300'} />

                    <AppButton 
                    onClick={getRandomPokemon}
                    placeHolder={'RANDOM'}
                    bgColor={'bg-green-300'} />

                    <AppButton 
                    onClick={getNextPokemon}
                    placeHolder={'SIGUIENTE'}
                    bgColor={'bg-red-300'} />
                </div>

            </div>
        </>
    )
}