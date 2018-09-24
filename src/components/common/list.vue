<template>
  <div class="common-list">
    <Row>
      <i-col span="4">
        <div class="bigimg">
          <img :src="bigImgUrl" width="200px" height="200px" />
        </div>
      </i-col>
      <!-- 为什么栅格布局会不正确？ -->
      <i-col span="12" offset="3">
        <div class="bigtitle">
          <div>
            <Tag color="gold">歌单</Tag>
            <span>{{listname}}</span>
          </div>
          <div>
            <Avatar :src="avatarUrl" />&nbsp;&nbsp;{{nickname}}&nbsp;&nbsp;{{newcreatedTime}}创建
          </div>
          <div>
            <Button size="small">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang"></use>
              </svg>播放全部</Button>
            <Button size="small">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shoucang"></use>
              </svg>收藏({{keep}})</Button>
            <Button size="small">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
              </svg>分享({{share}})</Button>
            <Button size="small">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiazai"></use>
              </svg>下载全部</Button>
          </div>
          <div>标签:</div>
          <div>简介:</div>
        </div>
      </i-col>
      <i-col span="4">
        <div class="common-list-count">
          <div class="musiccount">
            <p>歌曲数</p>
            <p>{{musiccount}}</p>
          </div>
          <div>
            <p>播放数</p>
            <p>{{playcount}}</p>
          </div>
        </div>
      </i-col>
    </Row>
    <Row>
      <i-col>
        <div class="tab-title">
          <Tabs type="card">
            <TabPane label="歌曲列表">
              <Table border :columns="columns" :data="musiclist"></Table>
            </TabPane>
            <TabPane label="评论">标签二的内容</TabPane>
            <TabPane label="收藏者">标签三的内容</TabPane>
          </Tabs>
          <i-input class="search-input" search placeholder="搜索歌单音乐" />
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Find',
  props: [
    'listname'
  ],
  data () {
    return {
      bigImgUrl:
        'http://p1teq0wgy.bkt.clouddn.com/QQ%E5%9B%BE%E7%89%8720180922214329.jpg',
      avatarUrl:
        'http://p1teq0wgy.bkt.clouddn.com/QQ%E5%9B%BE%E7%89%8720180922214329.jpg',
      nickname: 'liuxmoo',
      createdTime: '',
      keep: 0,
      share: 0,
      musiccount: 0,
      playcount: 0,
      columns: [
        {
          title: ' ',
          key: 'index',
          width: 40,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.index + 1)
            ])
          }
        },
        {
          title: '操作',
          key: 'action',
          width: 90,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('svg', {
                class: 'icon iconfont',
                style: {
                  fontSize: '18px',
                  color: '#559DF9',
                  cursor: 'pointer',
                  marginRight: '10px'
                },
                domProps: {
                  innerHTML: '<use xlink:href="#icon-shoucang1"></use>' // iconfont图标
                },
                on: {
                  click: () => {
                    console.log(111) // 点击操作事件
                  }
                }
              }),
              h('svg', {
                class: 'icon iconfont',
                style: {
                  fontSize: '18px',
                  color: '#559DF9',
                  cursor: 'pointer'
                },
                domProps: {
                  innerHTML: '<use xlink:href="#icon-xiazai1"></use>' // iconfont图标
                },
                on: {
                  click: () => {
                    console.log(111) // 点击操作事件
                  }
                }
              })
            ])
          }
        },
        {
          title: '音乐标题',
          key: 'musicTitle',
          width: 350,
          align: 'left',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.musicTitle)
            ])
          }
        },
        {
          title: '歌手',
          key: 'singer'
        },
        {
          title: '专辑',
          key: 'album'
        },
        {
          title: '时长',
          key: 'timeKeep',
          width: 80
        }
      ],
      musiclist: [
        {
          musicTitle: '一百万个可能',
          singer: 'Christine Welch',
          album: '一百万个可能',
          timeKeep: '04:35'
        },
        {
          musicTitle: '小半',
          singer: '陈粒',
          album: '小梦大半',
          timeKeep: '04:57'
        },
        {
          musicTitle: '空空如也',
          singer: '任然',
          album: '空空如也',
          timeKeep: '03:33'
        },
        {
          musicTitle: '一百万个可能',
          singer: 'Christine Welch',
          album: '一百万个可能',
          timeKeep: '04:35'
        },
        {
          musicTitle: '小半',
          singer: '陈粒',
          album: '小梦大半',
          timeKeep: '04:57'
        },
        {
          musicTitle: '空空如也',
          singer: '任然',
          album: '空空如也',
          timeKeep: '03:33'
        },
        {
          musicTitle: '一百万个可能',
          singer: 'Christine Welch',
          album: '一百万个可能',
          timeKeep: '04:35'
        }
      ]
    }
  },
  computed: {
    newcreatedTime: function () {
      return 1 //
    }
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.musiclist[index].name}<br>Age：${
          this.musiclist[index].age
        }<br>Address：${this.data6[index].address}`
      })
    },
    remove (index) {
      this.musiclist.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.common-list {
  .bigimg {
    text-align: left;
  }
  .bigtitle {
    display: flex;
    flex-direction: column;
    justify-content: space-aroundl;
    align-items: space-around;
    text-align: left;
  }
  .common-list-count {
    display: flex;
    text-align: right;
    .musiccount {
      border-right: 1px solid rgb(214, 209, 209);
      padding-right: 10px;
      margin-right: 10px;
    }
  }
  .tab-title {
    position: relative;
    .search-input {
      position: absolute;
      top: 0px;
      right: 0px;
      float: right;
      width: 20%;
      input {
        background: transparent;
        border-radius: 25px;
      }
    }
  }
}
</style>
