<template>
  <div class="image-loader-container">
    <img
      :class="`origin ${load ? 'loaded' : ''}`"
      @load="handleLoad"
      :src="placeholderUrl"
      alt=""
      :style="{ opacity: opacity, transition: `${props.duration}ms` }"
    />
    <img
      v-if="!ready"
      @load="HandlePlaceLoad"
      :class="`placeholder ${placeLoad ? 'loaded' : ''}`"
      :src="placeholderUrl"
      alt=""
      :style="{ opacity: placeOpacity, transition: `${props.duration}ms` }"
    />
  </div>  
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
const props = defineProps({
  placeholder: {
    type: String,
    default: 'shin-chan.jpg'
  },
  origin: {
    type: String,
    default: 'shin-chan.jpg'
  },
  duration: {
    type: Number,
    default: 1000,
  },
});
const ready = ref(false);
const placeLoad = ref(false);
const load = ref(false);

const placeholderUrl = computed(()=>{
  const base = 'http://127.0.0.1:5173/src/images/'
  return new URL(props.placeholder, base).href
})

const emit = defineEmits(["load"]);

const opacity = computed(() => {
  return load.value ? 1 : 0;
});
const placeOpacity = computed(() => {
  return load.value ? 0 : 1;
});

const HandlePlaceLoad = () => {
  placeLoad.value = true;
};
const handleLoad = () => {
  load.value = true;
  setTimeout(() => {
    ready.value = true;
    emit("load");
  }, props.duration);
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.image-loader-container {
  overflow: hidden;
  img {
    @include self-fill;
    object-fit: cover;
    visibility: hidden;
    &.loaded {
      visibility: visible;
    }
  }
  .placeholder {
    filter: blur(8vw);
  }
}
</style>
