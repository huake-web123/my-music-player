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
      <ProgressBar :left="playingLeft" :bgstyle="playingBgStyle"/>
      <div class="time-box">
        <span>
          {{currentTime}}/{{duration}}
        </span>
      </div>
    </div>
    
    <div class="volume-box">
      <svg-icon icon-class="volume"></svg-icon>
      <ProgressBar :left="volumeLeft" :bgstyle="volumeBgStyle"/>
    </div>
    <div class="other-btns-box">
      <div class="play-type" @click="changePlayType()">
        <svg-icon :icon-class="playTypeClass[currentPlayType]"></svg-icon>
      </div>
      <span class="show-rylic" @click="showRylic()">
        词
      </span>
      <div class="show-song-list">
        <svg-icon icon-class="play-list"/>
        <span>{{songList.length}}</span>
      </div>
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
        width: '100%'
      },
      playingBgStyle: {
        'background-color': '#B0B0B0'
      },
      playingLeft: '100%',
      volumeLeft: '50%',
      volumeBgStyle: {
        'background-color': '#DEDEDE'
      },
      currentPlayType: 0,
      playTypeClass: ['play-type@order', 'play-type@random', 'play-type@recycle', 'play-type@one'],
      songList: [1, 1, 1, 1, 1, 1, 1, 1, 1]
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
    console.log(this.audioObj.volume)
    this.audioObj.volume = 0.5
    this.volumeLeft = this.audioObj.volume * 100 + '%'
  },
  components: {
    SvgIcon,
    ProgressBar
  },
  methods: {
    changePlayType () {
      if (this.currentPlayType === 3) {
        this.currentPlayType = 0
      } else {
        this.currentPlayType++
      }
    },
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
    /**
     * 计时器。
     * 每一秒钟 计算当前播放的时间，变化进度条
     */
    timerTick () {
      if (this.interval) {
        clearInterval(this.interval)
      }
      this.interval = setInterval(() => {
        this.currentTime = formatTimeFromSeconds(this.audioObj.currentTime)
        this.playingLeft = (this.audioObj.currentTime / this.audioObj.duration) * 100 + '%'
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
      margin-left: 25px;
      font-size: 13px;
      color: #777777;
    }
  }
  .volume-box {
    width: 120px;
    display: flex;
    align-items: center;
    height: 100%;
    color: #666;
    .svg-icon {
      margin-right: 10px;
    }
  }
  .other-btns-box{
    display: flex;
    align-items: center;
    padding: 0 5px 0 20px;
    color: #666;
    .play-type {  
      .svg-icon {
        width: 25px;
        height: 25px;
      }
    }
    .show-rylic {
      border-radius: 2px;
      border: 1px solid #919192;
      color: #666666;
      padding: 2px;
      margin-left: 20px;
      font-size: 14px;
    }
    .show-song-list {
      margin-left: 20px;
      display: flex;
      align-items: center;
      width: 40px;
      padding: 2px 0;
      border-radius: 10px;
      background-color: #E1E1E2;
      span {
        margin-left: 8px;
      }
    }
  }
}
</style>
