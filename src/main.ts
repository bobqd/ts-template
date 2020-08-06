// import 'babel-polyfill';

import Vue, { DirectiveOptions } from 'vue';
import API from '@vue/composition-api';
import ElementUI from 'element-ui';
import Component from 'vue-class-component';
import VForm from '@tiger/form';
import VTable from '@tiger/v-table';

import '@/assets/icons/ionicons.less';

import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import router from './router';
import store from './store';
import * as directives from '@/directives';
import * as filters from '@/filters';

// 用于 在ts环境 使用 composition-api
Component.registerHooks(['setup', 'beforeRouteUpdate', 'beforeRouteEnter', 'beforeRouteLeave']);

// 注册全局 directives
Object.keys(directives).forEach(key => {
	Vue.directive(key, (directives as { [key: string]: DirectiveOptions })[key]);
});

// 注册全局 filter
Object.keys(filters).forEach(key => {
	Vue.filter(key, (filters as { [key: string]: Function })[key]);
});

Vue.use(API);
Vue.use(VTable, {
	// 以下为默认值
	pageKey: 'current', // 设定请求页码参数的key值
	pageSizeKey: 'size', // 设定请求页数参数的key值
	/**
	 * 处理请求函数返回的响应数据
	 * @param {Object} res - action函数的返回内容
	 * @param {Boolean} paging - 用以区分带分页的数据与列表数据
	 * @return {Object} - 根据响应数据 手动返回数据对象{ page[Number]: 页面, total[Number]: 总条数, data[Array]: 传给表格的列表数据 }
	 **/
	remotePipe(res: any, paging: boolean) {
		console.log(res, paging);

		// （示例）需根据实际响应数据返回
		if (paging) {
			const { current: page, total, records: data } = res.data;
			return {
				page,
				total,
				data,
			};
		} else {
			return res.result;
		}
	},
});
Vue.use(ElementUI, {
	size: 'small',
});
Vue.use(VForm, {
	lab: 'element-ui', // 如果项目中使用的是iview，则更改为lab: 'iview'
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
