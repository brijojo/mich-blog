<template>
  <div class="side-bar__wrapper">
    <div class="user__wrapper">
      <User placeholder="shin-chan.jpg" class="user__info"></User>
    </div>
    <Menu></Menu>
    <div class="contact__wrapper"><Contact></Contact></div>
  </div>
</template>

<script lang="ts" setup>
import Contact from "@/components/Contact/index.vue";   
import User from "@/components/User/index.vue";
import Menu from "@/components/Menu/index.vue";
// import { computed, inject } from "vue";
// import { RouterMenu } from "../../../types/global";
// import { useCommonStore, useUserStore } from "@/store/index";
// const uStore = computed(()=>useUserStore())
// const cStore = computed(()=>useCommonStore())
// const menuId = computed(()=>uStore.value.getMenuId)
// console.log(menuId)

// const injectOpenMenu = inject<(item: Partial<RouterMenu>, isInit: boolean) => void>('openMenu')
// injectOpenMenu?.({ parantId: menuId.value.parantId}, true)
</script>   

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.side-bar {
  &__wrapper {
    width: 300px;
    height: 100%;
    background-color: #2e2e2e;
    padding: 16px 0;
    box-sizing: border-box;
    .user {
      &__wrapper {
        width: 100%;
        height: 200px;
        @include flex;
      }
      &__info {
        width: 120px;
        height: 120px;
        position: relative;
        border-radius: 50%;
      }
    }
  }
}
.content__wrapper {
  flex: 1;
}
.contact__wrapper{
  padding: 0 16px;
}
</style>
