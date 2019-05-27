<template>
  <v-layout row fixed>
    <v-toolbar fixed>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase"><v-btn flat class="display-1" :to="$i18nRoute({ name: nav.home.title })" @click="sendData(nav.home)">{{ siteName }}</v-btn></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="item in nav">
          <v-btn flat :key="item.id" :class="{active: item.active}" class="title" :to="$i18nRoute({ name: item.title })" @click="sendData(item)">{{ $t('pages.' + item.title) }}</v-btn>
        </template>
        <v-divider vertical></v-divider>
        <TheLanguageSwitcher/>
        <v-icon>fa-flag</v-icon>
      </v-toolbar-items>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        class="overflow-vis"
      >
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title class="text-uppercase">{{ siteName }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="item in nav"
            :key="item.id"
            @click="sendData(item)"
            class="text-uppercase"
            :to="$i18nRoute({ name: item.title })"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('pages.' + item.title) }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile><TheLanguageSwitcher/><v-icon>fa-flag</v-icon></v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-toolbar>
  </v-layout>
</template>

<script>
import TheLanguageSwitcher from '@/components/TheLanguageSwitcher'

export default {
  name: 'ToolbarComp',
  components: {
    TheLanguageSwitcher
  },
  data () {
    return {
      siteName: 'Possekel Immo',
      drawer: false,
      nav: {
        home: {
          id: 0,
          title: 'home',
          active: false
        },
        about: {
          id: 1,
          title: 'about',
          active: false
        }
      }
    }
  },
  methods: {
    loadUrl () {
      // Gets current URL (if coming from link), and sets the current button to active.
      const link = window.location.href
      if (link.includes("about")) {
        this.nav.about.active = true
      } else {
        this.nav.home.active = true
      }
    },
    sendData: function (item) {
      this.nav.home.active = false
      this.nav.about.active = false

      item.active = true
      this.drawer = false

      // Scrolls to the top
      this.$vuetify.goTo(0, this.options)
    }
  },
  created() {
    // Once on render
    window.onload = this.loadUrl()
  }
}
</script>

<style lang="stylus">
.overflow-vis
  overflow: visible
  height: stretch

.active
  background-color: green

.v-btn--active::before
  opacity: 0

</style>
