<template>
	<ul class="icons">
		<li class="icons-item" :title="item" @click="onIconClick(item)" :key="idx" v-for="(item, idx) in selectIcons">
			<Icon :type="item" size="28" />
			<p>{{ item }}</p>
		</li>
	</ul>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
import { useStore } from '@/utils/useStore';
import { Icons, Icon, IconList } from '@/components/Icons';
export default defineComponent({
	props: {},
	components: { Icons, Icon },
	setup() {
		const store = useStore();
		const state = reactive({
			selectIcons: IconList,
		});
		const onIconClick = (item: string) => {
			console.log(item);
		};
		return {
			store,
			onIconClick,
			...toRefs(state),
		};
	},
});
</script>
<style lang="less" scoped>
.icons {
	overflow: auto;
	zoom: 1;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
}

.icons-item {
	margin: 6px;
	width: 120px;
	text-align: center;
	list-style: none;
	cursor: pointer;
	color: #5c6b77;
	transition: all 0.2s ease;
	position: relative;
}

.icons-item p {
	word-break: break-all;
	overflow: hidden;
}
</style>
