<template>
  <div class="friends">
    <div class="friends-dongtai">
      <Row>
        <i-col span="2">
          <p>动态</p>
        </i-col>
        <i-col span="2" offset="18">
          <Button shape="circle" class="float-right">
            + 写动态
          </Button>
        </i-col>
      </Row>
    </div>
    <div class="friends-msg">
      <Avatar :src="avatarUrl" />&nbsp;&nbsp;{{nickname}}
      <div class="dropdowndata">
        <Row>
          <i-col span="8">
            <p>{{dynamics}}</p>
            <p>动态</p>
          </i-col>
          <i-col span="8">
            <p>{{watch}}</p>
            <p>关注</p>
          </i-col>
          <i-col span="8">
            <p>{{followers}}</p>
            <p>粉丝</p>
          </i-col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Friends',
  data () {
    return {
      avatarUrl:
        'http://p1teq0wgy.bkt.clouddn.com/QQ%E5%9B%BE%E7%89%8720180922214329.jpg',
      nickname: 'liuxmoo',
      dynamics: 0,
      watch: 0,
      followers: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.friends {
  display: flex;
  justify-content: space-between;
  .friends-dongtai {
    flex: 3;
    p {
      font-size: 20px;
      color: rgb(211, 72, 72);
    }
  }
  .friends-msg {
    border-left: 1px solid rgb(214, 209, 209);
    flex: 1;
    .ivu-avatar{
      width: 50px;
      height: 50px;
    }
  }
}
</style>
