<template>
	<div class="hooks-one">
		<p>count is {{ count }}</p>
		<p>plusOne is {{ plusOne }}</p>
		<button @click="increment">count++</button>
		<v-form :options="options" v-model="model"></v-form>
	</div>
</template>
<script lang="ts">
import { ref, computed, watch, onMounted, Ref, defineComponent, reactive, toRefs } from '@vue/composition-api';
import { useStore } from '../utils/useStore';
import { LoginToken } from '@/api';
export default defineComponent({
	props: {
		name: String,
	},
	setup(props) {
		const store = useStore();
		const count: Ref<number> = ref(0);
		// computed
		const plusOne = computed(() => count.value + 1);
		// method
		const increment = () => {
			count.value++;
		};
		// watch
		watch(
			() => count.value * 2,
			val => {
				console.log(`count * 2 is ${val}`);
				console.log(store.getters.collapse);
			},
		);

		onMounted(() => {
			console.log('onMounted');
		});

		const submit = async () => {
			const res = await store.dispatch('crud/get', {
				api: LoginToken,
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
			count,
			plusOne,
			increment,
			msg: `hello ${props.name}`,
			...toRefs(state),
		};
	},
});
</script>
