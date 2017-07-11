import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import faskclick from 'fastclick'
// 主函数加载样式(webpack.base.conf配置了别名)
import 'common/stylus/index.styl'
faskclick.attach(document.body);// body下面的点击事件不会出现300ms延迟
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
   router,
  render: h => h(App)
})
