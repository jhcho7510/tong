import { createApp } from 'vue'
import App from './App.vue'
//import router from './router'
import { store } from "./store"; // store 등록!
import gloablVer from "./globalver"; //global 변수 추가
createApp(App).use(store, gloablVer, {render : h => h(App)}).mount('#app')
