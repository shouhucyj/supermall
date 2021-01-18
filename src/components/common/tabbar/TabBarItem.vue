<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
<!--    <img src="../../assets/img/tabbar/首页.png" alt="">-->
<!--    <div>首页</div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'skyblue'
      }
    },
    data() {
      return {
        // isActive: true,
      }
    },
    computed: {
      isActive() {
        // return this.$route.path === this.path
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      //  三目运算符
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
        //
        // 双击报错  Uncaught (in promise) NavigationDuplicated
        // 在后面加  .catch(err => err)
        // 或者执行命令  npm i vue-router@3.0 -S
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;/*均分*/
    text-align: center;/*居中*/
    height: 49px;/*高度*/
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
