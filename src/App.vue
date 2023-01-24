<script >
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import store from '../src/data/store'

export default {
  name: 'AppVue',
  components: { store, AppHeader, AppMain },

}
</script>

<template>

  <body class="bg-danger vh-100">
    <AppHeader />
    <AppMain />
  </body>
</template>

<style lang="scss">
// body {
//   background-color: rgb(211, 40, 21);
// }
</style>
