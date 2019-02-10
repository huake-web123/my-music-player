<template>
  <div class="player-box">
    
    <div class="play-btns-box" v-if="audioObj">
      <div @click="prev()">
        <svg-icon class="btns-next" icon-class="previous"></svg-icon>
      </div>
      <div @click="playCtrl()">
        <svg-icon class="btns-play"
          :icon-class="isPaused ? 'play': 'pause'"
          @click="playCtrl()">
        </svg-icon>
      </div>
      <div @click="next()">
        <svg-icon class="btns-next" icon-class="nextsong"></svg-icon>
      </div>
    </div>
    <div class="progress-box">
      <ProgressBar :redstyle="playingStyle" :bgstyle="playingBgStyle"/>
      <div class="time-box">
        <span>
          {{currentTime}}/{{duration}}
        </span>
      </div>
    </div>
    
    <div class="volume-box">
      <ProgressBar :redstyle="volumeStyle" :bgstyle="volumeBgStyle"/>
    </div>
    <div class="other-btns-box">
      
    </div>
    <audio id="myAudio" src="">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script type="text/ecmascript-6">
import SvgIcon from '@/components/SvgIcon/Index'
import ProgressBar from '@/components/Player/ProgressBar'
import { mapGetters } from 'vuex'
import { formatTimeFromSeconds } from '@/utils/common'
export default {
  data () {
    return {
      audioObj: null,
      isPaused: false,
      currentTime: '00:00',
      duration: '00:00',
      now: 0,
      playingStyle: {
        width: '0%'
      },
      playingBgStyle: {
        'background-color': '#B0B0B0'
      },
      volumeStyle: {
        width: '5%'
      },
      volumeBgStyle: {
        'background-color': '#DEDEDE'
      }
    }
  },
  computed: {
    ...mapGetters({
      currentSong: 'currrentSong'
    })
  },
  filters: {
    formatTimeFilter (val) {
      return formatTimeFromSeconds(val)
    }
  },
  watch: {
    currentSong: {
      handler (newOnde, oldOnde) {
        this.changeUrl(newOnde)
      },
      deep: true
    }
  },
  mounted () {
    this.audioObj = document.getElementById('myAudio')
    this.audioObj.addEventListener('canplaythrough', () => {
      this.loaded()
    }, false)
  },
  components: {
    SvgIcon,
    ProgressBar
  },
  methods: {
    changeUrl (song) {
      this.audioObj.src = song.url
    },
    playCtrl () {
      if (this.audioObj.paused) {
        this.audioObj.play()
        this.isPaused = false
      } else {
        this.audioObj.pause()
        this.isPaused = true
      }
    },
    prev () { },
    next () { },
    loaded () {
      this.audioObj.play()
      this.isPaused = false
      this.duration = formatTimeFromSeconds(this.audioObj.duration)
      this.timerTick()
    },
    timerTick () {
      this.interval = setInterval(() => {
        this.currentTime = formatTimeFromSeconds(this.audioObj.currentTime)
        this.playingStyle.width = (this.audioObj.currentTime / this.audioObj.duration) * 100 + '%'
        console.log(this.playingStyle.width)
        if (this.audioObj.currentTime >= this.audioObj.duration) {
          clearInterval(this.interval)
        }
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
.player-box {
  border-top: 1px solid #C5C5C5;
  display: flex;
  height: 100%;
  background-color: #F6F6F6;
  .play-btns-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 150px;
    margin: 0 40px;
    color: #BA3027;
    .svg-icon {
      background-color: #fff;
      border-radius: 50%;
    }
    .btns-play {
      width: 34px;
      height: 34px;
    }
    .btns-next {
      width: 36px;
      height: 36px;
    }
  }
  .progress-box {
    display: flex;
    flex: 1;
    align-items: center;
    height: 100%;
    .time-box {
      width: 80px;
      margin-left: 5px;
      font-size: 13px;
      color: #777777;
    }
  }
  .volume-box {
    width: 120px;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .other-btns-box{
    width: 150px;
  }
}
</style>
