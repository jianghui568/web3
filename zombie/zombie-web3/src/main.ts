import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index.ts'

createApp(App)
    .use(Router) // 使用 vue-router
    .mount('#app');
