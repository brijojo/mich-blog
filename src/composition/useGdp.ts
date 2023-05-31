import { ref, unref, computed, watch, watchEffect } from 'vue'
import gsap from "gsap"
const colors = ["#334552", "#b34335", "#6e9fa5", "#a2c3ac", "#c8846c"]
export default function useGdp(gdp: any, maxSize: any) {
    const maxValue = computed(() => {
        if (gdp.length) {
            return Math.max(...gdp.map((it: any) => it.value))
        }
        return 0
    });
    const bars = ref([] as any[])
    const barsTarget = computed(() => {
        console.log('计算', barsTarget)
        return gdp.map((it: any, i: number) => {
            return {
                ...it,
                color: colors[i % colors.length],
                size: it.value / maxValue.value * maxSize
            }
        })
    })
    watchEffect(() => {
        console.log('执行')
        for (let i = 0; i < barsTarget.value.length; i++) {
            if (!bars.value[i]) {
                bars.value[i] = {
                    ...barsTarget.value[i],
                    size: 0,
                    value: 0,
                }
            }
            gsap.to(bars.value[i], {
                ...barsTarget.value[i],
                duration: 1,
            })
        }
    })
    return unref(bars)

}