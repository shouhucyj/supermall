<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>

  #tab-bar {
    display: flex;/**/
    background-color: #f6f6f6;/*盒子背景颜色*/

    /*盒子设置在页面下方*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  }
</style>
