import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import axios from './plugins/axios'

import './assets/css/main.scss'

import Alert from './components/ui/Alert.vue'

const app = createApp(App)
app.use(axios, {
    baseUrl: 'https://inventoryapi.cordmarston.com/api/',
})
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


app.use(pinia)
app.use(router)

app.component('Alert', Alert)

app.mount('#app')