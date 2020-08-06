# 虎彩中后台模板

### 特性
- 本模板基于 vue-cli3.0 vue-router+vuex+ts 
- 兼容es6 写法 推荐使用 ts
- 兼容vue3.0 composition-api， vuex 在 composition-api 中请引用 utils/useStore 获取store 数据
- 推荐异步使用 async await ，用同步思维解决异步问题的方案
- 集成 Tiger-Form 组件，结合Form表单编辑器 快速创建页面
- 支持 excel 前端的导入导出 多表头导出、 选择数据导出
- 支持 前端导出zip文件
- Tiger-Table 组件

## 将要实现
- 集成虎彩单点登录
- FlyTiger 授权菜单
- 权限验证
  - 权限指令 (按钮级别)
  - 页面权限
- Tiger-Table 组件
- pdf
- 图表
- Screenfull全屏
- 引导页
- Dashboard
- Clipboard(剪贴复制)
- 编辑器
  - 富文本
  - Markdown
  - JSON 等多格式
- 返回顶部
- 等

## 目录结构
```
|-- .vscode                                         编辑器设置和代码块快捷方式
|-- public
|-- src
   |-- api                                          api 接口
   |-- assets                                       资源文件
   |-- components                                   内置组件
   |-- config                                       项目配置
   |-- directives                                   指令集合
   |-- layout                                       项目布局
   |-- router                                       路由
   |-- store                                        store 数据处理
   |-- utils                                        工具包
   |-- views                                        页面
      |-- error-page                                错误页
         -- 401
         -- 403
         -- 404
         -- 500
      |-- form                                      form组件
      |-- login                                     登录页
      |-- table                                     表格
         -- 动态表格
         —- 拖拽表格
         -- 内联编辑
      |-- excel
   -- main.ts
|-- test                                            测试
``` 

## 统一的数据请求方式 crud

首先在 api 中声明接口地址变量 如：export const LoginToken = '/oauth/login/token';

- 页面中普通调用
```js
const res = await store.dispatch('crud/post', {
   api: LoginToken,
   data: { type: 1 },
});
```
- store 中调用
```js
const data = { api: LoginToken, data: {} }
dispatch('crud/post', data, { root: true }) // root= true 是 modules之间调用 必须的
```


## 支持 vue3.0 composition-api

composition-api 模式下 this获取不到 获取 store 请使用获取store数据 
```js
import { useStore } from '@/utils/useStore';

...
setup(props) {
   const store = useStore();
}
```
支持 vscode 快捷方式 kv-setup

### 权限验证

### Form 表单


