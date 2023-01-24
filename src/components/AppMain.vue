<script >
import { store } from '../../src/data/store'
import PokemonCard from './PokemonCard.vue'
export default {
    name: 'AppMain',
    components: { PokemonCard },
    data() {

        return {
            store,
            n: 1,

        }
    },
    methods: {

    }
}

</script>

<template>
    <div class="background">
        <div class="container d-flex justify-content-center flex-column ">
            <slot></slot>
            <div class="m-screen my-4 p-3 ">
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-6  gap-4 justify-content-center">
                    <PokemonCard v-for="pokemon in store.pokemons" :key="pokemon._id" :pokemon="pokemon"></PokemonCard>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background {
    background-image: url(../assets/img/village.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}

.m-screen {
    height: 70vh;
    width: 100%;
    background-color: black;
    border: 15px solid rgb(220, 53, 69);
    border-radius: 10px;
    overflow-y: auto;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

}
</style>