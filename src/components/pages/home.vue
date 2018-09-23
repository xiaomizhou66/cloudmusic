<template>
  <div class="home">
    <Layout>
      <Header>
        <Row>
          <i-col span="16">
            <div class="logo">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wangyiyunyinle"></use>
              </svg>
              网易云音乐
              <span class="author">_by liuxmoo</span>
            </div>
            <div class="goback">
              <ButtonGroup>
                <!-- ghost,透明按钮 -->
                <Button shape="circle" type="dashed" ghost>&lt; 返回</Button>
                <Button shape="circle" type="dashed" ghost>前进 &gt;</Button>
              </ButtonGroup>
            </div>
            <div class="search">
              <!-- 注意这里实际生成的是html是 .search .search-input input，最后是input元素，
              .search-input类 与input元素不是同一个节点/元素-->
              <i-input class="search-input" search placeholder="搜索音乐，视频，歌词，电台" />
            </div>
          </i-col>
          <i-col span="8">
            <div class="header-icon">
              <ul>
                <li>
                  <!-- <div class="demo-avatar"> -->
                  <Avatar :src="avatarUrl" />
                  <!-- </div> -->
                </li>
                <li>
                  <Dropdown trigger="click">
                    <a href="javascript:void(0)">
                      {{nickname}}
                      <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                      <DropdownItem>
                        <Avatar :src="avatarUrl" />&nbsp;&nbsp;{{nickname}}
                        <Button shape="circle" class="float-right" icon="ios-search" @click="isSignin" :disabled="isDisabled">{{signin}}</Button>
                      </DropdownItem>
                      <DropdownItem>
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
                      </DropdownItem>
                      <DropdownItem divided>
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-VIP"></use>
                        </svg>会员中心
                        <span class="float-right">
                          {{vip}}
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-rightarrow"></use>
                          </svg>
                        </span>
                      </DropdownItem>
                      <DropdownItem>
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-dengji"></use>
                        </svg>等级
                        <span class="float-right">{{level}}
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-rightarrow"></use>
                          </svg>
                        </span>
                      </DropdownItem>
                      <DropdownItem>
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-shangcheng"></use>
                        </svg>商城
                        <span class="float-right">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-rightarrow"></use>
                          </svg>
                        </span>
                      </DropdownItem>
                      <DropdownItem divided>
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-shezhi"></use>
                        </svg>个人信息设置
                        <span class="float-right">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-rightarrow"></use>
                          </svg>
                        </span>
                      </DropdownItem>
                      <DropdownItem>
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-bangding"></use>
                        </svg>绑定社交账号
                        <span class="float-right">
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-weibo"></use>
                          </svg>
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-yixin"></use>
                          </svg>
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-rightarrow"></use>
                          </svg>
                        </span>
                        <span class="float-right"></span>
                      </DropdownItem>
                      <DropdownItem divided>
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-tuichu"></use>
                        </svg>退出登录
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown trigger="click">
                    <a href="javascript:void(0)">
                      <Icon type="ios-shirt" /> 主题
                    </a>
                    <DropdownMenu slot="list">
                      <DropdownItem>
                        <Tabs value="name1">
                          <TabPane label="主题" name="name1">标签一的内容</TabPane>
                          <TabPane label="纯色" name="name2">标签二的内容</TabPane>
                        </Tabs>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown trigger="click">
                    <Badge :count="msgTotol" type="info">
                      <a href="javascript:void(0)">
                        <Icon type="md-notifications" /> 消息
                      </a>
                    </Badge>
                    <DropdownMenu slot="list">
                      <DropdownItem>
                        111
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </li>
                <li>
                  <Icon type="md-settings" /> 设置</li>
              </ul>
            </div>
          </i-col>
        </Row>
      </Header>
      <Content>
        <router-view/>
      </Content>
      <Footer>
        <Row>
          <!-- 首先需要修改elint.js文件，不然无法使用组件库，会报错 -->
          <i-col span="6">
            <div class="play">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shangyishou1"></use>
              </svg>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang"></use>
              </svg>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiayishou1"></use>
              </svg>
            </div>
          </i-col>
          <i-col span="13">
            <div class="progress">
              {{timeNow}}
              <span></span>
              <span style="display:inline-block;translate=(-80%，0px);width:10px;heigt:10px;boder-radius:10px;backgroud:#fff;">
                <span style="display:inline-block;width:4px;heigt:4px;boder-radius:4px;backgroud:rgb(199, 55, 55);"></span>
              </span>
              {{musicTimeNew}}
            </div>
          </i-col>
          <i-col span="5">
            <div class="voice">
              <a href="#" title="声音">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-shengyin"></use>
                </svg>
              </a>
              <a href="#" title="单曲循环" v-if="musicList==1" @click="musicListIs">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-loop"></use>
                </svg>
              </a>
              <a href="#" title="随机播放" v-else-if="musicList==2" @click="musicListIs">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-suijibofang"></use>
                </svg>
              </a>
              <a href="#" title="循序播放" v-else-if="musicList==3" @click="musicListIs">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-shunxu"></use>
                </svg>
              </a>
              <a href="#" title="列表循环" v-else @click="musicListIs">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-liebiaoxunhuan"></use>
                </svg>
              </a>
              <a href="#" title="歌词">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-gecitiaozheng"></use>
                </svg>
              </a>
              <a href="#" title="打开播放列表">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-wendang"></use>
                </svg>
              </a>
            </div>
          </i-col>
        </Row>
      </Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      avatarUrl:
        'http://p1teq0wgy.bkt.clouddn.com/QQ%E5%9B%BE%E7%89%8720180922214329.jpg',
      nickname: 'liuxmoo',
      isDisabled: false,
      signin: '签到',
      dynamics: 0,
      watch: 0,
      followers: 0,
      vip: '未订购',
      level: 'LV.0',
      // 消息
      msgTotol: 0,
      // 底部栏data
      timeNow: 0,
      musicTime: 4,
      musicList: 1
    }
  },
  computed: {
    musicTimeNew () {
      return this.musicTime + ':00'
    }
  },
  methods: {
    isSignin () {
      this.signin = '已签到'
      this.isDisabled = true
    },
    musicListIs () {
      var musicList = this.musicList
      if (musicList === 1 || musicList === 2 || musicList === 3) {
        this.musicList += 1
        // 这里一定要加上this，只写musicList的话，改变不了data值
        // console.log(musicList)// 需要用哪个console.log的话先在eslint.js中允许使用，否则报错
        // 但是最后不要忘记删除console语句
      } else {
        this.musicList = 1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@laout-hight: 50px;

.home {
  min-width: 970px;
  .ivu-layout-header,
  .ivu-layout-footer {
    height: @laout-hight;
    line-height: @laout-hight;
    padding: 0;
  }
  .ivu-layout-content {
    margin-top: @laout-hight;
    min-height: 800px;
    padding: 0;
  }
  .ivu-layout-header {
    background: rgb(199, 55, 55);
    width: 100%;
    min-width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    color: #fff;
    font-size: 14px;
    .logo {
      float: left;
      width: 200px;
      height: @laout-hight;
      text-align: left;
      padding-left: 10px;
      font-size: 17px;
      .author {
        font-size: 8px;
        color: rgb(57, 85, 6);
      }
    }
    .goback {
      float: left;
    }
    .search {
      float: left;
      width: 40%;
      margin-left: 20px;
      .search-input {
        input {
          background: transparent;
          border-radius: 25px;
        }
      }
    }
    .header-icon {
      text-align: right;
      li {
        display: inline-block;
        padding-right: 10px;
        a {
          color: #fff;
        }
        .ivu-dropdown {
          height: @laout-hight;
          // .triangle {
          //   position: absolute;
          //   top: 40px;
          // }
          .ivu-select-dropdown {
            position: relative;
            &:before {
              content: "";
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              //border-top:15px solid #fff;
              border-bottom: 10px solid #fff;
              width: 0;
              height: 0;
              position: absolute;
              top: -10px;
              left: 150px;
            }
            margin: 0;
            .ivu-dropdown-menu {
              margin-top: 0;
              min-width: 300px;
              text-align: left;
              .ivu-dropdown-rel {
                height: @laout-hight !important;
              }
              .ivu-dropdown-item {
                display: block;
                font-size: 14px !important;
                .dropdowndata {
                  text-align: center;
                  font-size: 14px;
                }
                .float-right {
                  float: right;
                }
                svg {
                  margin-right: 10px;
                  font-size: 20px;
                }
              }
            }
          }
        }
      }
    }
  }
  .ivu-layout-footer {
    /* 为什么设置固定就没有宽度了?因为固定脱离标准流，它没有继承父元素的宽度了 */
    border-top: 1px solid rgb(214, 209, 209);
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    .play {
      svg {
        font-size: 50px;
        display: inline;
        padding-right: 15px;
        vertical-align: middle;
        color: rgb(199, 55, 55);
      }
    }
    .progress {
      span {
        background: rgb(199, 55, 55);
        display: inline-block;
        width: 80%;
        height: 4px;
        line-height: 4px;
        border-radius: 3px;
      }
    }
    .voice {
      svg {
        font-size: 40px;
        display: inline;
        padding-right: 16px;
        vertical-align: middle;
        color: rgb(199, 55, 55);
      }
    }
  }
}
</style>
