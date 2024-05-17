import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // @ts-ignore
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/delete-cookie',
      name: 'delete cookie',
      component: () => import('../views/DeleteCookieView.vue')
    },
    {
      path:'/resume',
      name:'resume',
      component: () => import('../components/resume/Resume.vue')
    },
    // parent component put <router-view> in it
    // and for child router, which component directly use the component.ts(not view.ts)
    {
      path: '/data',
      name: 'data',
      // @ts-ignore
      component: () => import('../views/DataView.vue'),
      children: [
        {
          path: 'supermarket-test',
          name: 'supermarket-test',
          component: () => import('../components/DataView/SupermarketTest.vue')
        },
        {
          path: 'article-table',
          name: 'article-table',
          component: () => import('../components/DataView/ArticleTable.vue')
        },
        {
          path: 'bulletin',
          name: 'bulletin',
          // @ts-ignore
          component: () => import('../components/DataView/BulletinData.vue')
        },
        {
          path: 'bar-chart',
          name: 'bar-chart',
          // @ts-ignore
          component: () => import('../components/DataView/BarChart.vue')
        },
        {
          path: 'line-chart',
          name: 'line-chart',
          // @ts-ignore
          component: () => import('../components/DataView/LineChart.vue')
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      // @ts-ignore
      component: () => import('../views/tests/TestView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // @ts-ignore
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      // @ts-ignore
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/new-article',
      name: 'new-article',
      // @ts-ignore
      component: () => import('../components/HomeView/Write.vue')
    },
    {
      path: '/article/specific-tags/:tags',
      name: 'specific-tags',
      component: () => import('../views/SpecificTagsView.vue')
    },
    {
      path: '/:author/:title',
      name: 'article-select',
      // @ts-ignore
      component: () => import('../views/ArticleView.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      // @ts-ignore
      component: () => import('../views/SettingView.vue')
    },
    {
      path: '/setting/administrator',
      name: 'administrator',
      component: () => import('../views/AdministratorView.vue')
    }
  ]
})

export default router
