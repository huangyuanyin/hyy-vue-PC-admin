import { ref, computed, reactive } from 'vue'

export function useTargetIndex(initialIndex) {
	const targetIndex = ref(initialIndex)

	function setTargetIndex(newIndex) {
		targetIndex.value = Number(newIndex)
		console.log(targetIndex.value)
	}

	return [targetIndex, setTargetIndex]
}

export function useRightListData(initialIndex, checkedData) {
	const rightListData = ref(initialIndex)

	function addRightListData(newData) { // [checkbox, checkbox]
		rightListData.value = [...rightListData.value, ...newData]

		checkedData.left = [] // 清空左侧容器
	}

	function removeRightListData(newData) { // [checkbox, checkbox]
		newData.forEach(newItem => {
			rightListData.value = rightListData.value.filter(item => item.id !== newItem.id)
		});

		checkedData.right = [] // 清空右侧容器
	}
	return [rightListData, addRightListData, removeRightListData]
}

export function useCheckedData() {
	const checkedData = reactive({
		left: [],
		right: []
	})
	function addCheckData(leftOrRight, item) {
		switch (leftOrRight) {
			case 'left':
				checkedData.left.push(item)
				break;
			case 'right':
				checkedData.right.push(item)
			default:
				break;
		}
	}
	function removeCheckedData(leftOrRight, id) {
		switch (leftOrRight) {
			case 'left':
				checkedData.left = checkedData.left.filter(item => item.id !== id)
				break;
			case 'right':
				checkedData.right = checkedData.right.filter(item => item.id !== id)
			default:
				break;
		}
	}
	return [checkedData, addCheckData, removeCheckedData]
}

// 计算属性
export function useComputedData(data, targetIndex, rightListData, checkedData) {
	const leftTitle = computed(() => data[targetIndex.value].title);

	const leftListData = computed(() => {
		const { data: currentData } = data[targetIndex.value]

		return currentData.filter((item) => {
			if (!rightListData.value.find(({ id }) => item.id === id)) {
				return item
			}
		})
	});

	const transferButtonDisabled = computed(() => (
		{
			left: checkedData.right.length === 0,
			right: checkedData.left.length === 0
		}
	))

	return {
		leftTitle, leftListData, transferButtonDisabled
	}
}