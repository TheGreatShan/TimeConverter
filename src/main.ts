import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MurasHeader from './components/Header.vue'
import router from './router'
import NavbarVue from './components/Navbar.vue'


const app = createApp(App)
app.use(router)

app.component('MurasHeader', MurasHeader)
app.component('Navbar', NavbarVue)

app.mount('#app')
