import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";
// import viteImagemin from "vite-plugin-imagemin";
import { visualizer } from 'rollup-plugin-visualizer';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { Plugin as importToCDN } from 'vite-plugin-cdn-import';
import { viteMockServe } from 'vite-plugin-mock';
import { resolve } from 'path';
import { PluginOption } from 'vite';
import website from '../src/config/website';
export const pluginList = (env: Record<string, string>) =>
    [
        vue(),
        importToCDN({
            modules: [
                {
                    name: 'vue',
                    var: 'Vue',
                    path: 'https://cdn.jsdelivr.net/npm/vue@3.2.25/dist/vue.global.prod.js'
                },
                {
                    name: 'vue-i18n',
                    var: 'VueI18n',
                    path: 'https://unpkg.com/element-plus/dist/locale/zh-cn'
                },
                {
                    name: 'vue-router',
                    var: 'VueRouter',
                    path: 'https://unpkg.com/vue-router@4'
                },
                {
                    name: 'element-plus',
                    var: 'ElementPlus',
                    path: `https://unpkg.com/element-plus@2.2.6/dist/index.full.js`,
					css: 'https://unpkg.com/element-plus@2.2.6/dist/index.css'
                },
                {
					name: 'pinia',
					var: 'Pinia',
					path: 'https://cdn.bootcdn.net/ajax/libs/pinia/2.0.14/pinia.iife.prod.min.js'
				},
                {
					name: 'echarts',
					var: 'echarts',
					path: 'https://cdn.jsdelivr.net/npm/echarts@5.3.2/dist/echarts.min.js'
				}
            ]
        }),
        viteMockServe({
            mockPath: 'mock',
            enable: true,
        }),
        createHtmlPlugin({
            inject: {
				data: {
					title: website.indexTitle
				}
			}
        }),
        // * 可以使用 jsx/tsx 语法
        vueJsx(),
        // * name 可以写在 script 上
        VueSetupExtend(),
        // * 图片压缩
		// viteImagemin({
		// 	gifsicle: { optimizationLevel: 7, interlaced: false },
		// 	optipng: { optimizationLevel: 7 },
		// 	webp: { quality: 75 },
		// 	mozjpeg: { quality: 65 },
		// 	pngquant: { quality: [0.65, 0.9], speed: 4 },
		// 	svgo: {
		// 		plugins: [{ removeViewBox: false }, { removeEmptyAttrs: false }]
		// 	}
		// }),
        // * svg icon
        createSvgIconsPlugin({
            iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
            svgoOptions: true,
            symbolId: '[name]'
        }),
        // * 依赖分析
        env.VITE_REPORT && visualizer()
    ] as PluginOption[]