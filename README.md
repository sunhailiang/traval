# 项目名称：travel

# 前置安装
1. node
2. git
# 安装
1. npm install vue
2. vue init webpack Travel 初始化一个vue项目
# 运行
1. cnpm i (安装所有的项目依赖)
2. npm run dev


# 路由
1. <router-view></router-view> 指的是当前url所对应的内容

# 多页应用
1. 存在页面跳转
2. 首屏时间快
3. SEO效果好
4. 缺点：页面切换慢

# 单页应用
1. 页面切换快
2. 首屏慢，SEO差

# 项目基础设置
1. 设置viewport 设置移动端开发参数:minimum-scale=1.0,maximun-scale=1.0,user-scalable=no,确认手机放大缩小无效
2. 在src->assets>中创建style文件夹，放入reset.css(此文件是对页面基础样式的重写)
3. 引入css 在main.js中引入reset.css(统一基本样式)
4. 引入css 在main.js中引入border.css(解决多倍屏幕border问题)

# 解决移动端click事件300mg延迟的问题
1. 安装fastclick  ->  cnpm install fastclick --save
2. 在main.js中引入fastClick -> import falseClick from "fastclick"
3. 在main.js -> 使用fastClick -> falseClick.attach(document.body) 

# 添加项目需要用的iconfont
1. 去阿里矢量图库->图标管理->我的项目->新建项目
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


