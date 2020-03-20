# GEES

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 项目布局
```
.
├── mock                                        // 本地接口数据模拟
├── public                                      // html文件以及系统favicon
├── src                                         // 源码目录
|   ├── assets                                  // 图片样式存放目录
│   │   ├── icon                                // 图片
│   │   ├── scss                                // scss
│   │   │   ├── aggregate.scss                  // 主scss入口
│   │   │   ├── app.scss                        // 公用scss mixin等
│   │   │   ├── application.scss                // 所有应用样式
│   │   │   ├── base.scss                       // 基础样式
│   │   │   ├── black-theme.scss                // 高级黑主题样式
│   │   │   ├── btn.scss                        // 按钮样式
│   │   │   ├── components.scss                 // 组件样式
│   │   │   ├── element.scss                    // element表格选择框样式
│   │   │   ├── flex.scss                       // flex布局样式
│   │   │   ├── godon.scss                      // 广联达组件样式
│   │   │   ├── init.scss                       // 基础样式
│   │   │   ├── institutionInfo.scss            // 机构信息样式
│   │   │   ├── login.scss                      // 登陆注册样式
│   │   │   ├── main.scss                       // 主样式
│   │   │   ├── godon.scss                      // 广联达组件样式
│   │   │   ├── mixin-theme.scss                // 主题mixin
│   │   │   ├── project.scss                    // 我的项目样式
│   │   │   ├── reset.scss                      // 基础样式
│   │   ├── svg                                 // svg图
│   ├── components                              // 公共组件、页面
│   │   ├── common                              // 公共组件
│   │   │   ├── dialog.vue                      // 弹出框组件
│   │   │   ├── loading.vue                     // load组件
│   │   │   ├── radio.vue                       // 单选框组件
│   │   │   ├── svgIcon.vue                     // svg图组件
│   │   ├── component                           
│   │   │   ├── dropdown.vue                    // 首页头部下拉组件
│   │   │   ├── headBar.vue                     // 头部组件
│   │   │   ├── item.vue                        // 后渲染svg组件
│   │   │   ├── layout.vue                      // 主视图组件
│   │   │   ├── leftMenu.vue                    // 左侧菜单组件
│   │   │   ├── mainPanel.vue                   // 页面面板头部组件
│   ├── config                                  // 预留接口目录
│   ├── lib                                     // 公用js方法
│   │   ├── analytics.js                        // 公共方法
│   │   ├── base64.js                           // 字符等base64转码解码
│   │   ├── filter.js                           // 过滤器方法
│   │   ├── httpPlugin.js                       // axiosAPI接口请求方法
│   │   ├── loadPlugin.js                       // load遮罩
│   │   ├── lrz.all.bundle.js                   // 上传图片压缩插件
│   │   ├── session_storage.js                  // session相关方法合集
│   │   ├── radio.js                            // 全局注册单选组件
│   │   ├── until.js                            // 公共方法合集
│   ├── router                                  // 路由配置
│   │   ├── attributes.js                       // 属性词典管理路由
│   │   ├── index.js                            // 主路由方法集合
│   │   ├── institutionInfo.js                  // 机构信息路由
│   │   ├── login.js                            // 登陆注册路由
│   │   ├── sideBar.js                          // 所有应用菜单路由
│   │   ├── sideBarTop.js                       // 所有应用上部分路由
│   ├── store                                   // 状态管理
│   │   ├── action                              // store相关action方法
│   │   │   ├── config.action.js                // 窗口，菜单，loading等aciton
│   │   │   ├── globelData.action.js            // 
│   │   ├── moudle                              // store module
│   │   │   ├── config.js                       // 访问来源
│   │   │   ├── globelData.js                   //
│   │   ├── actions.js                          // 操作vuex集合
│   │   ├── getters.js                          // 获取vuex状态
│   │   ├── index.js                            // vuex
│   │   ├── mutation-types.js                   // vuex mutation集合
│   ├── view                                    // 页面
│   │   ├── application                         // 所有应用
│   │   │   ├── index.vue                       // 所有应用页面
│   │   ├── attributes                          // 公共组件
│   │   │   ├── appear.vue                      // 呈现属性
│   │   │   ├── build.vue                       // 建筑属性
│   │   │   ├── common.vue                      // 常规属性
│   │   │   ├── design.vue                      // 设计属性
│   │   │   ├── index.vue                       // 导航栏
│   │   │   ├── user.vue                        // 用户属性
│   │   ├── institutionInformation              // 机构信息
│   │   │   ├── basicInfo.vue                   // 基本信息
│   │   │   ├── change.vue                      // 切换机构
│   │   │   ├── index.vue                       // 导航栏
│   │   │   ├── user.vue                        // 机构用户
│   │   ├── login                               // 登录
│   │   │   ├── login.vue                       // 登录
│   │   │   ├── mechanism.vue                   // 机构查询
│   │   ├── myProject                           // 我的项目
│   │   │   ├── index.vue                       // 我的项目
│   │   ├── error                               // 404
│   │   ├── home                                // home
│   │   ├── Index                               // 首页
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── .env.                                       // 开发生产等环境配置
├── .eslintignore                               // eslint忽略检查目录配置
├── .eslintrc.js                                // eslint检查配置
├── .gitignore.js                               // git上传忽略配置
├── .babel.config.js                            // babel支持语法配置
├── pachage.json                                // 项目所有安装插件等信息
├── readme.md                                   // 项目帮助文档
├── vue.config.js                               // webpack配置文件

#
```
