import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import components from './global-components'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(router)
// app.config.productionTip = false
components.forEach(c => {
  app.use(c)
})
app.mount('#app')
