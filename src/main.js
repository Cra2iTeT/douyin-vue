import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueVideoPlayer from 'vue-video-player'

createApp(App).use(store).use(router).use(router).use(vueVideoPlayer).mount('#app')
