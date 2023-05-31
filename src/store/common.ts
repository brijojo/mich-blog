import { defineStore } from "pinia";
import { PersistedStateOptions } from "pinia-plugin-persistedstate";
import website from "../config/website";
import { Setting, Website } from "../types/global";
import { setStore } from "../utils/store"

interface CommonStore {
    language: string;
    isCollapse: boolean;
    isFullScreen: boolean;
    isMenu: boolean;
    isSearch: boolean;
    isRefresh: boolean;
    isLock: boolean;
    themeName: string;
    lockPasswd: string;
    website: Website;
    setting: Setting;
}
// pinia持久化参数配置
export const piniaPersistConfig = (key: string) => {
    const persist: PersistedStateOptions = {
        key,
        storage: window.localStorage
    };
    return persist;
}

export const useCommonStore = defineStore({
    id: 'CommonStore',
    state: (): CommonStore => ({
        language: 'zh-cn',
        isCollapse: false,
        isFullScreen: false,
        isMenu: true,
        isSearch: false,
        isRefresh: true,
        isLock: false,
        themeName: 'default',
        lockPasswd: '',
        website: website,
        setting: website.setting,
    }),
    getters: {
        getLanguage: state => state.language,
        getSetting: state => state.setting,
        getThemeName: state => state.themeName,
        getIsMacOs: state => state.themeName === 'mac-os',
        getIsRefresh: state => state.isRefresh,
        getIsSearch: state => state.isSearch,
        gerIsHorizontal: state => state.setting.sidebar === 'horizontal',
        getIsCollapse: state => state.isCollapse,
        getIsLock: state => state.isLock,
        getIsFullScreen: state => state.isFullScreen,
        getIsMenu: state => state.isMenu,
        getLockPasswd: state => state.lockPasswd
    },
    actions: {
        SET_LANGUAGE(language: string) {
            this.language = language;
            setStore<string>({
                name: 'language',
                content: language
            })
        },
        SET_COLLAPSE() {
            this.isCollapse = !this.isCollapse;
        },
        SET_IS_MENU(menu: boolean) {
            this.isMenu = menu;
        },
        SET_IS_REFRESH(refresh: boolean) {
            this.isRefresh = refresh;
        },
        SET_IS_SEARCH(search: boolean) {
            this.isSearch = search;
        },
        SET_FULLSCREEN() {
            this.isFullScreen = !this.isFullScreen;
        },
        SET_LOCK() {
            this.isLock = true;
        },
        SET_THEME_NAME(themeName: string) {
            this.themeName = themeName;
        },
        SET_LOCK_PASSWD(lockPasswd: string) {
            this.lockPasswd = lockPasswd;
        },
        CLEAR_LOCK() {
            this.isLock = false;
            this.lockPasswd = '';
        }
    },
    perist: piniaPersistConfig('CommonStore')
})
