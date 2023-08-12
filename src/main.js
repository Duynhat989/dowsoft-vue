import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App)

.use(router)
.use(Notifications)

app.mount('#app')
