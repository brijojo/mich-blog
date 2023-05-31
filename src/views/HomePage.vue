<template>
  <div class="home-view-container">
    <div class="side-bar-wrapper">
      <div class="user__wrapper">
        <User placeholder="shin-chan.jpg" class="user__info"></User>
      </div>
      <Contact></Contact>
    </div>
    <div class="content-wrapper"><BgImage /></div>
  </div>
</template>

<script lang="ts" setup>
// import ImageLoader from "@/components/ImageLoader/index.vue";
import BgImage from "@/components/BgImage/index.vue";
import Contact from "@/components/Contact/index.vue";
import User from "@/components/User/index.vue";
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.home-view-container {
  display: flex;
  width: 100%;
  height: 100%;
  .side-bar-wrapper {
    width: 300px;
    background-color:#2e2e2e;
    padding: 16px;
    box-sizing: border-box;
    .user{
      &__wrapper{
        width: 100%;
        height: 220px;
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
  .content-wrapper {
    flex: 1;
  }
}
.icon {
  &-github {
    font-size: 20px;
  }
}
</style>
