import Vue from 'vue'
import App from './App.vue'

// 引入elementUi
import ElementUI from 'element-ui';
// 引入elementUi css
import 'element-ui/lib/theme-chalk/index.css';
// 安装到vue应用中
Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
