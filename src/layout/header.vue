<template>
	<div class="v-header">
		<div class="v-header-logo" style="width:220px">
			<img src="http://work.it.hucais.com/Skin/U7/U7_S1/images/logo_S.png" alt="" srcset="" />
			<div class="v-header-title">中后台模板</div>
		</div>
		<div class="v-header-nav">
			<el-button
				class="v-sider-trigger"
				@click="triggerSider"
				type="text"
				:icon="!store.getters.collapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
			></el-button>
			<Menu v-if="!isShowASide" mode="horizontal" />
		</div>
		<div class="v-header-setting">
			<el-avatar
				size="small"
				style="margin-right:10px;"
				src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
			></el-avatar>
			<el-dropdown :hide-on-click="false" @command="handleCommand">
				<span class="el-dropdown-link"> admin <i class="el-icon-caret-bottom el-icon--right"></i> </span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="setting" icon="el-icon-user-solid">个人设置</el-dropdown-item>
					<el-dropdown-item command="tenant" icon="el-icon-s-custom">切换租户</el-dropdown-item>
					<el-dropdown-item command="logout" icon="el-icon-s-tools" divided>退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api';
import { useStore } from '../utils/useStore';
import Menu from './menu';
import { MENU_TYPE } from '../config';
export default {
	components: { Menu },
	setup() {
		const store = useStore();
		const state = reactive({
			isShowASide: MENU_TYPE === 'aside',
		});
		const triggerSider = () => {
			store.commit('SET_COLLAPSE', !store.getters.collapse);
		};
		const handleCommand = async command => {
			switch (command) {
				case 'logout':
					store.dispatch('user/logout').then(isLogout => {
						if (isLogout) window.location.href = location.origin + '/login';
					});
					break;

				default:
					console.log(123);

					break;
			}
		};
		return {
			...toRefs(state),
			triggerSider,
			handleCommand,
			store,
		};
	},
};
</script>

<style lang="less" scoped>
.v-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	&-nav {
		text-align: left;
		width: calc(100% - 420px);
	}
	&-setting {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 200px;
		text-align: right;
	}
	&-logo {
		width: 220px;
		line-height: 60px;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	&-title {
		color: #515a6e;
		height: 25px;
		line-height: 25px;
		padding-left: 15px;
		border-left: 1px solid #ebedee;
		margin-left: 15px;
	}
	.v-sider-trigger {
		font-size: 26px;
		margin: 0 15px;
	}
}
</style>
