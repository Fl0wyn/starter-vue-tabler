import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueShowdown } from 'vue-showdown'

import App from './App.vue'
import router from './router'

import '@tabler/core/dist/css/tabler.min.css'
import '@tabler/core/dist/js/tabler.min.js'

const app = createApp(App)

app.component('VueShowdown', VueShowdown)
app.use(createPinia())
app.use(router)

app.mount('#app')
