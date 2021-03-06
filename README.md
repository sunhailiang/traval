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

# 关于axios得应用
- 使用之前肯定要安装
   - npm i axios  --save
   - 引入axios: import axios from 'axios'
   - 通常在mounted中去请求数据啊
- **注意**：我们在页面中尽量少的向服务端发起请求，也是提高网站性能的一种手段
   - 所以请求数据可以在尽量最外层发起数据请求，然后将数据传递给子组件

# 关于gitignore的应用
- 可以把不需要打包的文件或者文件夹写在该文件中

# 关于static文件夹
- 可以将本地模拟数据的json文件放在该文件夹中

# 请求代理-config/index的proxyTable使用
- proxyTable:{}
- 将具体路径如:/static/mock/index.json改成/api/index.json
- 改完配置，记得重启哦
```js
   '/api': { // 替换地址
        target: 'http://localhost:8081', //转发地址 
        pathRewrite: {
          '^/api': '/static/mock' // 转换路径
        }
      }
```

# 关于<route-link>的使用
1. 可以理解成html中的标签
2. to：跳转的链接
```js
 <router-link to="/city">
       
 </router-link>
```

# 关于滚动插件better-scroll
- 第一步：install i better-scroll -s
- 第二步：import BScroll from 'better-scroll'
- 第三步：mounted () { this.scroll = new BScroll(this.$refs.wrapper)}

# 组件之间的通信(兄弟组件)
- 解决问题的场景：
   - 城市选择页面页面右侧字母快速导航组件，点击字母，页面快速定位到该字母得城市区域
   - 但是字母组件和城市列表是两个组件，所以就涉及到 **兄弟组件传值**
- 解决方式:先传父级，父级转发给兄弟组件
- 所以：必然要在父级组件做一个监听

> 子组件（传）
```html
        <div class="item"
         v-for="(item,key) of cities"
         :key="key"
         @click='handleToAlpha'>{{key}}</div>
```
```js

    // 子组件中使用$emit将数据扔给父级组件
    handleToAlpha (e) {
      this.$emit('change', e.target.innerText)
    }

```
> 父级组件

```html
        <!-- 监听得子组件 -->
        <Alphabet :cities='cities'
         @change="handleAlphaChange" />
        <!-- 需要传递的子组件 -->
        <List :cities='cities'
          :hotCities='hotCities'
          :alpha='alpha' />
```

```js
  data () {
    return {
      alpha: ''
    }
  },
    // 父级组件
      // 父级组件：监听子组件change事件

    // 监听处理事件 
    handleAlphaChange (alpha) {
      this.alpha = alpha
    }
```
> 传递给另一个子组件

```html
        <!-- 使用ref获取到dom信息 -->
        <div class="area"
           v-for='(item,key) of cities'
           :key='key'
           :ref="key">  
```
```js
  props: {
    alpha: String // 接收父级组件传来得参数
  }
  //  监听数据得变化
   watch: {
    alpha () {
      if (this.alpha) {
        // 取出我们要得dom
        var el = this.$refs[this.alpha][0]
        // 跳转到我们想要得位置
        this.scroll.scrollToElement(el)
      }
    }
  },
```

# 滑动字符，滚动城市区域
- 实现原理是在滑动右侧字母时，计算距离页面顶部的高度从而计算当前的字符，实现页面整体跳转
```html
<!-- 注册touchstart，touchend，touchmove -->
<div class="list">
    <div class="item"
         v-for="(item,key) of alphas"
         :key="key"
         :ref="item"
         @click='handleToAlpha'
         @touchstart='handleTouchStart' 
         @touchmove='handleTouchMove'
         @touchend='handleTouchEnd'>{{item}}</div>
  </div>
```

```js
  handleTouchStart (e) {
      this.touchStatus = true
    },
    handleTouchEnd (e) {
      this.touchStatus = false
    },
    handleTouchMove (e) {
      // 只有在按下得时候移动有效
      if (this.touchStatus) {
        // 计算滑动得高度
        // 通过判断滑动距离来确认当前滑动得字母实现页面滚动
        var startY = this.$refs['A'][0].offsetTop // 获取距离上一个元素的距离
        var touchY = e.touches[0].clientY - 74 // 获取距离屏幕顶部距离，减去上面所有的元素的距离
        var index = Math.floor((touchY - startY) / 24.8)
        if (index >= 0 && index <= this.alphas.length) {
          this.$emit('change', this.alphas[index])
        }
      }
    }
```

# vue阻止默认事件prevent
- 比如：Alphabet这个组件的出没拖动字符，在真机上就会出现屏幕头部被拖动的情况
- 解决

```html
    <div class="item"
         v-for="(item,key) of alphas"
         :key="key"
         :ref="item"
         @click='handleToAlpha'
         @touchstart.prevent='handleTouchStart' 
         @touchmove='handleTouchMove'
         @touchend='handleTouchEnd'>{{item}}</div>
```


# 关于城市搜索的功能
- 数据双向绑定输入的关键词
- 监听关键词，匹配cities中的数据

```js
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(v => {
            if (v.spell.indexOf(this.keyWord) > -1 || v.name.indexOf(this.keyWord) > -1 ) {
              result.push(v)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
```

# 城市搜索页面无法滚动的解决方法
- 借助beter-scroll提供的api
```html
    <div class="search-content"
         ref="search" 
         v-show="keyWord">
```
```js
import BScroll from 'better-scroll'

mounted () {
   this.scroll = new BScroll(this.$refs.search)
},
```

# 关于vuex的应用
- vue数据状态管理器
- 用于统一管理组件共享数据
- 使用步骤
   - cnpm i vuex --save
- 再src目录下创建store文件夹
- store文件夹下创建index.js
> index.js
```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) // 使用vuex
export default new Vuex.Store({ // 新建仓库
  state: { // 存储数据
    city: '北京'
  },
    actions: { // 执行事件
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: { // 变更状态
    changeCity (state, city) {
      state.city = city
    }
  }
})
```
> 应用数据
- 上一步将store放到vue的根实例中，以至于在此根实例下面所有的组件都能共享 **this.$store.state.公共数据**
> main.js
```js
import store from './store'

new Vue({
  el: '#app',
  store, // 当前vue实例中使用store仓库中的数据
  router,
  components: { App },
  template: '<App/>'
})
```

> 派发事件改变数据状态Search.vue List.vue
```js
    handleHotCityClick (city) { // 选择热门城市
      this.$store.commit('changeCity', city) // 此处可以用dispatch派发，也可以直接提交事件，改变状态
      this.$router.push({ path: '/' }) // 路由跳转
    },
    handleCityClick (city) { // 选择城市
      this.$store.commit('changeCity', city)
      this.$router.push({ path: '/' })
    }
```
##  使用vuex的localStorage本地缓存

- 解决的问题
   - 选择城市以后，但是刷新页面发现城市数据恢复出初始化数据而不是我们最后选的城市
> store>index.js
```js
 state: { // 存储数据
    city: localStorage.city || '北京'
  },
  actions: { // 执行事件，可以不用，直接commit也行
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: { // 变更状态
    changeCity (state, city) {
      state.city = city
      localStorage.city = city // 存到本地缓存中，这样确保刷新后数据还在
    }
  }
```
## 使用localStore的坑
- 如果用户关闭了本地存储功能，或者使用浏览器隐身模式，代码会有问题
- 解决办法
   - try catch
> store>index.js
```js
var defaultCity = '北京'
try { // 使用try捕捉可能因为不能促存储存在的异常
  if (localStorage.city) { 
    defaultCity = localStorage.city
  }
} catch (e) { }
export default new Vuex.Store({ // 新建仓库
  state: { // 存储数据
    city: defaultCity || '北京'
  },
  actions: { // 执行事件，可以不用，直接commit也行
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations: { // 变更状态
    changeCity (state, city) {
      state.city = city
      try { localStorage.city = city } catch (e) { }
    }
  }
})

```
## vuex 拆分-提高可维护性
- 将store中index文件拆分为 action,mutations,actions三个文件独立维护

## vuex中 mapState的使用
- 作用将vuex中我们需要的数据直接映射出来
- 解决问题-this.$store.state.city每次通过这么一长串去取数据很麻烦，代码不美观

> 使用mapState之前需要先引入

```js
  // 第一步引入:
  import { mapState } from 'vuex'
  // 第二部配合computed影身
  computed: {
    ...mapState(['city'])
  },
```

```html
 <div class="button-wrapper">
   <!-- 通过this.$store.state.city这一串很长 -->
            <div class="button">{{this.$store.state.city}}</div> 
  </div>
```
> 优化后
```html
  <div class="item border-bottom">{{city.name}}</div>
```

## vuex中mapMutetions的应用 
- 映射处理函数，减少手动提交事件

> 先引入
```js
import { mapState, mapMutations } from 'vuex'
  methods: {
    handleHotCityClick (city) { // 选择热门城市
      // 使用mapMutions之后不需要再手动commit直接匹配即可
      // this.$store.commit('changeCity',city)

      this.changeCity(city) // 从mapMutations中解析出来
      this.$router.push({ path: '/' })
    },
    handleCityClick (city) { // 选择城市
      this.changeCity(city)
      this.$router.push({ path: '/' })
    },
    ...mapMutations(['changeCity']) // 直接处理
  },
```

## vuex中的mapGetter
- 相当于vuex中的计算属性
- 通过state获取数据进行相关的计算
- 然后在页面使用mapGetter进行数据映射

> store>index.js

```js
 export default new Vuex.Store({ // 新建仓库
  state,
  actions,
  mutations,
  getters: { // 使用getter，相当于计算属性
    double (state) {
      return state.city + state.city
    }
  }
})
```
> home>Header.vue

```js
import { mapState, mapGetters } from 'vuex'
  computed: {
    ...mapState(['city']), // 此时只是映射一个
    ...mapGetters(['double'])// 而getter中有一个double，如果你此时把页面的city换成double会有俩城市名称
  },
```

## vuex 中Moudle
- 解决问题： 如果项目非常庞大，store会变成的非常臃肿
- 我们可以通过Moudle进行按模块代码拆分
- 详情看官方文档

# keep-alive
- 解决问题：返回组件，组件重新渲染加载了
- 良好状态：返回组件，不重复渲染
- keep-alive标签，将组件数据缓存到内存中，不会重复请求
> App.vue

```html
  <div id="app">
    <!-- 在组件外层包一层 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
```

# activAted得使用
- 解决的问题：每次选择城市我的页面数据就应该切换，但是，因为keep-alive缓存的数据，切换城市并没有发请求，所以有坑
- activated：只要存活的组件，会触发这个函数，可以在这个函数中重新发起新的请求，拿到新的数据

> home>index.vue
```js

  mounted () {
    this.lastCity = this.city // 在返回组件时mounted不会执行，所以lastCity存储得上一个城市
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()// 重新请求信息
    }
  },
```

# 关于router-link标签tag属性得用法
- 解决问题
   - router-link标签默认情况是编译成a标签，那么a标签得样式有时得再次修改
   - tag属性可以将router-link翻译成指定得标签，并不改变样式
   - 注意看tag属性和to属性

```html
 <ul>
      <router-link class="item border-bottom"
                   :tag="li" 
                   :to="'/detail?id='+item.id"
                   :key="item.id"
                   v-for="item of recommendList">
        <div class="item-wraper-img">
          <img class="item-img"
               :src='item.imgUrl'
               alt="">
        </div>
        <div class="item-wraper-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
```

# 关于动态路由
- 需要带参数得路由
>router>index.js
```js
    {
      path: '/detail/:id', // id是可以传进来的参数
      name: 'city',
      component: City
    }
```

## 动态路由参数
- 通过this.$route.params.参数名动态获取
- 如：this.$route.params.id

# 配置简化全局组件的引用路径
- 解决的问题
   - 全局组件可能在项目各个角落都会被需要，我们简化以用的路径希望以简洁地址引入全局组件
- 解决方法：
   - 配置webpack
   - build>webpack.base.conf.js
   - 配置完成后，记得重启服务

> build>webpack.base.conf.js

```webpack
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      styles: resolve('src/assets/style'),
      common: resolve('src/common')
    }
```

# 关于props中default()的用法

- default() 用于没有任何值时候的默认值 

```js
 props: {
    imgs: {
      type: Array,
      default () { 
        return [
          // 默认图片
        ]
      }
    },
```

# 关于详情页banner点击进入画廊的问题
- 问题：首次点击进入画廊，发现滚动有问题
- 原因：因为开始的隐藏到展示出来，宽度会存在计算问题
- 解决：在分页的配置项添加observeParents，observer，根据父级重新计算宽度
```js
 swiperOption: {
        observeParents: true,
        observer: true
      }
```

# vue中对全局全局事件的解绑
- 问题：如果在sap项目中，我们在vue中使用了如下代码
- 给window注册全局事件，在任何地方都会被触发

```js
    // 给window绑定了全局监听事件，那么这个事件的作用域事全局的的，在任何地方操作都会被触发
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
```

- 解决方案
   - 在与之对应的生命周期函数中解绑事件
```js
   deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
```

# vue递归组件
- 所谓递归组件
   - 组件自己调用自己
```html
 
<div class="item"
         v-for="(item,index) in list"
         :key='index'>
      <div class="item-title border-bottom">
        <span class="iconfont">
          <span class="iconticket">&#xe60a;</span> {{item.title}}
        </span>
      </div>
      <div class="item-children"
           v-if="item.children">
           <!-- 此处就是典型的递归组件的调用 -->
        <List :list='item.children' />
      </div>
    </div>

```

# 切换页面时发现并非从顶部开始
- 问题：切换页面发现，并不是从顶部开始...
- 解决问题，在路由配置
> router>index.js
```js
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) { // 重点在这，确保每次切换路由都是从该页面顶部开始浏览
    return { x: 0, y: 0 }
  }
})
```


# vue动画实现
- 利用插槽做公共动画组件

```html
<template>
  <transition>
    <slot></slot>
  </transition>
</template>
```

```css
<style lang="stylus" scoped>
@import '~styles/varibles.commonStyles'
.v-enter, .v-leave-to
  opacity 0
.v-enter-active, .v-leave-active
  transition opacity 0.5s
</style>
```

# 项目联调
- 说明：所谓的联调，就是配合后端将开发过程中的测试API换成真实的接口，打通真实的数据接口
- 这时我们只需要做一件事-修改代理路径
> config>index.js

```js
 proxyTable: {
      '/api': {
        target: 'http://localhost:8081', // 注意将这里的地址改成真实的地址就行了...
      }
    },

```

# 真机测试
- 我们想通过手机访问我们的项目，但是我们前端的项目是通过webpack内置的webpack-dev-server跑起来的，因为webpack-dev-server默认情况下不支持ip地址访问，所以外部无法访问
- 那么我们怎么访问呢？
- 如果你的计算机是windows系统，那么打开cmd，输入命令 ipconfig 
- 找到ipv4对应的ip地址
- 打开package.json文件，找到dev命令,在webpack-dev-server后面加上--host 0.0.0.0
- 保存，重启服务,此时你就可以通过ip访问
- 此时打开的你的手机，通过ip就可以访问你的项目了
- 注意必须你的手机跟你的计算机在一个网段上才行哦
```js
  "scripts": {
    // "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "lint": "eslint --ext .js,.vue src",
    "build": "node build/build.js"
  },
```


# vue阻止默认事件prevent
- 比如：Alphabet这个组件的出没拖动字符，在真机上就会出现屏幕头部被拖动的情况
- 解决

```html
    <div class="item"
         v-for="(item,key) of alphas"
         :key="key"
         :ref="item"
         @click='handleToAlpha'
         @touchstart.prevent='handleTouchStart' 
         @touchmove='handleTouchMove'
         @touchend='handleTouchEnd'>{{item}}</div>
```

# 低版本手机系统出现白屏
- 通常有两种情况造成：
- 情况一：很可能低版本手机系统，尤其安卓，不支持promise
   - 解决： npm i babel-polyfill --save  安装一个babel-polyfill来决绝不支持promise问题
      - 安装完之后在main.js文件中import一下即可
- 情况二：因为webpack-dev-server造成的
   - 解决打包发布项目，在服务器环境测试一般就没什么问题

# 项目打包上线
- 方式一：直接npm run build，然后将生成的dist目录下的文件放到服务器指定位置，即可访问
- 方式二：正常情况如：192.168.1.11/ 这样就可以访问我们页面，但是你希望192.168.1.11/project/加一个project的访问层级

> condig>index.js

- 将assetsPublicPath的值加上你想要的层级

```js
build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/project',
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
