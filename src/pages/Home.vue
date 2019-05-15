<template>
  <v-layout
    column
    wrap
    class="my-5"
    align-center
  >
    <h3>Welcome to Orbit's Vue.js Boilerplate</h3>
    <span>Use this, or don't. I don't care :)</span>
  </v-layout>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      // Three Important Main Site
      main3: {
        items: {
          one: {
            id: 1,
            icon: 'fa-truck',
            title: 'home.main3.first.title',
            text: 'home.main3.first.text'
          },
          two: {
            id: 2,
            icon: 'fa-truck',
            title: 'home.main3.second.title',
            text: 'home.main3.second.text'
          },
          three: {
            id: 3,
            icon: 'fa-truck',
            title: 'home.main3.third.title',
            text: 'home.main3.third.text'
          }
        }
      }
    }
  },
  computed: {
    options () {
      return {
        // for scrolling, might be useless
        offset: 100
      }
    }
  }
}
</script>

<style>
</style>
