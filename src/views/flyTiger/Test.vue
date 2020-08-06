<template>
	<div style="text-align: left">
		<HcVSearchbar v-model="actionParams" pageKey="pageNo" @query="params => $refs['table'].remoteData(params)">
			<!--必须通过scopeSlot 传入表单项目-->
			<template v-slot:default>
				<el-form-item label="姓名">
					<el-input v-model="actionParams.name" />
				</el-form-item>
			</template>
		</HcVSearchbar>
		<div style="text-align: left;margin-bottom: 10px;">
			<el-button @click="drawer = true" type="primary" size="mini">新增</el-button>
		</div>
		<HcVTable :columns="columns" :actionParams="actionParams" :action="loadData" ref="table">
			<template v-slot:action="{ row }">
				<el-button @click="drawer = true" type="primary" size="mini">编辑</el-button>
				<el-button @click="drawer = true" type="info" size="mini">查看</el-button>
				<el-button @click="del(row)" type="danger" size="mini">刪除</el-button>
			</template>
		</HcVTable>
		<el-drawer title="我是标题" :visible.sync="drawer">
			<v-form :options="options" v-model="model"></v-form>
		</el-drawer>
	</div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from '@vue/composition-api';
import { useStore } from '@/utils/useStore';
import { Message } from 'element-ui';
const columns = [
	{
		prop: 'userName',
		label: '姓名',
		width: 180,
	},
	{
		prop: 'nickName',
		label: '昵称',
	},
	{
		prop: 'birthday',
		label: '生日',
		width: 120,
	},
	{
		prop: 'action',
		label: '操作',
		width: 220,
	},
];
const formColumns = [
	{
		title: '用户名',
		type: 'input',
		data: 'userName',
	},
];
export default defineComponent({
	props: {},
	setup() {
		const store = useStore();
		const table = ref();
		const submit = async (model: any) => {
			const res = await store.dispatch('crud/post', {
				api: '/PRODUCT895339_flytiger-demo/baseuser/addUser',
				data: model,
			});
			table.value.remoteData();
		};

		const state = reactive({
			columns,
			drawer: false,
			actionParams: {},
			model: {},
			options: {
				columns: formColumns,
				submit,
			},
		});

		const loadData = (params: any) => {
			return store.dispatch('crud/post', {
				api: '/PRODUCT895339_flytiger-demo/baseuser/getUserList',
				data: params,
			});
		};
		const del = async (row: any) => {
			const res = await store.dispatch('crud/delete', {
				api: '/PRODUCT895339_flytiger-demo/baseuser/deleteUser',
				data: { id: row.id },
				type: 'FormDate',
			});
			if (res.code == 0) {
				Message.success('删除成功');
				table.value.remoteData();
			}
		};

		return {
			store,
			loadData,
			del,
			table,
			...toRefs(state),
		};
	},
});
</script>
