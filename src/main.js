/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloCliente from './plugins/apollo'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloCliente)
  },
  render: () => h(App)
})

registerPlugins(app)

app.mount('#app')
