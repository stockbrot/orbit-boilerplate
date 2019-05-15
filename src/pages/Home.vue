<template>
  <div>
    <section>
      <v-parallax v-bind:src="require('../assets/packageman.png')" height="550">
        <v-container fluid>
          <v-layout row fill-height>
            <v-flex d-flex xs12>
              <v-flex d-flex xs6>
                <v-layout
                  column
                  align-center
                  justify-center
                  class="white--text"
                >
                  <!-- Box -->
                  <v-icon size="200px" class="orange--text">fa-box-open</v-icon>
                  <!-- Text -->
                  <h1 class="orange--text mb-2 display-1 text-xs-center text-uppercase card-padding">{{ $t('home.headline') }}</h1>
                  <div class="subheading mb-3 text-xs-center card-padding">{{ $t('home.subheading') }}</div>
                  <!-- Arrows -->
                  <v-btn @click="$vuetify.goTo('#first', options)" icon>
                    <v-icon size="50px" class="animated infinite rubberBand orange--text delay-1s">fa-angle-double-down</v-icon>
                  </v-btn>
                </v-layout>
              </v-flex>
              <!-- YouTube / Banner -->
              <v-flex d-flex xs6>
                <v-layout
                  column
                  align-center
                  justify-center
                >
                  <iframe id="youtube" width="560" height="315" src="https://www.youtube.com/embed/7FQa_noUneo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </v-layout>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-container>
      </v-parallax>
    </section>

    <!-- Three important parts -->
    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 id="first" class="headline">{{ $t('home.main3.headline') }}</h2>
            <span class="subheading">
              {{ $t('home.main3.subheading') }}
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout align-space-around justify-space-around row wrap>
              <template v-for="main in main3.items">
                <v-flex d-flex xs12 s12 md4 :key="main.id">
                  <v-card class="transparent elevation-5">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="orange--text">{{ main.icon }}</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">{{ $t(main.title) }}</div>
                    </v-card-title>
                    <v-card-text>{{ $t(main.text) }}</v-card-text>
                  </v-card>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <!-- Call to Action -->
    <section>
      <v-parallax :src="require('../assets/packageman2.png')" height="380">
        <v-layout column align-center justify-center>
          <div class="headline orange--text mb-3 text-xs-center card-padding">{{ $t('home.cta_headline') }}</div>
          <span class="white--text card-padding">{{ $t('home.cta_subheading') }}</span>
          <v-btn
            class="orange mt-5"
            dark
            large
            :to="$i18nRoute({ name: 'Community' })"
          >
            {{ $t('home.cta_button') }}
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <!-- Info & Contact -->
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex d-flex xs12 sm4>
            <v-card class="elevation-5 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">{{ $t('home.comp_headline') }}</div>
              </v-card-title>
              <v-card-text>
                {{ $t('home.comp_text') }}
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-5 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">{{ $t('home.comp_cont_headline') }}</div>
              </v-card-title>
              <v-card-text>
                {{ $t('home.comp_cont_text') }}
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="orange--text">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>777-867-5309</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="orange--text">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Chicago, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="orange--text">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
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
        offset: 100
      }
    }
  }
}
</script>

<style>
</style>
