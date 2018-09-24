<template>
  <div class="home-content">
    <Row>
      <!-- 设置了position：fixed之后，这个栅格布局好像没有效果？ -->
      <i-col span="8">
        <Menu active-name="1" @on-select="toWhichPage">
          <MenuGroup title="推荐">
            <MenuItem name="1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon-music"></use>
            </svg> 发现音乐
            </MenuItem>
            <MenuItem name="2">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fm"></use>
            </svg> 私人FM
            </MenuItem>
            <MenuItem name="3">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shipin"></use>
            </svg> 视频
            </MenuItem>
            <MenuItem name="4">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon-test"></use>
            </svg> 朋友
            </MenuItem>
          </MenuGroup>
          <MenuGroup title="我的音乐">
            <MenuItem name="5">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bendiyinle"></use>
            </svg> 本地音乐
            </MenuItem>
            <MenuItem name="6">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiazai"></use>
            </svg> 下载管理
            </MenuItem>
            <MenuItem name="7">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yun"></use>
            </svg> 我的音乐云盘
            </MenuItem>
            <MenuItem name="8">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shoucang"></use>
            </svg> 我的收藏
            </MenuItem>
          </MenuGroup>
          <MenuGroup title="创建的歌单">
            <MenuItem name="9">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shoucang1"></use>
            </svg> 我喜欢的音乐
            </MenuItem>
            <MenuItem name="10">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gedan"></use>
            </svg> 普通歌单
            </MenuItem>
          </MenuGroup>
          <!-- 在MenuGroup这里设置的class怎么没有效果呀？ -->
          <div class="music-detail">
            <div class="music-img" @click="toMusicdetail">
              <img :src="musicDetailImgUrl" width="40px" height="40px" />
            </div>
            <div class="music-title" @click="toMusicdetail">
              <p>{{musicDetailTitle}}</p>
              <p style="color:rgb(174, 180, 184)">{{musicDetailSinger}}</p>
            </div>
            <div class="music-share">
              <a href="#" title="喜欢">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-shoucang1"></use>
                </svg>
              </a>
              <a href="#" title="分享">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fenxiang"></use>
                </svg>
              </a>
            </div>
          </div>
        </Menu>
      </i-col>
      <i-col span="16" offset="6">
        <div class="content-right">
          <router-view/>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Homecontent',
  data () {
    return {
      musicDetailImgUrl:
        'http://p1teq0wgy.bkt.clouddn.com/QQ%E5%9B%BE%E7%89%8720180922214329.jpg',
      musicDetailTitle: '一百万个可能',
      musicDetailSinger: 'Christine Welch'
    }
  },
  methods: {
    toWhichPage (e) {
      switch (e) {
        // 传入的是字符串，这里case跟的值不要错误
        case '1':
          this.$router.push('/')
          break
        case '2':
          this.$router.push('/personalfm')
          break
        case '3':
          this.$router.push('/video')
          break
        case '4':
          this.$router.push('/friends')
          break
        case '5':
          this.$router.push('/localmusic')
          break
        case '6':
          this.$router.push('/load')
          break
        case '7':
          this.$router.push('/musicnet')
          break
        case '8':
          this.$router.push('/musickeep')
          break
        case '9':
          this.$router.push('/musiclikelist')
          break
        case '10':
          this.$router.push('/msiclist')
          break
      }
    },
    toMusicdetail () {
      this.$router.push('/musicdetail')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@layout-hight: 50px;
@listheight: 30px;
.home-content {
  .ivu-menu {
    width: 240px;
    height: 82%;
    position: fixed;
    //用定位fixed脱离了文档流了怎么解决问题？
    left: 0;
    top: @layout-hight;
    // 后面学习一下，全局引入的less文件中的@layout-hight;为什么不能在这个组件使用
    text-align: left;
    &:after {
      display: block;
      content: ".";
      clear: both;
      line-height: 0;
      visibility: hidden;
    }
    .ivu-menu-item-group {
      border-right: 1px solid rgb(174, 180, 184);
      padding-top: 10px;
      .ivu-menu-item-group-title {
        line-height: @listheight;
        height: @listheight;
        padding-left: 5px;
        //发现了padding: 0px 0px 0px 5px; 覆盖不了padding-left: 28px;
        //使用了padding-left才覆盖的padding-left
        color: rgb(211, 72, 72);
        font-weight: bold;
      }
      .ivu-menu-item {
        height: @listheight;
        line-height: @listheight;
        padding: 0px 0px 0px 20px;
        svg {
          font-size: 18px;
          margin-right: 5px;
        }
      }
    }
  }
  .music-detail {
    padding-top: 10px;
    border-top: 1px solid rgb(174, 180, 184);
    border-right: 1px solid rgb(174, 180, 184);
    width: 240px;
    height: 60px;
    position: fixed;
    left: 0;
    bottom: 50px;
    display: flex;
    justify-content: space-around;
    .music-img {
      flex: 2;
      margin-left: 10px;
    }
    .music-title {
      flex: 5;
    }
    .music-share {
      flex: 1;
    }
  }
  .content-right{
    margin-top:20px;
  }
}
</style>
