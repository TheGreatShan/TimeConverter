import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MurasHeader from './components/Header.vue'
import { router } from './router'


const app = createApp(App)
app.use(router)
app.component('MurasHeader', MurasHeader)
app.mount('#app')
