import axios from 'axios';


export class AllService { 

    async getAllItems() {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        return data;
    }
}

export class TypePokemon {

    async getForType() {
        const { data } = await axios.get('https://pokeapi.co/api/v2/type/3');
        return data;
    }

}

export class PostService {

    async getPosts() {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
        return data;
    }
}