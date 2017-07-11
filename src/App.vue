<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
        <m-header></m-header>
        <!--导航栏组件-->
        <tab></tab>
      <!--路由内容体以后页面被渲染-->
    <router-view></router-view>
    
  </div>
</template>

<script>
// 引入header组件<!--名字随便起--->
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
   name: 'app',
  components: {
   MHeader,
   Tab
  }
}
</script>
<!--只在本页面使用-->
<style scoped lang="stylus" rel="stylesheet/stylus">
 @import     './common/stylus/variable'

#app 
   color :$color-theme 

</style>
