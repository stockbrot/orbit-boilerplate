<template>
  <v-app dark id="app">
    <Navigation/>
    <router-view/>
    <Footer/>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}

</script>

<style>
</style>
