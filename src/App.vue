<script >
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import { store } from '../src/data/store'

export default {
  name: 'AppVue',
  components: { AppHeader, AppMain, },


  data() {
    return {
      store,
      apiUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=',
    }
  },
  methods: {
    fetchPokemons(url) {
      axios.get(url)
        .then(res => {
          store.pokemons = res.data.docs;
        })
    },
    nextPage() {
      if (store.n === 105) {
        return
      } else {
        ++store.n
        this.fetchPokemons(this.apiUri + store.n);
      }

    },
    prevPage() {
      if (store.n === 1) {
        return
      } else {
        --store.n
        this.fetchPokemons(this.apiUri + store.n);
      }


    }

  },
  mounted() {
    this.fetchPokemons(this.apiUri + store.n);
  }
}


</script>

<template>

  <body class="bg-danger vh-100">
    <AppHeader />
    <AppMain>
      <nav class="d-flex justify-content-center mt-3 ">
        <ul class="pagination">
          <li class="page-item"><a @click="prevPage" class="page-link">Previous</a></li>
          <li class="page-item"><a @click="nextPage" class="page-link">Next</a></li>
        </ul>
      </nav>
    </AppMain>
  </body>
</template>

<style lang="scss">
* {
  font-family: 'Pokemon Solid', sans-serif;
}

a {
  cursor: pointer;

  &:hover {
    color: red;
  }
}
</style>
