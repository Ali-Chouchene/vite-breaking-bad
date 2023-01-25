<script>
import { store } from '../../src/data/store'
export default {
    name: 'SelectOptions',
    currentValue: "all",

    data() {
        return {
            store,
        }

    },
    computed: {

    },
    methods: {
    },
    emits: ['option-change']
}

</script>
<template>
    <select v-model="currentValue" @change="$emit('option-change', currentValue)"
        class="form-select w-25 text-center my-1  " aria-label="Default select example">
        <option value="all" selected>All Types</option>
        <option v-for="model in store.types" :value="model">{{
            model
        }}
        </option>

    </select>

</template>
<style lang="scss" scoped>

</style>