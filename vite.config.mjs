// Plugins
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Fonts from 'unplugin-fonts/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'
import mkcert from 'vite-plugin-mkcert'
import federation from '@originjs/vite-plugin-federation'
import graphql from '@rollup/plugin-graphql'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import configPWA from './config.pwa'
import configFederation from './config.federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    graphql(),
    Layouts(),
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss'
      }
    }),
    Components(),
    Fonts({
      google: {
        families: [
          {
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900'
          }
        ]
      }
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    }),
    VitePWA(configPWA),
    mkcert(),
    federation(configFederation)
  ],
  build: {
    target: 'esnext',
    assetsInlineLimit: 40960,
    minify: false,
    cssCodeSplit: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false
      }
    }
  },
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
  },
  server: {
    https: true,
    host: true,
    port: 5005,
    strictPort: true,
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204
    }
  }
})
