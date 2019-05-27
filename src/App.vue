<template>
  <v-app dark id="app">
    <router-view/>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Footer
  }
}

</script>

<style>
</style>
