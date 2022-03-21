import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import store from './store'
import './styles/styles.scss'
import './registerServiceWorker'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(VueGoogleMaps, {
  load: {
    key: '',
  },
})

app.mount('#app')