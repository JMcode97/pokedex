import { Router } from "express";
import * as pokemonsController from "../controllers/pokemons.controller"

const router = Router();

router.get('/randomPokemon', pokemonsController.getRandomPokemon);
router.get('/nextPokemon/:id', pokemonsController.getNextPokemon);
router.get('/previousPokemon/:id', pokemonsController.getPreviousPokemon);

export default router