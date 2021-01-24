<template>
  <a-config-provider>
    <!-- <a-spin size="large" :delay="200" :spinning="loading"> -->
      <a-layout class="classic-layout-container">
         <!-- 侧边栏 -->
        <a-layout-sider width="200" v-model:collapsed="collapsed" :trigger="null" collapsible>
          <div class="logo classic-text-center" v-if="!collapsed">文档记录后台</div>
          <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
            <a-sub-menu v-for="menu in menus" :key="menu.path">
              <template #title>
                <span>{{ menu.title }}</span>
              </template>
              <a-menu-item v-for="m in menu.children" :key="m.path">
                <router-link :to="m.path">{{ m.title }}</router-link>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout style="transition:all .2s;min-height:100vh">
          <!-- 顶栏 -->
          <a-layout-header class="header" style="background: #fff; padding: 0">
            <div>
              <menu-unfold-outlined v-if="collapsed" class="trigger" @click="collapsed = !collapsed"/>
              <menu-fold-outlined v-else class="trigger" @click="collapsed = !collapsed" />
            </div>
          </a-layout-header>
          <a-layout style="padding: 24px">
            <!-- 内容 -->
            <a-layout-content :style="{ minHeight: '280px' }">
              <router-view/>
            </a-layout-content>
          </a-layout>
        </a-layout>
      </a-layout>
    <!-- </a-spin> -->
  </a-config-provider>
</template>

<script>
// V4更新后引入Icon的方法 https://2x.antdv.com/components/icon-cn/
import { MenuUnfoldOutlined, MenuFoldOutlined,} from '@ant-design/icons-vue'
import menus from './menus'
export default {
  name: 'layout',
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  data () {
    return {
      menus,
      selectedKeys: [''],
      collapsed: false,
      loading: false
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/theme/register.scss';
.classic-layout-container {
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    height: 64px;
    line-height: 64px;
    background: #002140;
    color: #fff;
    font-size: 20px;
  }
}
</style>
