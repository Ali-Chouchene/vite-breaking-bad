import { reactive } from 'vue';
export const store = reactive({
    pokemons: [],
    // apiUri: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20'
    apiUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=6'

})