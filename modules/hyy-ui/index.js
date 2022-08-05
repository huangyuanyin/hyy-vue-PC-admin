import Transfer from './Transfer/Transfer.vue'

const components = {
	Transfer
}

// 全局注册组件库中所有组件
export default {
	install(app) {
		for (let comp in components) {
			app.component(comp, components[comp])
		}
	}
}