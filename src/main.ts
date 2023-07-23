import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.css'
import './styles/element.css'
import { createApp } from 'vue'
import pinia from './stores'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
