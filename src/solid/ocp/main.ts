import { AllService, TypePokemon, PostService } from './service';
import HttpClient from './service-http';

(async () => {

    const httpClient = new HttpClient()

    const allService = new AllService(httpClient);
    const postService = new PostService(httpClient);
    const typePokemon = new TypePokemon(httpClient);

    const allPokemons = await allService.getAllItems();
    const posts = await postService.getPosts();
    const getType = await typePokemon.getForType();
    
    
    console.log({ allPokemons, posts, getType });
    

})();