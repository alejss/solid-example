import HttpClient from './service-http'


export class AllService { 

    constructor(private http: HttpClient){}

    async getAllItems() {
        const { data } = await this.http.get('https://pokeapi.co/api/v2/pokemon/');
        return data;
    }
}

export class TypePokemon {

    constructor(private http: HttpClient){}

    async getForType() {
        const { data } = await this.http.get('https://pokeapi.co/api/v2/type/3');
        return data;
    }

}

export class PostService {

    constructor(private http: HttpClient){}

    async getPosts() {
        const { data } = await this.http.get('https://pokeapi.co/api/v2/pokemon/pikachu');
        return data;
    }
}