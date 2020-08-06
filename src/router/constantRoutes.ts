import { RouteConfig } from 'vue-router';
import MainLayout from '../layout/mainLayout.vue';
/**
 * 所有权限通用路由表
 * 如首页和登录页和一些不用权限的公用页面
 */
export const constantRoutes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Layout',
		meta: {
			name: '首页',
			icon: 'md-home',
		},
		component: MainLayout,
		children: [
			{
				path: 'test',
				name: 'Test',
				meta: {
					name: 'Test',
				},
				component: () => import('../components/Test.vue'),
			},
			{
				path: 'home',
				name: 'Home',
				meta: {
					name: '首页',
				},
				component: () => import('../views/Home.vue'),
			},
		],
	},
	{
		path: '/form',
		name: 'Form',
		meta: {
			name: 'Form 组件',
			icon: 'md-code',
		},
		component: MainLayout,
		children: [
			{
				path: 'base',
				name: 'FormBase',
				meta: {
					name: 'Form Base',
				},
				component: () => import('@/views/form/BaseForm.vue'),
			},
		],
	},
	{
		path: '/table',
		name: 'Table',
		meta: {
			name: 'Table 组件',
			icon: 'md-grid',
		},
		component: MainLayout,
		children: [
			{
				path: 'base',
				name: 'base',
				meta: {
					name: 'Table Base',
				},
				component: () => import('@/views/table/BaseTable.vue'),
			},
		],
	},
	{
		path: '/excel',
		name: 'excel',
		meta: {
			name: 'Excel',
			icon: 'md-document',
		},
		component: MainLayout,
		children: [
			{
				path: 'export',
				name: 'export',
				meta: {
					name: '导出Excel',
				},
				component: () => import('@/views/excel/export-excel.vue'),
			},
			{
				path: 'upload',
				name: 'upload',
				meta: {
					name: '导入Excel',
				},
				component: () => import('@/views/excel/upload-excel.vue'),
			},
			{
				path: 'select',
				name: 'select',
				meta: {
					name: '选择导出',
				},
				component: () => import('@/views/excel/select-excel.vue'),
			},
			{
				path: 'merge',
				name: 'merge',
				meta: {
					name: '多表头导出',
				},
				component: () => import('@/views/excel/merge-header.vue'),
			},
			{
				path: 'zip',
				name: 'zip',
				meta: {
					name: '导出Zip',
				},
				component: () => import('@/views/zip/index.vue'),
			},
		],
	},
	{
		path: '/icons',
		name: 'Icons',
		meta: {
			name: '图标库',
			icon: 'ios-analytics',
		},
		component: MainLayout,
		children: [
			{
				path: 'list',
				name: 'IconList',
				meta: {
					name: '图标列表',
				},
				component: () => import('@/views/icon/Icons.vue'),
			},
		],
	},
	{
		path: '/login',
		name: 'Login',
		meta: {
			hideInMenu: true,
		},
		component: () => import('@/views/login/Login.vue'),
	},
	{
		path: '/401',
		name: 'error_401',
		meta: {
			hideInMenu: true,
		},
		component: () => import('@/views/error-page/401.vue'),
	},
	{
		path: '/500',
		name: 'error_500',
		meta: {
			hideInMenu: true,
		},
		component: () => import('@/views/error-page/500.vue'),
	},
	{
		path: '/404',
		name: 'error_404',
		meta: {
			hideInMenu: true,
		},
		component: () => import('@/views/error-page/404.vue'),
	},
	{
		path: '/403',
		name: 'error_403',
		meta: {
			hideInMenu: true,
		},
		component: () => import('@/views/error-page/403.vue'),
	},
];
