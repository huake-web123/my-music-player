<template>
  <div class="progress-bar" :style="bgstyle" :left="left">
    <div class="red-bar" :style="redstyle">
    </div>
    <div class="white-circle" :style="leftStyle" @mousedown="initMouseMove"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['left', 'bgstyle'],
  data () {
    return {
      redstyle: {
        width: this.left
      },
      leftStyle: {
        left: this.left
      }
    }
  },
  watch: {
    left (newVal, oldVal) {
      console.log(newVal)
      this.redstyle = {
        width: newVal
      }
      this.leftStyle = {
        left: newVal
      }
    }
  },
  methods: {
    initMouseMove (event) {
      let obj = event.target
      let disX = event.clientX - obj.offsetLeft
      document.onmousemove = (e) => {
        e = e || window.event
        let leftX = e.clientX - disX
        if (leftX < 0) {
          leftX = 0
        }
        let max = event.target.parentNode.offsetWidth
        if (leftX >= max) {
          leftX = max
        }
        this.left = leftX / max * 100 + '%'
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
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
  }
  .white-circle {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
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
</style>
