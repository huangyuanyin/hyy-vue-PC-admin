<template>
	<div v-for="item of data" :key="item.id" :class="['list-item', item.disabled ? 'disabled' : '']">
		<input type="checkbox" :disabled="item.disabled" :id="'__checkbox__' + item.id"
			@click="checkBoxClick($event.target.checked, leftOrRight, item)">
		<label :for="'__checkbox__' + item.id">{{ item.phone_name }}</label>
	</div>
</template>

<script setup>
const props = defineProps({
	data: {
		type: Array,
		default: () => []
	},
	leftOrRight: {
		type: String,
		validator(value) {
			return ['left', 'right'].includes(value)
		}
	}
});

const emit = defineEmits(['checkBoxClick'])

const checkBoxClick = (checked, leftOrRight, item) => {
	emit('checkBoxClick', checked, leftOrRight, item)
}
</script>

<style lang="scss" scoped>
.list-item {
	display: flex;
	align-items: center;
	height: 30px;
	font-size: 12px;
	color: #666;

	&.disabled {
		opacity: .6;
	}
}
</style>