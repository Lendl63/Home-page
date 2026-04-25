import { createApp } from 'vue'
import App from './App.vue'
import './main.css' //Import of style CSS file
import { vScrollIn } from './directives/vScrollIn'

const app = createApp(App)
app.directive('scroll-in', vScrollIn)
app.mount('#app')
