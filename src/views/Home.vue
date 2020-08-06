<template>
	<div class="home">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<MdInput name="title" v-model="text" placeholder="输入标题"></MdInput>
		<md-input name="title" id="123" v-model="text" placeholder="输入标题">
			标题
		</md-input>

		<el-button v-waves type="primary">水波纹效果</el-button>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import MdInput from '@/components/MdInput';

export default {
	name: 'Home',
	components: {
		HelloWorld,
		MdInput,
	},
	data() {
		return {
			text: '',
		};
	},
};
</script>
