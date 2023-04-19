import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MurasHeader from './components/Header.vue'


const app = createApp(App)
app.component('MurasHeader', MurasHeader)
app.mount('#app')
