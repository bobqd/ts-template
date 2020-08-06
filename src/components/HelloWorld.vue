<template>
	<div class="hello">
		<el-button>填充数据</el-button>
		<v-form :options="options" v-model="model">
			<template slot="button-append">
				<!-- <el-button @click="handlerFillData">填充数据</el-button> -->
			</template>
		</v-form>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {
	@Prop() private msg!: string;
	private model: object = {};
	private options: object = {
		submit: async () => {
			const res = await this.$store.dispatch('crud/get', {
				api: '/api/getMethod',
				params: { type: 1 },
				headers: {},
			});
			console.log(res);
		},
		columns: [
			{
				title: '用户名',
				type: 'input',
				data: 'username',
			},
		],
	};
}
</script>

<style scoped lang="less">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
