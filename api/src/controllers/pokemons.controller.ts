import { RequestHandler } from "express";
import { MainClient } from "pokenode-ts";

const pokeapi = new MainClient();


export const getRandomPokemon: RequestHandler = async (req, res) => {
    try {
        let randomId = Math.floor(Math.random() * 151);
        const pokemon = await pokeapi.pokemon.getPokemonByName(randomId.toString());

        const pokemonObj = {
            id: pokemon.id,
            name: pokemon.name,
            height: `${pokemon.height/10} metros`,
            weight: `${pokemon.weight/10} kilos`,
            img: pokemon.sprites.front_default,
        }

        res.json(pokemonObj)

    } catch (err: any) {
        res.status(404).json(err.message);
    }
}

export const getNextPokemon: RequestHandler = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let nextId = ++id;

        const pokemon = await pokeapi.pokemon.getPokemonByName(nextId.toString());

        const pokemonObj = {
            id: pokemon.id,
            name: pokemon.name,
            height: `${pokemon.height/10} metros`,
            weight: `${pokemon.weight/10} kilos`,
            img: pokemon.sprites.front_default,
        }

        res.json(pokemonObj)

    } catch (err: any) {
        res.status(404).json(err.message);
    }
}

export const getPreviousPokemon: RequestHandler = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let nextId = --id;

        const pokemon = await pokeapi.pokemon.getPokemonByName(nextId.toString());

        const pokemonObj = {
            id: pokemon.id,
            name: pokemon.name,
            height: `${pokemon.height/10} metros`,
            weight: `${pokemon.weight/10} kilos`,
            img: pokemon.sprites.front_default,
        }

        res.json(pokemonObj)

    } catch (err: any) {
        res.status(404).json(err.message);
    }
}

export const getPokemon: RequestHandler = async (req, res) => {
    try {
        let pokemonName = req.params.name;

        const pokemon = await pokeapi.pokemon.getPokemonByName(pokemonName.toString());

        const pokemonObj = {
            id: pokemon.id,
            name: pokemon.name,
            height: `${pokemon.height/10} metros`,
            weight: `${pokemon.weight/10} kilos`,
            img: pokemon.sprites.front_default,
        }

        res.json(pokemonObj)

    } catch (err: any) {
        res.status(404).json(err.message);
    }
}