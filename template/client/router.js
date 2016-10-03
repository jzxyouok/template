import Vue from 'vue';
import VueRouter from 'vue-router';

// import { Home, NotFound } from 'views';

Vue.use(VueRouter);

// 引入页面
// const Home = r => require.ensure([], () => r(require('views/Home')), 'home');
// const NotFound = r => require.ensure([], () => r(require('views/NotFound')), 'NotFound');
// const Home = resolve => require(['views/Home'], resolve);
// const NotFound = resolve => require(['views/NotFound'], resolve);
const Home = (resolve) => {
  require.ensure(['views/Home'], () => {
    resolve(require('views/Home'));
  });
};

const NotFound = (resolve) => {
  require.ensure(['views/NotFound'], () => {
    resolve(require('views/NotFound'));
  });
};

const routes = [{
  path: '/',
  name: '首页',
  component: Home,
}, {
  path: '/404',
  name: '404',
  component: NotFound,
}];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

router.afterEach((route) => {
  if (route) {
    document.title = route.name;
  } else {
    document.title = '首页';
  }
});

export default router;
