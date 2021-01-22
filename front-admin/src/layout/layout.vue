<template>
  <div class="m-layout">
     <!-- 半透明遮罩 -->
    <div class="m-layout-mask"></div>
    <div class="m-layout-content" flex="dir:top">
      <div class="m-theme-header">
         顶栏
      </div>
      <div class="m-theme-container" flex="dir:top">
        <!-- 侧边栏 -->
        <div></div>
        <!-- 内容 -->
        <div>
          <div class="d2-theme-container-main-body" flex-box="1">
            <router-view/>
            <!-- <transition :name="transitionActive ? 'fade-transverse' : ''">
              <keep-alive :include="keepAlive">
                <router-view :key="routerViewKey" />
              </keep-alive>
            </transition> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<style>
@import './layout.scss';
</style>
