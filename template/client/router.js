import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入页面
// const Home = r => require.ensure([], () => r(require('views/Home')), 'home');
const Home = resolve => require(['views/Home'], resolve);


export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
});
