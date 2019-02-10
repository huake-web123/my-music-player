<template>
 <div class="page">
  <div class="menu">
    <SideMenu/>
    <CurrentSong/>
  </div>
  <div class="content">
    <transition  name="slide-fade">
      <router-view>
      </router-view>
    </transition>
  </div>
 </div>
</template>

<script type="text/ecmascript-6">
import SideMenu from '@/components/Layout/SideBar/SideMenu'
import CurrentSong from '@/components/Layout/SideBar/CurrentSong'
export default {
  data () {
    return {

    }
  },
  components: {
    SideMenu,
    CurrentSong
  }
}
</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex:1;
  width:100%;
  height: 100%;
  overflow: hidden;
}
.menu {
  flex-basis: 190px;
  background-color:  #F6F6F6;
  position: relative;
  padding-bottom: 80px;
  // overflow: hidden;
}
.content {
  flex: 1;
  overflow: auto;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
