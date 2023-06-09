<template>
  <div class="home-view-container">
    <div class="sidebar">
      <!-- 左侧导航栏 -->
      <sidebar></sidebar>
    </div>
    <div class="main">
      <!-- 主体视图层 -->
      <div class="view">
        <RouterView></RouterView>
      </div>
    </div>  
  </div>
</template>

<script lang="ts" setup>
import { computed, provide } from "vue";
import sidebar from "@/page/index/sidebar/index.vue";
import { useUserStore, useCommonStore } from "../../store/index";
const uStore = computed(() => useUserStore());
const cStore = computed(() => useCommonStore());
import { useRouter, useRoute } from "vue-router";
import { RouterMenu } from "../../types/global";
const router = useRouter();
const route = useRoute();
/**
 * 在 sidebar/index.vue 中初始化菜单
 * @item item菜单
 * @isInit 是否自动加载
 */
const openMenu = (item: Partial<RouterMenu>, isInit: boolean) => {
  uStore.value.GetMenu(item.parantId).then((data: RouterMenu[]) => {
    // if (data.length !== 0) {
    // }
  });
};
provide("openMenu", openMenu);
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.home-view-container {
  display: flex;
  width: 100%;
  height: 100%;
  .main {
    flex: 1;
    .view {
      height: 100%;
    }
  }
}
</style>
