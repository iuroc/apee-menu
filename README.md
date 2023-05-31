# Apee Menu

> 无限层级下拉菜单

![Apee Menu](https://github.com/oyps/apee-menu/assets/61752998/2ed4b03b-b15f-451e-912b-852f4b264565)


## 项目信息

- 作者：欧阳鹏
- 日期：2023 年 6 月 1 日

## 功能介绍

- JSON 配置
- 可设置自动勾选/取消勾选
- 可设置当前菜单限制单选
- 可设置自动收起菜单

## 类型定义

```ts
/** 菜单类型 */
export type Menu = Item[]
/** 菜单项 */
export type Item = {
    /** 菜单文本 */
    text: string,
    /** 子菜单列表 */
    subMenu?: Menu,
    /** 是否勾选 */
    isChecked?: boolean,
    /** 是否禁用 */
    disabled?: boolean,
    /** 点击自动关闭菜单，只对无子菜单的菜单项有效，默认 `true` */
    autoClose?: boolean,
    /** 自动勾选/取消勾选，只对无子菜单的菜单项有效，默认 `false` */
    autoCheck?: boolean,
    /** 是否限定单选，只对无子菜单的菜单项有效，默认 `false` */
    oneCheck?: boolean,
    /** 单击事件 */
    onclick?: ((
        /** 当前菜单项配置 */
        itemConfig: Item,
        /** 鼠标事件对象 */
        event: MouseEvent
    ) => void) | (() => void)
}
```

## 环境搭建

- 安装依赖：`npm install`
- 打包编译：`npm run build`
