<script >
export default {
    name: 'AppHeader'
}

</script>

<template>
    <header>
        <div class="h-title container d-flex justify-content-around mb-3">
            <img class="ball d-none d-md-block" src="../assets/img/pokebal.png" alt="">
            <img src="../assets/img/title.png" alt="">
            <img class="ball d-none d-md-block" src="../assets/img/pokebal.png" alt="">
        </div>
    </header>
</template>

<style lang="scss" scoped>
.h-title {
    height: 150px;

    img {
        display: block;
        aspect-ratio: 3/2;
        object-fit: contain;
        margin: 0;
        height: 150px;
        width: 400px;
    }

    .ball {
        height: 100px;
        width: 250px;
        margin-top: 50px;
    }

}
</style>
