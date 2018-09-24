import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import Homecontent from '@/components/pages/homecontent'
import Setting from '@/components/pages/setting'
import Musicdetail from '@/components/pages/musicdetail'
import Find from '@/components/pages/find'
import Personalfm from '@/components/pages/personalfm'
import Video from '@/components/pages/video'
import Friends from '@/components/pages/friends'
import Localmusic from '@/components/pages/localmusic'
import Load from '@/components/pages/load'
import Musicnet from '@/components/pages/musicnet'
import Musickeep from '@/components/pages/musickeep'
import Musiclikelist from '@/components/pages/musiclikelist'
import Musiclist from '@/components/pages/musiclist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'setting', name: 'Setting', component: Setting},
        {
          path: 'musicdetail', name: 'Musicdetail', component: Musicdetail},
        {
          path: '/',
          component: Homecontent,
          // 注意这里不要直接写Content路由，iview组件库已经将它作为布局组件了
          // 不注意的话会出错啊，原来的布局组件被替换了，布局就会发生错误了。
          children: [
            {path: '/', name: 'Find', component: Find},
            {path: 'personalfm', name: 'Personalfm', component: Personalfm},
            {path: 'video', name: 'Video', component: Video},
            {path: 'friends', name: 'Friends', component: Friends},
            {path: 'localmusic', name: 'Localmusic', component: Localmusic},
            {path: 'load', name: 'Load', component: Load},
            {path: 'musicnet', name: 'Musicnet', component: Musicnet},
            {path: 'musickeep', name: 'Musickeep', component: Musickeep},
            {path: 'musiclikelist', name: ' Musiclikelist', component: Musiclikelist},
            {path: 'msiclist', name: ' Musiclist', component: Musiclist}]
        }]
    }]
})
