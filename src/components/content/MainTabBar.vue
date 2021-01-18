<template>
  <tab-bar>
    <tab-bar-item path="/home"><!--添加active-color="red"则活跃时字体变红色，默认为天蓝色-->
      <img slot="item-icon" src="~assets/img/tabbar/首页.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/首页-active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/分类.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/分类-active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/购物车.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/购物车-active.png" alt="">
      <div slot="item-text">购物</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/我的.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/我的-active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
