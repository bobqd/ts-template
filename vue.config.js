module.exports = {
	devServer: {
		port: 80,
		disableHostCheck: true,
	},
	transpileDependencies: ['element-ui', '@tiger/form', '@tiger/v-table'],
	configureWebpack: config => {
		// config.entry.app = ["babel-polyfill", "./src/main.ts"];
		config.devtool = 'source-map';
	},
	chainWebpack(config) {
		// 在chainWebpack中添加下面的代码
		config.entry('main').add('babel-polyfill'); // main是入口js文件
	},
};
