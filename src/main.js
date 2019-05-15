import Vue from 'vue'
import App from './App'
import router from './router'
import { i18n } from '@/plugins/i18n'
import { Trans } from './plugins/Translation'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'font-awesome/css/font-awesome.css'
import 'typeface-quicksand/index.css'
import 'typeface-anton/index.css'
import 'typeface-catamaran/index.css'
import '../src/assets/css/animate.css'
import '../src/assets/css/main.css'

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  i18n
})
