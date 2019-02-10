<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
        model="verticle"
        :show-timeout="200"
        :default-active="$route.path"
        :collapse="isCollapse"
        background-color="#F6F6F6"
        text-color="#414141"
        active-text-color="red"
        class="my-el-menu">
      <menu-item :routes="routes"></menu-item>
    </el-menu>
 </el-scrollbar>
</template>

<script type="text/ecmascript-6">
import MenuItem from './MenuItem'
import { constantRouteMap } from '@/router/index'
export default {
  data () {
    return {
      routes: constantRouteMap,
      isCollapse: false
    }
  },
  components: {
    MenuItem
  }
}
</script>

<style scoped lang="scss">
.el-scrollbar{
  height: 100%;
}
.menu-list {
  width: 196px;
  a {
    height: 30px;
    width: 100%;
    display: block;
    font-size: 14px;
  }
}
</style>
