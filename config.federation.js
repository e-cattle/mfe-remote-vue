export default {
  name: 'remote_app',
  filename: 'remoteEntry.js',
  exposes: {
    './ComponentApp1': './src/pages/index.vue'
  },
  shared: [
    'vue',
    'vuetify',
    '@apollo/client',
    '@vue/apollo-composable',
    'axios',
    'core-js',
    'graphql',
    'graphql-tag',
    'pinia',
    'vue-router'
  ]
}
