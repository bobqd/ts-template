<template>
	<div>
		<v-form :options="options" v-model="model"></v-form>
	</div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
import { useStore } from '@/utils/useStore';
export default defineComponent({
	props: {
		name: String,
	},
	setup(props) {
		const store = useStore();

		const submit = async () => {
			const res = await store.dispatch('crud/get', {
				api: '/api/getMethod',
				params: { type: 1 },
			});
			console.log(res);
		};
		const state = reactive({
			model: {},
			options: {
				submit,
				columns: [
					{
						title: '用户名',
						type: 'input',
						data: 'username',
					},
				],
			},
		});

		return {
			msg: `hello ${props.name}`,
			...toRefs(state),
		};
	},
});
</script>
