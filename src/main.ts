import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n/i18n'
import { auth0 } from './config/authConfig'

const app = createApp(App)
app.use(auth0)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
