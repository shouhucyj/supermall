<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>

    <ul>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
      <li>aaa</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from "./childComps/FeatureView";

  import {getHomeMultidata, getHomeGoods} from "network/home";


  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      HomeSwiper,
      RecommendView,
      FeatureView,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
      }
    },
    created() {
      //请求多个数据，轮播图、快速导航
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })

      //请求商品数据
      getHomeGoods('pop', 1).then(res => {
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    padding-bottom: 49px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;  /*固定导航*/
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }

</style>
