<template>
  <ul class="menu__container">
    <li class="menu__item" v-for="item in menu" :key="item.path" @click="router.push(item.path)">
      <div class="icon-wrap">
        <vue-svg :name="item.icon"></vue-svg>
      </div>
      {{ item.menuTip }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
const route = useRoute()
const router = useRouter()
console.log(route, router)
interface MenuItem {
  menuTip: string;
  path: string;
  icon: string;
}

const menu: MenuItem[] = [
  {
    menuTip: "首页",
    path: "index",
    icon: 'home'
  },
  {
    menuTip: "文章",
    path: "articles",
    icon: 'articles'
  }
];
</script>
<style lang="scss" scoped>
.menu {
  &__container {
    display: flex;
    flex-direction: column;
    color: #888;
  }
  &__item {
    display: flex;
    $hoverColor: #c2c2c2;
    cursor: pointer;
    padding: 8px 16px 8px;
    transition: 0.2s;
    &:hover {
      color: $hoverColor;
      background-color: #3b3b3b;
      .icon-wrap {
        color: $hoverColor;
      }
    }
  }
}
.icon-wrap {
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
