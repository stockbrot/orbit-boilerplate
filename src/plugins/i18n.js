import VueI18n from 'vue-i18n'
import Vue from 'vue'
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from '@/constants/trans'
import de from '@/lang/de.json'

Vue.use(VueI18n)
export const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE, // set locale
  fallbackLocale: FALLBACK_LANGUAGE,
  messages: { de }// set locale messages
})
