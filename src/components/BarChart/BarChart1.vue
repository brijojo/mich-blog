<template>
  <ul class="wrap">
    <li class="country" v-for="(it, ind) in gptRef" :key="it.country">
      <div class="info-wrap">
        <span class="name">{{ it.country }}</span>
        <div
          class="bar"
          :style="{ width: it.size + 'px', backgroundColor: it.color }"
        />
      </div>
      <span>{{ it.value }}</span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import useGdp from "../composition/useGdp";
const colors: string[] = ["#000", "#000", "#000", "#000", "#000"];
const props = defineProps(["gdp", "max"]);

const gptRef = computed(() => {
  return useGdp(props.gdp, 400);
});
</script>

<style lang="scss" scoped>
.wrap {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.country {
  display: flex;
  width: 550px;
  .info-wrap {
    display: flex;
  }
  .name {
    margin-right: 6px;
  }

  .bar {
    margin-right: 6px;
  }
}
</style>
