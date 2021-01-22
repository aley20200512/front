import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/**
 * 路由拦截
 */
router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(to => {
  NProgress.done()
  // 更改标题
  window.document.title = to.meta.title || 'admin'
})

export default router