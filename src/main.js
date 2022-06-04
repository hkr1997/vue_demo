import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
//引入路由
import router from './router';

Vue.use(ElementUI);
new Vue({
  //Element Ui
  el: '#app',
  render: h => h(App),
  //注册路由
  router:router,
}).$mount('#app')
