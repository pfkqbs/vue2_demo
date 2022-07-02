import { createApp } from 'vue'  //导入vue
import ElementPlus from 'element-plus'//导入element-plus
import 'element-plus/dist/index.css'//导入element-plus  样式

import {createRouter,createWebHashHistory} from 'vue-router'

import App from './App.vue'//导入主组件
// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

// 这里和vue2不同
const app = createApp(App)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
