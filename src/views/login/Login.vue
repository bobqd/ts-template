<template>
	<div class="v-login">
		<div class="v-login-con">
			<el-card class="box-card" header="欢迎登录">
				<v-form ref="form" :options="options" v-model="model">
					<template slot="footer">
						<el-button type="primary" @click="submit(model)">登录</el-button>
					</template>
				</v-form>
			</el-card>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from '@vue/composition-api';
import { useStore } from '@/utils/useStore';
export default defineComponent({
	props: {
		name: String,
	},
	setup(props, { root: { $router, $route } }) {
		const store = useStore();
		const form = ref();
		const { code } = $route.query;
		if (code) {
			// 如果存在 code 则用code 换取code
			store.dispatch('user/oAuthLogin', { code });
		}
		// 登陆
		const submit = async (mode: { [key: string]: unknown }) => {
			const validate = await form.value.validateForm();
			if (!validate) return;
			await store.dispatch('user/login', mode);
			$router.push({
				name: 'Home',
			});
		};

		const state = reactive({
			model: {
				username: 'sjl',
				password: '123456',
			},
			submit,
			options: {
				labelWidth: '0px',
				columns: [
					{
						title: '',
						type: 'input',
						data: 'username',
						props: {
							placeholder: '请输入用户名/手机号/邮箱',
						},
						rules: [{ required: true, message: '请输入用户名/手机号/邮箱', trigger: 'blur' }],
						span: 24,
					},
					{
						title: '',
						type: 'input',
						data: 'password',
						rules: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
						props: {
							placeholder: '请输入密码',
							showPassword: true,
						},
						span: 24,
					},
				],
			},
		});

		return {
			form,
			...toRefs(state),
		};
	},
});
</script>
<style lang="less">
.v-login {
	width: 100%;
	height: 100%;
	background-image: url('../../assets/images/login-bg.jpg');
	background-size: cover;
	background-position: center;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	&-con {
		width: 348px;
	}
	.box-card {
		text-align: left;
	}

	.el-button {
		width: 100%;
	}
}
</style>
