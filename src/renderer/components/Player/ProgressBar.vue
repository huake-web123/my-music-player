<template>
  <div class="progress-bar" :style="bgstyle">
    <div class="red-bar" :style="redstyle">
      <div class="white-circle"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['redstyle', 'bgstyle'],
  data () {
    return {
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.progress-bar {
  position: relative;
  height: 4px;
  flex: 1;
  border-radius: 2px;
  .red-bar {
    position: absolute;
    background-color: #BA3027;
    top: 0;
    bottom: 0;
    z-index: 10000;
    border-radius: 2px;
    .white-circle {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(100%, -50%);
      z-index: 10001;
      background-color: #fff;
      border:1px solid #E1E1E1;
      border-radius: 50%;
      height: 14px;
      width: 14px;
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 10001;
        background-color: #BA3027;
        border-radius: 50%;
        height: 4px;
        width: 4px;
      }
    }
  }
}
</style>
