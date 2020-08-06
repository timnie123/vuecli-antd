import Vue from 'vue';
// 时间处理类库
import moment from 'moment';
import 'moment/locale/zh-hk';
import App from './App.vue';
import router from './router';
import store from './store';

import './filters/filter';

import '@/assets/css/normalize.css';
import '@/assets/css/base.scss';

Vue.prototype.$moment = moment;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
