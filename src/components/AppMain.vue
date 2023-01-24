<script >
import { store } from '../../src/data/store'
import PokemonCard from './PokemonCard.vue'
export default {
    name: 'AppMain',
    components: { PokemonCard },
    data() {


        return { store }
    },
}

</script>

<template>
    <div class="container d-flex justify-content-center flex-column ">
        <div class="m-screen my-5 p-3 ">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-6  gap-4 justify-content-center">
                <PokemonCard v-for="pokemon in store.pokemons" :key="pokemon._id" :pokemon="pokemon"></PokemonCard>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.m-screen {
    height: 70vh;
    width: 100%;
    background-color: black;
    border: 15px solid gainsboro;
    border-radius: 10px;
    overflow-y: auto;

    .row {}
}
</style>