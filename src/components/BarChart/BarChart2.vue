<template>
    <ul>
        <li v-for="it, ind in props.gdp" :key="it.country">
            <span class="name">{{ it.country }}</span>
            <div class="bar" :style="{ width: it.value, backgroundColor: colors[ind] }"></div>
        </li>
    </ul>
</template>
    
<script lang="ts" setup>
const colors: string[] = ["#000", "#000", "#000", "#000", "#000"]
const props = defineProps(['gdp', 'max'])
</script>
    
<style lang="scss" scoped></style>