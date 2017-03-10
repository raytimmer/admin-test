// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  // NProgress.start();
  if (to.path === '/login') {
    sessionStorage.removeItem('user');
  } else {
    var user = JSON.parse(sessionStorage.getItem('user'));
  }
  if (!user && to.path !== '/login') {
    next({path: '/login'})
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  http: {
    header: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }
})
