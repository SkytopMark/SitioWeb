import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { useI18n } from './i18n'

document.documentElement.lang = useI18n().getLanguage()

createApp(App).mount('#app')
