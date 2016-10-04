import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import Element from 'element-ui';
import 'normalize.css';
import 'element-ui/lib/theme-default/index.css';

import App from './App';
import store from './store';
import router from './router';


Vue.use(Element);
sync(store, router);

const app = new Vue({
  router,
  store,
  ...App,
});

export { app, router, store };
