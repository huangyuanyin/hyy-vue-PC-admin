import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

// 组件库 应该作为一个插件 可以在main.js中直接使用
/*
	第一种方式: 全部导入(组件库中注册所有的组件): import hyyUI from '../modules/hyy-ui' 同时 在组件库中全部注册
	第二种方式: 按需导入(组件库中在各个组件文件夹下注册当前组件) import Transfer from '../modules/hyy-ui/Transfer' 同时在当前组件的文件夹下新建index.js文件中注册
	第三种方式: 单独在APP.vue中导入组件

*/

// import hyyUI from '../modules/hyy-ui'
// createApp(App).use(hyyUI).mount('#app')

import Transfer from '../modules/hyy-ui/Transfer'

const app = createApp(App)

app.use(router)
app.use(Transfer)

app.mount('#app')

// createApp(App).mount('#app')