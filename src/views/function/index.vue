<template>
	<div>
		<Transfer :data="allData.data" right-title="已选择机型"></Transfer>
	</div>
</template>

<script lang="ts" setup >
import { ref, reactive, nextTick, onMounted } from 'vue'
import { getTransferDataApi } from '../../api/hyyUIData.js'

let allData = reactive({
	data: []
})

const getTransferData = async () => {
	await getTransferDataApi().then(res => {
		if (res.code === 200) {
			allData.data = res.data
			console.log("res", allData.data)
		}
	})
}

getTransferData()

</script>