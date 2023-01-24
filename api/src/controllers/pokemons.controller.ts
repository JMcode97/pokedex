import { RequestHandler } from "express";
import { MainClient } from "pokenode-ts";

const pokeapi = new MainClient();


export const getRandomPokemon:RequestHandler = async (req, res) => {
    try {
        let randomId = Math.floor(Math.random() * 151);
        const pokemon = await pokeapi.pokemon.getPokemonByName(randomId.toString());

        const pokemonObj = {
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            img: pokemon.sprites.front_default,
        }

        res.json(pokemonObj)

    } catch (err: any) {
        res.json(err.message);
    }
}