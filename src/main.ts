import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import './style/reset.scss'

// import 'normalize.css'
// @ts-ignore
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

// !!! NECESSARY
import './style.css'

const pinia = createPinia()
const app = createApp(App)

// google login setting
// https://www.youtube.com/watch?v=NPQCrFLako8
const CLIENT_ID = '868894515836-rp3a9n3ngpn1089i76c50vkjr8dr630p.apps.googleusercontent.com'
app.use(vue3GoogleLogin, {
  clientId: CLIENT_ID
})

app.use(pinia)
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
