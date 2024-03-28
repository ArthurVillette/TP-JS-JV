import { ENDPOINT } from '../config.js';

export default class PokemonProvider {
    static async fetchPokedex() {
        try {
            let response = await fetch(`${ENDPOINT}/pokedex`);
            return await response.json();
        } catch (err) {
            console.log('Error getting documents', err);
            return []; // Retourne un tableau vide en cas d'erreur
        }
    }

    static async fetchPokemonByID(id) {
        try {
            const response = await fetch(`${ENDPOINT}/pokedex/${id}`);
            return await response.json();
        } catch (err) {
            console.log('Error getting documents', err);
            return {}; // Retourne un objet vide en cas d'erreur
        }
    }
}
