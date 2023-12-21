import Vue from 'vue'

// 重置默认样式 reset.css
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

// index.css 设置element-ui组件的样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css
import request from '@/utils/request'

// import 两个作用
// 1.导入某个模块
// 2.直接执行导入的js文件

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false
// 构造函数的原型对象上挂载的方法和属性 都可以被构造函数对应的实例所访问
// 只要是vue实例都可以调用request
Vue.prototype.$request = request

// 固定语法 process.env
// console.log(process.env)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
