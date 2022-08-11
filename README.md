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

[
  {
    title: '华为',
    data: [
      {
        id: 1,
        phone_name: 'Mate 40 Pro',
        disabled: false
      },
      {
        id: 2,
        phone_name: 'P40 Pro',
        disabled: true
      },
      {
        id: 3,
        phone_name: 'P50 Pro',
        disabled: false
      },
      {
        id: 4,
        phone_name: 'Mate Xs 2',
        disabled: false
      }
    ]
  },
  {
    title: '小米',
    data: [
      {
        id: 5,
        phone_name: '小米 12 Pro',
        disabled: true
      },
      {
        id: 6,
        phone_name: '小米 12s Ultra',
        disabled: true
      },
      {
        id: 7,
        phone_name: '小米 P50 Pro',
        disabled: false
      },
      {
        id: 8,
        phone_name: '小米 Mate Xs 2',
        disabled: false
      }
    ]
  },
  {
    title: 'iPhone',
    data: [
      {
        id: 9,
        phone_name: 'iPhone 13 mini',
        disabled: false
      },
      {
        id: 10,
        phone_name: 'iPhone 13',
        disabled: true
      },
      {
        id: 11,
        phone_name: 'iPhone 13 Pro',
        disabled: false
      },
      {
        id: 12,
        phone_name: 'iPhone 13 Pro Max',
        disabled: false
      }
    ]
  }
]