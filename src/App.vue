<script >
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import { store } from '../src/data/store'

export default {
  name: 'AppVue',
  components: { AppHeader, AppMain },
  data() {
    return { store }
  },
  methods: {
    fetchPokemons(url) {
      axios.get(url)
        .then(res => {
          store.pokemons = res.data.docs;
        })
    },
  },

  created() {
    this.fetchPokemons(store.apiUri);
  }
}


</script>

<template>

  <body class="bg-danger vh-100">
    <AppHeader />
    <AppMain />
  </body>
</template>

<style lang="scss">
* {
  font-family: 'Pokemon Solid', sans-serif;

}
</style>
