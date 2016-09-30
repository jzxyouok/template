import Vue from 'vue';
import FastClick from 'fastclick';
import { sync } from 'vuex-router-sync';

import App from './App';
import store from './store';
import router from './router';

sync(store, router);
FastClick.attach(document.body);

const app = new Vue({
  router,
  store,
  render: h => h(App),
});

export { app, router, store };
