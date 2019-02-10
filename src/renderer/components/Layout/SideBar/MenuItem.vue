<template>
  <li class="page">
    <!-- 菜单不添加原则：1. 有 hide = true
    2. 有children 但是 children 数组为空，
    3. 有children 但是 children 数组子集都是 hide = true -->
    <template v-for="item in routes">
      <template v-if="isAddFlag(item)">
        <template v-if="hasChildren(item)">
          <el-submenu :key="item.name" :index="item.name">
            <!-- slot=title 必须写。参考源码 -->
            <template slot="title">
              <svg-icon v-if="item.icon" :icon-class="item.icon" class="icon"></svg-icon>
              <span>{{item.name}}</span>
            </template>
            <template v-for="subMenu in item.children" >
              <router-link v-if="!subMenu.hide" class="link"
                :to="item.path + '/' + subMenu.path"
                :key="subMenu.name">
                <el-menu-item :index="item.path + '/' + subMenu.path">
                  <svg-icon v-if="subMenu.icon" :icon-class="subMenu.icon"  class="icon"></svg-icon>
                  <span>{{subMenu.name}}</span>
                </el-menu-item>
              </router-link>
            </template>
          </el-submenu>
        </template>
        <router-link v-else
          :to="item.path"
          :key="item.name"
          class="link">
          <el-menu-item>
            <svg-icon v-if="item.icon" :icon-class="item.icon"></svg-icon>
            <span>{{item.name}}</span>
          </el-menu-item>
        </router-link>
      </template>
    </template>
  </li>
</template>

<script type="text/ecmascript-6">
import SvgIcon from '@/components/SvgIcon/Index'
export default {
  props: {
    routes: {
      type: Array
    }
  },
  data () {
    return {

    }
  },
  methods: {
    // 菜单不添加原则：
    // 1. 有 hide = true
    // 2. 有children 但是 children 数组为空，
    // 3. 有children 但是 children 数组子集都是 hide = true
    isAddFlag (item) {
      if (item.hide) {
        return false
      }
      if (item.children) {
        if (item.children.length === 0) {
          return false
        } else {
          let filters = item.children.filter((menu) => !menu.hide)
          if (filters.length === 0) {
            return false
          }
        }
      }
      return true
    },
    hasChildren (item) {
      if (item.children.length > 0) {
        let filters = item.children.filter((menu) => !menu.hide)
        if (filters.length > 0) {
          return true
        }
      }
      return false
    }
  },
  components: {
    SvgIcon
  }
}
</script>

<style scoped lang="scss">
.link {
  color: #414141;
  text-decoration: none;
  width: 100%;
  li {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100px;
      font-size: 13px;
    }
    .icon {
      height: 18px;
      width: 18px;
      margin-right: 3px;
    }
  }
}
</style>
