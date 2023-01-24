<script >
export default {
    name: 'PokemonCard',
    props: {
        pokemon: Object

    }
}

</script>

<template>
    <div class="col p-3 text-center my-2" :class=pokemon.color>
        <img :src="pokemon.imageUrl" :alt="pokemon.name">
        <h6 class="pt-3 text-secondary">#{{ pokemon.number }}</h6>
        <h4 class=" py-2">{{ pokemon.name }}</h4>
        <h6 class="text-secondary">type: {{ pokemon.type1 }}</h6>
    </div>

</template>

<style lang="scss" scoped>
.col {

    height: 300px;
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

    &.Yellow {
        background-color: rgb(131, 131, 87);
    }

    &.White {
        background-color: rgb(202, 191, 191);
    }

    &.Brown {
        background-color: rgba(163, 57, 15, 0.801);
    }

    &.Grey {
        background-color: grey;
    }

    &.Black {
        background-color: rgba(22, 26, 26, 0.795);
    }

}

img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    object-fit: fill;


}
</style>