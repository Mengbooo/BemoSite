import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import '../src/fonts/font.css'
import App from './App.vue'
import { VueMasonryPlugin } from 'vue-masonry';

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(VueMasonryPlugin);
app.mount('#app')