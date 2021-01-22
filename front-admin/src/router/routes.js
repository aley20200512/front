import layout from '@/layout/layout'

const _import = file => require(`@/pages/${file}`).default

/**
 * 在主框架内显示
 */

const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layout,
    children: [
      {
        path: 'index',
        name: 'index',
        meta: { title: '首页' },
        component: _import('index.vue')
      }
    ]
  }
]

const frameOut = []

export default [
  ...frameIn,
  ...frameOut
]