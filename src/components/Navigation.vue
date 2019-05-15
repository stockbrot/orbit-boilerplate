<template>
  <v-layout row fixed>
    <!-- Orange underlying toolbar -->
    <v-toolbar
      flat
      fixed
      height="75px"
      color="orange"
      width="100%"
    ></v-toolbar>
    <!-- Main Toolbar -->
    <v-toolbar fixed>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase display-1"><v-btn flat transparent class="display-1" :to="$i18nRoute({ name: nav.home.title })" @click="sendData(nav.home)">Package Man</v-btn></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="page in nav">
          <v-btn flat :key="page.id" :class="{orange: page.show}" class="title" :to="$i18nRoute({ name: page.title })" @click="sendData(page)">{{ $t(page.page) }}</v-btn>
        </template>
        <v-divider vertical></v-divider>
        <TheLanguageSwitcher style="margin: 10px;"/>
        <v-icon class="lang-icon">fa-flag</v-icon>
      </v-toolbar-items>

      <!-- Mobile Navigation Drawer -->
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        class="overflow-vis"
      >
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title class="title">PACKAGE MAN</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="page in nav"
            :key="page.title"
            @click="sendData(page)"
            class="text-uppercase title"
            :class="{orange: page.show}"
            :to="$i18nRoute({ name: page.title })"
          >
            <v-list-tile-content>
              <v-list-tile-title class="white--text">{{ $t(page.page) }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile class="lang-drawer"><TheLanguageSwitcher/><v-icon>fa-flag</v-icon></v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-toolbar>
  </v-layout>
</template>

<script>
import TheLanguageSwitcher from '@/components/TheLanguageSwitcher'

export default {
  name: 'Navigation',
  components: {
    TheLanguageSwitcher
  },
  data () {
    return {
      nav: {
        home: {
          id: 1,
          title: 'Home',
          show: false,
          page: 'pages.home'
        },
        about: {
          id: 2,
          title: 'About',
          show: false,
          page: 'pages.about'
        },
        blog: {
          id: 3,
          title: 'Blog',
          show: false,
          page: 'pages.blog'
        },
        buy: {
          id: 4,
          title: 'Buy',
          show: false,
          page: 'pages.buy'
        },
        community: {
          id: 5,
          title: 'Community',
          show: false,
          page: 'pages.community'
        }
      },
      drawer: false
    }
  },
  methods: {
    loadUrl () {
      const link = window.location.href
      if (link.includes("about")) {
        this.nav.about.show = true
      } else if (link.includes("home")) {
        this.nav.home.show = true
      } else if (link.includes("blog")) {
        this.nav.blog.show = true
      } else if (link.includes("community")) {
        this.nav.community.show = true
      } else if (link.includes("buy")) {
        this.nav.buy.show = true
      }
    },
    sleep: async function (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    sendData: function (data) {
      this.nav.home.show = false
      this.nav.about.show = false
      this.nav.community.show = false
      this.nav.buy.show = false
      this.nav.blog.show = false

      data.show = true

      // await this.sleep(50)
      this.drawer = false
      this.$vuetify.goTo(0, this.options)
    }
  },
  created() {
    window.onload = this.loadUrl()
  }
}
</script>

<style>
</style>
