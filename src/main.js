import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA0igZXf-8Sz-In-GXz3_DxlCV9X1JoUj8',
  },
})

app.mount('#app')