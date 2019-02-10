<template>
 <div class="main-page">
    <header>
      <Header/>
    </header>
    <main>
      <Main-Box/>
    </main>
    <footer>
      <Player/>
    </footer>
 </div>
</template>

<script type="text/ecmascript-6">
import Header from '@/components/Layout/Header'
import MainBox from '@/components/Layout/Main'
import Player from '@/components/Player/Player'
export default {
  data () {
    return {

    }
  },
  components: {
    Header,
    MainBox,
    Player
  }
}
</script>

<style scoped lang="scss">
.main-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    height: 70px;
  }
  main {
    flex: 1;
    overflow: auto;
  }
  footer {
    height: 65px;
  }
}
</style>
