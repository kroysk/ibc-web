import './assets/input.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram,  faFacebookF, faYoutube, faXTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
import router from './router'

library.add(faLocationDot)
library.add(faInstagram)
library.add(faFacebookF)
library.add(faYoutube)
library.add(faXTwitter)
library.add(faWhatsapp)
const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
