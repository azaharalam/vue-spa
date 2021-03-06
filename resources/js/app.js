require('./bootstrap');
window.Vue = require('vue');

import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import {routes} from './routes';
Vue.component('form-component', require('./components/form').default);
Vue.use(VueRouter);
Vue.prototype.axios = axios;

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
