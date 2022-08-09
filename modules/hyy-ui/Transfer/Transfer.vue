<template >
	<div>
		<div>
			<Selector :data="options" @select-change="setTargetIndex" />
		</div>
		<div class="transfer">
			<div class="box left-list" @dragover.prevent @drop="removeRightListData([dragedItem])">
				<ListTitle :title="leftTitle" />
				<div>
					<ListItem :data="leftListData" left-or-right="left" @check-box-click="setCheckedData" @drag-item="setDragedItem"/>
				</div>
			</div>
			<ButtonGroup :left-button-disabled="transferButtonDisabled.left"
				:right-button-disabled="transferButtonDisabled.right"
				@left-button-click="removeRightListData(checkedData.right)"
				@right-button-click="addRightListData(checkedData.left)" />
			<div class="box right-list" @dragover.prevent @drop="addRightListData([dragedItem])">
				<ListTitle :title="rightTitle" />
				<div>
					<ListItem :data="rightListData" left-or-right="right" @check-box-click="setCheckedData" @drag-item="setDragedItem"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Selector from './components/Selector.vue';
import ListTitle from './components/ListTitle.vue'
import ButtonGroup from './components/ButtonGroup.vue';
import ListItem from './components/ListItem.vue';

import propsDefination from './extends/props'
import { useTargetIndex, useComputedData, useRightListData, useCheckedData, useDragedItem } from './extends/hooks'

const props = defineProps(propsDefination)
const options = props.data.map(({ title }) => title)

const [targetIndex, setTargetIndex] = useTargetIndex(0);

const [checkedData, addCheckData, removeCheckedData] = useCheckedData()

const [rightListData, addRightListData, removeRightListData] = useRightListData([], checkedData)

const [dragedItem, setDragedItem] = useDragedItem()

const { leftTitle, leftListData, transferButtonDisabled } = useComputedData(props.data, targetIndex, rightListData, checkedData)

const setCheckedData = (checked, leftOrRight, item) => {
	checked ? addCheckData(leftOrRight, item) : removeCheckedData(leftOrRight, item.id)
}

</script>

<style lang="scss" scoped>
.transfer {
	display: flex;
	flex-direction: row;
	width: 360px;
	height: 300px;
	border: 1px solid #ddd;

	.box {
		width: 120px;
		height: 100%;

		.list-title {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 38px;
			font-weight: normal;
			margin: 0;
			color: #666;
			border-bottom: 1px solid #ddd;
			background-color: #efefef;
			font-size: 14px;
		}

		&.button-group {
			display: flex;
			justify-content: center;
			align-items: center;
			border-left: 1px solid #ddd;
			border-right: 1px solid #ddd;

			button {
				display: flex;
				justify-content: center;
				align-items: center;
				border: none;
				outline: none;
				width: 38px;
				height: 38px;
				background-color: orange;
				color: #fff;
				border-radius: 5px;

				&:disabled {
					opacity: .6;
				}

				&:nth-child(2) {
					margin-left: 10px;
				}
			}
		}
	}
}
</style>