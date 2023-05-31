// import { createApp } from 'vue';
import './style.css';
import { createApp } from 'vue';
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./styles/common.scss"
import App from './App.vue'
import store from '../src/store'
import 'virtual:svg-icons-register'
import componentList from './components';
// import axios from './http/axios';

const app = createApp(App); 
app.use(router)
app.use(ElementPlus)
app.use(store)
app.use(componentList)
// app.use(axios)
app.mount("#app")




