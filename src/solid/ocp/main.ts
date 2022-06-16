import { AllService, TypePokemon, PostService } from './service';

(async () => {
    const todoService = new AllService();
    const postService = new PostService();
    const typePokemon = new TypePokemon();

    const allPokemons = await todoService.getAllItems();
    const posts = await postService.getPosts();
    const getType = await typePokemon.getForType();
    
    
    console.log({ allPokemons, posts, getType });
    

})();