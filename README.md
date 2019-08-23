# 项目名称：travel

# 前置安装

1. node
2. git

# 安装

1. npm install vue
2. vue init webpack Travel 初始化一个 vue 项目

# 运行

1. cnpm i (安装所有的项目依赖)
2. npm run dev

# 路由

1. <router-view></router-view> 指的是当前 url 所对应的内容

# 多页应用

1. 存在页面跳转
2. 首屏时间快
3. SEO 效果好
4. 缺点：页面切换慢

# 单页应用

1. 页面切换快
2. 首屏慢，SEO 差

# 项目基础设置

1. 设置 viewport 设置移动端开发参数:minimum-scale=1.0,maximun-scale=1.0,user-scalable=no,确认手机放大缩小无效
2. 在 src->assets>中创建 style 文件夹，放入 reset.css(此文件是对页面基础样式的重写)
3. 引入 css 在 main.js 中引入 reset.css(统一基本样式)
4. 引入 css 在 main.js 中引入 border.css(解决多倍屏幕 border 问题)

# 解决移动端 click 事件 300mg 延迟的问题

1. 安装 fastclick -> cnpm install fastclick --save
2. 在 main.js 中引入 fastClick -> import falseClick from "fastclick"
3. 在 main.js -> 使用 fastClick -> falseClick.attach(document.body)

# 添加项目需要用的 iconfont

1. 去阿里矢量图库->图标管理->我的项目->新建项目

## Build Setup

# 关于 iconfont 的使用

1. 去 icon 官网找到适合的 iconfont
2. 添加到购物车
3. 将购物车中的要用的 icon 添加到项目
4. 下载到本地
5. 解压文件夹，将所有的字体文件和 iconfont.css 分别放到资源文件夹下
6. 修改 iconfont.css 中字体路径
7. 删除默认图标，直接使用 64 位或者 16 进制
8. main.js 中引入 iconfont.css

# 使用 css 预处理器

1. 安装 stylus:cnpm i stylus --save
2. 安装 stylus:cnpm i stylus-loader --save

# 关于 css 样式作用域 scoped

1. <style lang="stylus" scoped></style>

# 使用@import 引入样式

1. 如果将公用的样式抽取成一个文件，用来统一维护起来
2. 使用@import 将定义的文件引入，即可复用定义好的公共文件

# 关于@符号

1. 在 vue 中@符号指向 src 目录
2. 但是 css 中需要用~@才行

# 将常用的路径配置成别名方便使用

1. 在 build 文件夹下有个 webpack.base.conf.js 我们可以创建自定义类似@符号的别名,添加常用的资源

# 关于 swiper 的使用

1. vue-awesome-swiper
2. npm install vue-awesome-swiper --save

# 关于 vue 中 css 穿透 scope 的操作

1. 如 .wraper>>>.swiper-pagination-bullet-active 就是穿透 scope

```js
<style scoped>
  外层 >>> 第三方组件 {
      样式
  }

/deep/  第三方组件 {
      样式
  }
```

```bash
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
