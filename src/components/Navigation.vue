<template>
  <v-layout row fixed>
    <!-- Main Toolbar -->
    <v-toolbar fixed>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase"><v-btn flat class="display-1" :to="$i18nRoute({ name: nav.home.title })" @click="sendData(nav.home)">NameOfSite</v-btn></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="item in nav">
          <v-btn flat :key="item.id" class="title" :to="$i18nRoute({ name: item.title })" @click="sendData(item)">{{ $t(item.name) }}</v-btn>
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
              <v-list-tile-title class="title">NAME OF SITE</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="item in nav"
            :key="item.id"
            @click="sendData(item)"
            class="text-uppercase title"
            :to="$i18nRoute({ name: item.title })"
          >
            <v-list-tile-content>
              <v-list-tile-title class="white--text">{{ $t(item.name) }}</v-list-tile-title>
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
          id: 0,
          active: false,
          //'title' , 'name' needs the link to i18n's json obj
          title: 'home',
          name: 'pages.home'
        },
        about: {
          id: 1,
          title: 'about',
          active: false,
          name: 'pages.about'
        }
      },
      drawer: false
    }
  },
  methods: {
    loadUrl () {
      const link = window.location.href
      if (link.includes("home")) {
        this.nav.home.active = true
      } else if (link.includes("shit")) {
        // this.nav.home.active = true
        return
      }
    },
    sendData: function (item) {
      this.nav.home.active = false
      this.nav.about.active = false

      item.active = true

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

<style scoped>
.overflow-vis {
  overflow: visible;
  height: stretch;
}
</style>
