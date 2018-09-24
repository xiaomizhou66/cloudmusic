<template>
  <div class="musiclikelist">
    <common-list :listname="ListName"></common-list>
  </div>
</template>

<script>
import List from '@/components/common/list'
export default {
  name: 'Musiclikelist',
  // 注册组件
  components: {
    'common-list': List
  },
  data () {
    return {
      ListName: '我喜欢的音乐'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.musiclikelist{

}
</style>
