import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.css'
import './styles/element.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

const app = createApp(App)

const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
