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
