<template>
	<div>
		<button @click="hhh">hhh</button>
		Login登录页面
	</div>
</template>

<script lang="ts" setup>
import { addCategorys } from "@/api/user.js"
const hhh = async () => {
	await addCategorys().then(aaa => {
		console.log('mockdata', aaa)
	})
}
</script>