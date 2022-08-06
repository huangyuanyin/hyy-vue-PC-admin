import { ref, computed } from 'vue'

export function useTargetIndex(initialIndex) {
	const targetIndex = ref(initialIndex)

	function setTargetIndex(newIndex) {
		targetIndex.value = Number(newIndex)
		console.log(targetIndex.value)
	}

	return [targetIndex, setTargetIndex]
}

export function useRightListData(initialIndex) {
	const rightListData = ref(initialIndex)

	function addRightListData(newData) {
		rightListData.value = [...rightListData.value, ...newData]
	}

	function removeRightListData(newData) {
		newData.forEach(newItem => {
			rightListData.value = rightListData.value.filter(item => item.id !== newItem.id)
		});
	}
	return [rightListData, addRightListData, removeRightListData]
}

export function useComputedData(data, targetIndex, rightListData) {
	const leftTitle = computed(() => data[targetIndex.value].title)
	const leftListData = computed(() => {
		const { data: currentData } = data[targetIndex.value]

		return currentData.filter((item) => {
			if (!rightListData.value.find(({ id }) => item.id === id)) {
				return item
			}
		})
	})

	return {
		leftTitle, leftListData
	}
}