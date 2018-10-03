import Vue from 'vue';
import App from './App.vue';
import VAnimateCss from 'v-animate-css';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { store } from './store/store.js';
import routes from './routes';

export const bus = new Vue();
export const router = new VueRouter({
     routes: routes,
     mode: 'history'
});

Vue.use(VAnimateCss);

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.directive('rainbow', {  
    bind(el, binding) {
        el.style.color = binding.value;
        el.style.fontWeight = 'bold';
    }
});

Vue.filter('toUppercase', function (value) {
    return value.toUpperCase();
});

new Vue({
    el: '#app',
    store: store,
    router: router,
    render: h => h(App)
})
