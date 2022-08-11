# hyy-vue-PC-admin
vue3.2 + vite PC端

### 引入mock数据
第一步:
npm install mockjs -D
npm install vite-plugin-mock -D
第二步:在根目录下新建mock文件夹,在mock/source/index.ts中 写入相关代码
第三步:开发环境配置,在vite.config.ts中
import { viteMockServe } from 'vite-plugin-mock'
plugins: [
  vue(),
  viteMockServe({ supportTs: false })
],
第四步:在页面中使用

