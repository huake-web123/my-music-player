import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout/Layout'
Vue.use(Router)

export const constantRouteMap = [
  // {
  //   path: '/',
  //   name: 'landing-page',
  //   // component: require('@/components/LandingPage').default
  //   redirect: '/main/discover'
  // },
  {
    path: '/',
    redirect: '/main',
    hide: true
  },
  {
    path: '/main',
    name: '推荐',
    component: Layout,
    redirect: '/main/discover',
    children: [
      {
        name: '发现音乐',
        path: 'discover',
        icon: 'discover',
        component: require('@/views/main/discover').default
      },
      {
        name: '私人FM',
        path: 'personal',
        icon: 'personal-fm',
        component: require('@/views/main/personal').default
      },
      {
        name: 'MV',
        path: 'mv',
        icon: 'mv',
        component: require('@/views/main/mv').default
      },
      {
        name: '朋友',
        path: 'friends',
        icon: 'people',
        component: require('@/views/main/friends').default
      }
    ]
  },
  {
    path: '/mymusic',
    name: '我的音乐',
    component: Layout,
    redirect: '/main/discover',
    children: [
      {
        name: 'iTunes音乐',
        path: 'itunes',
        icon: 'itunes',
        component: require('@/views/mymusic/itunes').default
      },
      {
        name: '下载的音乐',
        path: 'download',
        icon: 'download',
        component: require('@/views/mymusic/download').default
      },
      {
        name: '我的歌手',
        path: 'singner',
        icon: 'my',
        component: require('@/views/mymusic/singner').default
      },
      {
        name: '我的MV',
        path: 'mv',
        icon: 'mv',
        component: require('@/views/mymusic/mv').default
      },
      {
        name: '我的电台',
        path: 'radio',
        icon: 'radio-station',
        component: require('@/views/mymusic/station').default
      }
    ]
  },
  {
    path: '/created',
    name: '创建的歌单',
    component: Layout,
    redirect: '/created/like',
    children: [
      {
        name: '我喜欢的音乐',
        path: 'like',
        icon: 'heart',
        component: require('@/views/created/like').default
      },
      {
        name: '你送给我的西班牙馅饼',
        path: 'list-1',
        icon: 'list',
        component: require('@/views/created/like').default
      },
      {
        name: '你送给我的西班牙馅饼2',
        path: 'list-2',
        icon: 'list',
        component: require('@/views/created/like').default
      },
      {
        name: '你送给我的西班牙馅饼3',
        path: 'list-3',
        icon: 'list',
        component: require('@/views/created/like').default
      },
      {
        name: '你送给我的西班牙馅饼4',
        path: 'list-4',
        icon: 'list',
        component: require('@/views/created/like').default
      },
      {
        name: '你送给我的西班牙馅饼9',
        path: 'list-9',
        icon: 'list',
        component: require('@/views/created/like').default
      },
      {
        name: '你送给我的西班牙馅饼13',
        path: 'list-13',
        icon: 'list',
        component: require('@/views/created/like').default
      },
      {
        name: '你送给我的西班牙馅饼14',
        path: 'list-14',
        icon: 'list',
        component: require('@/views/created/like').default
      },
      {
        name: '你送给我的西班牙馅饼5',
        path: 'list-5',
        icon: 'list',
        component: require('@/views/created/like').default
      },
      {
        name: '你送给我的西班牙馅饼6',
        path: 'list-6',
        icon: 'list',
        component: require('@/views/created/like').default
      },
      {
        name: '你送给我的西班牙馅饼7',
        path: 'list-7',
        icon: 'list',
        component: require('@/views/created/like').default
      }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouteMap
})
