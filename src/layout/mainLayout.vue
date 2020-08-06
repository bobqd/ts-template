<template>
	<el-container>
		<el-header>
			<Header />
		</el-header>
		<el-container>
			<el-aside v-if="isShowASide" :style="{ width: !$store.getters.collapse ? '220px' : '64px' }">
				<Menu mode="vertical" :collapse="$store.getters.collapse" />
			</el-aside>
			<el-main>
				<transition name="fade-transform" mode="out-in">
					<keep-alive>
						<router-view />
					</keep-alive>
				</transition>
			</el-main>
		</el-container>
		<BackToTop />
	</el-container>
</template>
<script>
import { reactive, toRefs } from '@vue/composition-api';
import { useStore } from '@/utils/useStore';
import { MENU_TYPE } from '@/config';
import Header from './header.vue';
import Menu from './menu';
import BackToTop from '@/components/BackToTop/index.vue';
export default {
	components: { Header, Menu, BackToTop },
	setup() {
		const store = useStore();
		const state = reactive({
			isShowASide: MENU_TYPE === 'aside',
		});

		return {
			...toRefs(state),
		};
	},
};
</script>
<style lang="less" scoped>
.el-header {
	background-color: #fff;
	color: #333;
	line-height: 60px;
	padding-left: 0;
	border-bottom: solid 1px #e6e6e6;
	color: #909399;
}

.el-aside {
	color: #333;
}
</style>
