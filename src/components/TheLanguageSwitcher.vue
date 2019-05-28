<template>
  <select
    class="lang-swit title text-uppercase pa-2"
    name="language"
    @change="changeLanguage"
  >
    <option
      v-for="lang in supportedLanguages"
      :key="lang"
      :selected="isCurrentLanguage(lang)"
      class="black--text lang-swit-opt"
      :class="{ 'is-selected': isCurrentLanguage(lang) }"
      :value="lang"
    >
      {{langToWord(lang)}}
    </option>
  </select>
</template>
<script>
import { Trans } from '@/plugins/Translation'

export default {
  computed: {
    supportedLanguages () {
      return Trans.supportedLanguages
    },
    currentLanguage () {
      return Trans.currentLanguage
    }
  },
  methods: {
    langToWord (lang) {
      switch (lang) {
        case 'en':
          return 'English'
        case 'de':
          return 'Deutsch'
      }
    },
    changeLanguage (e) {
      const lang = e.target.value
      const to = this.$router.resolve({ params: { lang } })
      return Trans.changeLanguage(lang).then(() => {
        this.$router.push(to.location)
      })
    },
    isCurrentLanguage (lang) {
      return lang === this.currentLanguage
    }
  }
}
</script>

<style lang="stylus">
.lang-swit-opt
  background-color: grey
.is-selected
  background-color: green
</style>
