<template>
  <div class="music-list">
    <common-list :listname="ListName"></common-list>
  </div>
</template>

<script>
import List from '@/components/common/list'
export default {
  name: 'HelloWorld',
  components: {
    'common-list': List
  },
  data () {
    return {
      ListName: '普通歌单'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
