/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import apolloClient from './apollo'
import VueApexCharts from 'vue3-apexcharts'

export function registerPlugins(app) {
  app.use(vuetify).use(router).use(pinia).use(apolloClient).use(VueApexCharts)
}
