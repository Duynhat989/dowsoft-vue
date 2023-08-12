import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'
await getlocation()
const app = createApp(App)

.use(router)
.use(Notifications)

app.mount('#app')
async function getlocation(){
    let locations = JSON.parse(localStorage.getItem("locations")) || null;
    if (locations == null) {
      const result = await languagesLocation();
      locations = {
        language: result.country
      };
      localStorage.setItem("locations", JSON.stringify(locations));
    }
}