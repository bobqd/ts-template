<template>
	<div>
		<HcVSearchbar v-model="actionParams" pageKey="pageNo" @query="params => $refs['table'].remoteData(params)">
			<!--必须通过scopeSlot 传入表单项目-->
			<template v-slot:default>
				<el-form-item label="姓名">
					<el-input v-model="actionParams.name" />
				</el-form-item>
			</template>
		</HcVSearchbar>
		<HcVTable :columns="columns" :actionParams="actionParams" :action="loadData" ref="table" />
	</div>
</template>

<script>
export default {
	name: 'demo1',
	data() {
		this.columns = [
			{
				prop: 'date',
				label: '日期',
				width: 120,
			},
			{
				prop: 'name',
				label: '姓名',
				width: 90,
			},
			{
				prop: 'address',
				label: '地址',
			},
		];
		return {
			actionParams: {
				name: '',
			},
		};
	},
	mounted() {
		console.log(this.$refs.table);
	},
	methods: {
		loadData(params) {
			return this.$store.dispatch('crud/post', {
				api: '//192.172.9.142:3000/mock/8/text/user/list',
				params,
			});
		},
	},
};
</script>
