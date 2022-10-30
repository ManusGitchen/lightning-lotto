import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import "./assets/_variables.scss";
//import main styles for global scss styling. This small example takes the default vuetify styling.

const app = createApp(App).use(store)
const vuetify = createVuetify({
    components,
    directives,
  }) 
app.use(VueAxios, axios).use(vuetify).use(router)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.mount('#app')
