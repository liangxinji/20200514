<!--  -->
<template>
<div >
    <div class="footer_guide ">
        <!-- goTo方法 -->
    <span class="guide_item "  :class='{on:"/msite"===$route.path}' @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </span>
    <span class="guide_item "  :class='{on:"/search"===$route.path}' @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide_item "  :class='{on:"/order"===$route.path}' @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="guide_item "  :class='{on:"/profile"===$route.path}' @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </span>
  </div>
</div>
</template>

<script>

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    goTo (path){
        this.$router.replace(path);
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
}
</script>
<style lang='stylus' >
 @import '../../common/stylus/mixins.styl'
.footer_guide  
    touch-action: none; 
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
  
</style>