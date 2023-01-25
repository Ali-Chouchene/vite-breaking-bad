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
      allUri: '?per=30&page=',
      filterUri: 'eq[type1]=',
      filtered: false,
      apiUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons',
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
      if (store.n === 35) {
        return
      } else {
        ++store.n
        this.fetchPokemons(this.apiUri + this.allUri + store.n);
      }

    },
    prevPage() {
      if (store.n === 1) {
        return
      } else {
        --store.n
        this.fetchPokemons(this.apiUri + this.allUri + store.n);
      }


    },
    filterApi(term) {
      if (term === 'all') {
        this.filtered = false;
        store.n = 1
        this.fetchPokemons(this.apiUri + this.allUri + store.n);
      }
      else {
        this.filtered = true;
        const url = `${this.apiUri}${'?per=100&'}${this.filterUri}${term}`
        this.fetchPokemons(url);
      }


    }

  },
  mounted() {
    this.fetchPokemons(this.apiUri + this.allUri + store.n);
  }
}


</script>

<template>

  <body class="bg-danger vh-100">
    <AppHeader />
    <AppMain @current-option="filterApi">
      <nav class="d-flex justify-content-center mt-3 ">
        <ul class="pagination">
          <li :class="filtered === true ? 'disabled' : ''" class="page-item"><a @click="prevPage"
              class="page-link">Previous</a></li>
          <li :class="filtered === true ? 'disabled' : ''" class="page-item"><a @click="nextPage"
              class="page-link">Next</a></li>
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
