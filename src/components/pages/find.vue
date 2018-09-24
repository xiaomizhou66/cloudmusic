<template>
  <div class="find">
    <Tabs :animated="false">
      <TabPane label="个性推荐">标签一的内容</TabPane>
      <TabPane label="歌单">标签二的内容</TabPane>
      <TabPane label="主播电台">标签三的内容</TabPane>
      <TabPane label="排行榜">标签三的内容</TabPane>
      <TabPane label="歌手">标签三的内容</TabPane>
      <TabPane label="最新音乐">标签三的内容</TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: 'Find',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.find{
}
</style>
