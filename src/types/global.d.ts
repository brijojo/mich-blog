import { LocationQueryRaw } from "vue-router";
// * 路由菜单
declare interface RouterMenu {
    id?: string;
    parantId: string;
    iconDefault: string;
    label: string;
    path: string;
    icon: string;
    iconBgColor: string;
    children: RouterMenu[];
    query: Record<string, string | null | (string | null)[]>;
    params: Record<string, string | string[]>;
    herf: string;
    fullPath: string;
    meta: { keepAlive?: boolean; isTab?: boolean; isAuth?: boolean; i18n?: string; roles?: string[]; parentId?: string };
    name?: string | ((query: LocationQueryRaw) => string);
    component: string;
    iconColor?: string;
    hideInDesktop?: boolean;
}
// * 路由 tag 标签
declare type RouterTag = Pick<RouterMenu, 'fullPath' | 'meta' | 'label' | 'params' | 'query' | 'path'>;

// * 系统设置状态
declare interface Setting {
    sidebar: string;
    tag: boolean;
    debug: boolean;
    collapse: boolean;
    search: boolean;
    lock: boolean;
    screenshot: boolean;
    fullscren: boolean;
    theme: boolean;
    menu: boolean;
}
// * 加载路由数据的key  
declare interface MenuKey {
    iconDefault: string;
    label: string;
    path: string;
    icon: string;
    children: string;
    query: string;
    href: string;
    meta: string;
}
// * 站点配置
declare interface Website {
    title: string;
    logo: string;
    key: string;
    indexTitle: string;
    tokenTime: number;
    Authorization: string;
    // http的status默认放行不才用统一处理的,
    statusWhiteList: number[];
    // 配置首页不可关闭
    setting: Setting;
    firstPage: {
        name: string;
        path: string;
    }
    // 配置菜单属性
    menu: MenuKey;
}
