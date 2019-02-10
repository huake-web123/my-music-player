<template>
 <div>
   <p v-for="item in playList" @click="play(item)" :key="item.id">{{item.name}}</p>
 </div>
</template>

<script type="text/ecmascript-6">
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      playList: [
        {
          id: 1,
          name: '红颜自闭',
          author: '刘德华',
          cover: 'https://dummyimage.com/100x100/ffffff&text=红',
          url: 'http://localhost/upload/mp3/刘德华 - 红颜自闭.mp3'
        },
        {
          id: 2,
          name: '如烟',
          author: '五月天',
          cover: 'https://dummyimage.com/100x100/ffffff&text=天',
          url: 'http://localhost/upload/mp3/五月天 - 如烟.mp3'
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'playThis'
    ]),
    play (item) {
      this.playThis(item)
    }
  },
  components: {

  }
}
</script>

<style scoped>
</style>
