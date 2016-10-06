import Vue from 'vue';
import MintUI from 'mint-ui';
import FastClick from 'fastclick';
import 'normalize.css';
import 'mint-ui/lib/style.css';
import {
  sync,
}
from 'vuex-router-sync';

import App from './App';
import store from './store';
import router from './router';

Vue.use(MintUI);

sync(store, router);
FastClick.attach(document.body);

const app = new Vue({
  router,
  store,
  render: h => h(App),
});

export {
  app,
  router,
  store,
};
