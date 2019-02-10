<template>
  <div class="current-box">
    <template v-if="currentSong">
    <img class="cover" :src="currentSong.cover"/>
    <div class="info-box">
      <div class="name">{{currentSong.name}}</div>
      <div class="author">{{currentSong.author}}</div>
    </div>
    <div class="btns-box">
      <svg-icon icon-class = "share"/>
      <svg-icon icon-class = "heart"/>
    </div>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import SvgIcon from '@/components/SvgIcon/Index'
import { mapGetters } from 'vuex'
export default {
  data () {
    return { }
  },
  computed: {
    ...mapGetters({
      currentSong: 'currrentSong'
    })
  },
  components: {
    SvgIcon
  }
}
</script>

<style scoped lang="scss">
.current-box {
  position: absolute;
  bottom: 0;
  left:0;
  right: 0;
  z-index: 1000;
  height: 80px;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  background-color: #F6F6F6;
  .cover {
    height: 60px;
    width: 60px;
    border-radius: 10px;
  }
  .info-box {
    width: 89px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      &.name {
        font-size: 14px;
      }
      &.author {
        font-size: 13px;
        color: #777777;
      }
    }
  }
  .btns-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .svg-icon {
      margin-top: 10px;
      height: 22px;
      width: 22xp;
    }
  }
}
</style>
