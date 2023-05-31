<template>
  <div
    ref="container"
    class="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <img ref="img" :style="imgPosition" :src="props.src" alt="dragon" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from "vue";
import imgsrc from "@/images/dragon.jpg";
const container = ref();
const img = ref();
const containerSize = ref();
const innerSize = ref();
const mouseX = ref(0);
const mouseY = ref(0);

const ready = ref(false);

const props = defineProps({
  src: {
    type: String,
    default: imgsrc,
  },
});

const imgPosition = computed(() => {
  if (!containerSize.value) return;
  const extraWidth = containerSize.value.width - innerSize.value.width;
  const extraHeight = containerSize.value.height - innerSize.value.height;
  const left = (extraWidth / containerSize.value.width) * mouseX.value;
  const top = (extraHeight / containerSize.value.height) * mouseY.value;
  return {
    transform: `translate(${left}px, ${top}px)`,
    transition: ready.value ? "all 0.2s linear" : "all 0s",
  };
});

const center = computed(() => {
  console.log(containerSize.value);
  return {
    x: containerSize.value.width / 2,
    y: containerSize.value.height / 2,
  };
});

const handleMouseMove = (e: any) => {
  const rect = container.value.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
};

const handleMouseLeave = () => {
  mouseX.value = center.value.x;
  mouseY.value = center.value.y;
};

const initSize = () => {
  containerSize.value = {
    width: container.value.clientWidth,
    height: container.value.clientHeight,
  };
  innerSize.value = {
    width: img.value.clientWidth,
    height: img.value.clientHeight,
  };
};
onMounted(() => {
  initSize();
  mouseX.value = center.value.x;
  mouseY.value = center.value.y;
  // 等待位置初始化完毕
  setTimeout(() => {
    ready.value = true;
  }, 0);
  window.addEventListener("resize", initSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", initSize);
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    width: 110%;
    height: 110%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: -1;
    // transition: all 0.2s linear;
  }
}
</style>  
