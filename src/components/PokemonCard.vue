<script >
export default {
    name: 'PokemonCard',
    props: {
        pokemon: Object

    }
}

</script>

<template>
    <div class="col p-4 text-center my-2" :class=pokemon.color>
        <img :src="pokemon.imageUrl" :alt="pokemon.name">
        <h6 class="pt-3 text-secondary">#{{ pokemon.number }}</h6>
        <h4 class=" py-2">{{ pokemon.name }}</h4>
        <h6 class="text-secondary">type: {{ pokemon.type1 }}</h6>
    </div>

</template>

<style lang="scss" scoped>
.col {

    height: 330px;
    border-radius: 15px;

    &.Blue {
        background-color: rgb(195, 210, 219);
    }

    &.Green {
        background-color: rgb(220, 249, 224);
    }

    &.Red {
        background-color: rgb(255, 226, 223);
    }

    &.Pink {
        background-color: rgb(248, 194, 203);
    }

    &.Purple {
        background-color: rgb(92, 29, 92);
    }

}

img {
    height: 170px;
    width: 170px;
    border-radius: 50%;
    object-fit: fill;


}
</style>