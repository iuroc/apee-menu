# ApeeMenu

> 无限层级下拉菜单

![ApeeMenu](https://github.com/oyps/apee-menu/assets/61752998/2ed4b03b-b15f-451e-912b-852f4b264565)


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

## 使用方法

### 安装 `ApeeMenu`

1. 通过 npm 安装

    ```bash
    npm install apee-menu
    ```
2. 通过 `script` 标签引入

    ```html
    <!-- 未压缩版本 -->
    <script src="https://cdn.jsdelivr.net/npm/apee-menu/dist/apee-menu.js"></script>
    <!-- 压缩版本 -->
    <script src="https://cdn.jsdelivr.net/npm/apee-menu/dist/apee-menu.min.js"></script>
    ```
3. 导入 `ApeeMenu`

    ```ts
    import { ApeeMenu } from 'apee-menu'
    const { ApeeMenu } = require('apee-menu')
    ```
4. 使用 `ApeeMenu`

    ```ts
    const apeeMenu = new ApeeMenu()
    const menuConfig = [
        {
            text: '文件',
            subMenu: [
                { text: '新建文本文件' },
                { text: '新建文件' },
                { text: '新建窗口' },
                {
                    text: '打开文件',
                    subMenu: [
                        { text: '新建文本文件' },
                        { text: '新建文件' },
                        { text: '新建窗口' },
                        { text: '打开文件' },
                    ]
                },
            ]
        }
    ]
    apeeMenu.setMenuConfig(menuConfig)
    apeeMenu.setLocation(100, 50)
    document.querySelector('button').onclick = function () {
    apeeMenu.show()
    }
    ```

### 导入 CSS
    
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/apee-menu/css/style.css">
```

### 创建 HTML 按钮

请为需要设置点击展开菜单事件的元素增加 `apee-menu` 类。

```html
<button class="apee-menu"></button>
```

## 环境搭建

- 安装依赖：`npm install`
- 打包编译：`npm run build`

## 项目信息

- 作者：欧阳鹏
- 日期：2023 年 6 月 1 日
