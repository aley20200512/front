import layout from '@/layout/layout'

const _import = file => require(`@/pages/${file}`).default

export default {
  path: '/performance',
  component: layout,
  redirect: { name: 'performance' },
  children: [
    {
      path: 'index',
      name: 'performance',
      component: _import('performance/index'),
      meta: { title: '前端性能篇' }
    }
  ]
}