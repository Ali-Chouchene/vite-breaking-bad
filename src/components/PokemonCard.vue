<script >
export default {
    name: 'PokemonCard',
    props: {
        pokemon: Object

    }
}

</script>

<template>
    <div class="col p-4 text-center my-2">
        <img :src="pokemon.imageUrl" :alt="pokemon.name">
        <h6 class="pt-3">#{{ pokemon.number }}</h6>
        <h4 class="text-danger py-2">{{ pokemon.name }}</h4>
        <h5>type: {{ pokemon.type1 }}</h5>
    </div>

</template>

<style lang="scss" scoped>
.col {
    background-color: rgb(87, 0, 250);
    height: 330px;
    border-radius: 15px;

}

img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    object-fit: fill;


}
</style>