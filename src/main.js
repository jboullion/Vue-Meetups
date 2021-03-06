// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import { theme } from './theme'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.filter('formattedDate', DateFilter)

Vue.use(Vuetify, {
  theme: theme
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
