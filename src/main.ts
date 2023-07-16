import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark-vars.less'
import './style.less'
import { createApp } from 'vue'
import pinia from './stores'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
