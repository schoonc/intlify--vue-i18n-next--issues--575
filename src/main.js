import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    legacy: false,
})

createApp(App).use(i18n).mount('#app')
