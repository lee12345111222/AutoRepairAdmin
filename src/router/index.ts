import {
  RouteRecordRaw, createRouter, createWebHistory
} from 'vue-router';

export interface TData {
  pId?: string;
  id: string;
  path: string;
  name?: string;
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    redirect: '/sys'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/dashboard/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/dashboard/login/register.vue')
  },
  {
    path: '/sys',
    redirect: '/sys/home',
    name: 'dashboard',
    component: () => import('../pages/dashboard/index.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首頁',
          actIndex: 0
        },
        component: () => import('../pages/dashboard/home/index.vue')
      },
      {
        path: 'add',
        name: 'add',
        meta: {
          title: '新增資料',
          actIndex: 1
        },
        component: () => import('../pages/dashboard/home/add.vue')
      },
      {
        path: 'repaired',
        name: 'repaired',
        meta: {
          title: '待維修',
          actIndex: 2
        },
        component: () => import('../pages/dashboard/home/repaired.vue')
      },
      {
        path: 'repairedInfo',
        name: 'repairedInfo',
        meta: {
          title: '待維修',
          actIndex: 3
        },
        component: () => import('../pages/dashboard/home/repairedInfo.vue')
      },
      {
        path: 'checked',
        name: 'checked',
        meta: {
          title: '待檢查',
          actIndex: 3
        },
        component: () => import('../pages/dashboard/home/checked.vue')
      },
      {
        path: 'checkedInfo',
        name: 'checkedInfo',
        meta: {
          title: '待檢查',
          actIndex: 4
        },
        component: () => import('../pages/dashboard/home/checkedInfo.vue')
      },
      {
        path: 'historyList',
        name: 'historyList',
        meta: {
          title: '歷史查詢',
          actIndex: 5
        },
        component: () => import('../pages/dashboard/home/historyList.vue')
      },
      {
        path: 'setting',
        name: 'setting',
        meta: {
          title: '設定頁面',
          actIndex: 6
        },
        component: () => import('../pages/dashboard/home/setting.vue')
      }
    ]
  },
  // 访问一个不存在的路径不会进入404
  {
    path: '/:404(.*)',
    meta: { id: '2' },
    component: () => import('../pages/404/index.vue')
  },
  {
    path: '/404',
    meta: { id: '4' },
    component: () => import('../pages/404/index.vue')
  },
  {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.type && to.meta.type === 'detail') {
    document.title = to.query.name as string;
  } else if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

export default router;
