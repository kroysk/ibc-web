import './assets/input.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'  
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
import router from './router'

library.add(fas)
library.add(fab)
const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
