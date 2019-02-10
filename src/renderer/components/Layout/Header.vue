<template>
 <header class="page">
   <svg-icon class="icon-logo" icon-class="music"></svg-icon>
     网易云音乐
 </header>
</template>

<script type="text/ecmascript-6">
import SvgIcon from '@/components/SvgIcon/Index'
export default {
  data () {
    return {

    }
  },
  components: {
    SvgIcon
  }
}
</script>

<style scoped lang="scss">
.page {
  height: 70px;
  background-color: #BA3027;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: #fff;
  font-size: 26px;
  .icon-logo {
    fill: #fff;
    height: 28px;
    width: 28px;
    margin-right: 5px;
  }
}
</style>
