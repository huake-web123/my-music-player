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
          name: '手放开',
          author: '李圣杰',
          cover: 'https://dummyimage.com/100x100/ffffff&text=手',
          url: 'http://localhost/upload/mp3/李圣杰 - 手放开.mp3'
        },
        {
          id: 2,
          name: '阳光女孩-阳光男孩',
          author: 'TG4',
          cover: 'https://dummyimage.com/100x100/ffffff&text=阳',
          url: 'http://localhost/upload/mp3/阳光女孩-阳光男孩.mp3'
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
