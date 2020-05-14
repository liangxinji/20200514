<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/msite">Msite</router-link>
      <router-link to="/search">Search</router-link>
      <router-link to="/order">Order</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/shop" >Shop</router-link><hr> -->
      <!-- <span class="iconfont icon-jiantou" >222</span> -->
    </div>
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components:{
    FooterGuide
  }
}
</script>
<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.iconfont
  color:'red';
</style>
