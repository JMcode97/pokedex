import { Router } from "express";
import * as pokemonsController from "../controllers/pokemons.controller"

const router = Router();

router.get('/randomPokemon', pokemonsController.getRandomPokemon);

export default router