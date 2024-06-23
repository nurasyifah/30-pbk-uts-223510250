import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import router from "./router";
import { createPinia } from "pinia"

const pinia= createPinia()
const MyApp = createApp(App)
MyApp.use(router);
MyApp.use(pinia);
MyApp.use(Quasar, {
    plugins: {},
  })
MyApp.mount('#app')