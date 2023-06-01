
/**
 * 多层级下拉菜单
 * @author 欧阳鹏
 * @version 1.0.2
 */
export class ApeeMenu {
    /** 菜单配置 */
    private menuConfig: Menu
    /** 根菜单位置 */
    private location: {
        /** 根菜单距离页面左边距离 */
        left: number
        /** 根菜单距离页面顶部距离 */
        top: number
    }
    /** 根菜单 ID */
    private rootMenuId: string
    public constructor(initOption?: InitOption) {
        this.menuConfig = initOption?.menuConfig ?? []
        this.location = {
            left: initOption?.left ?? 0,
            top: initOption?.top ?? 0
        }
        this.rootMenuId = this.randString()
        window.addEventListener('click', (event) => {
            const taregt = event.target as HTMLElement
            if (taregt.classList.contains('apee-menu'))
                return
            if (!taregt.hasAttribute('data-root-menu-id'))
                this.remove()
            else if (taregt.getAttribute('data-root-menu-id') != this.rootMenuId)
                this.remove()
        })
    }
    /** 移除页面中所有菜单 */
    private remove() {
        document.querySelectorAll(`[data-root-menu-id="${this.rootMenuId}"]`).forEach(
            ele => ele.remove()
        )
    }
    /** 设置菜单配置 */
    public setMenuConfig(menuConfig: Menu) {
        this.menuConfig = menuConfig
        return this
    }
    /**
     * 设置根菜单位置
     * @param left 根菜单距离页面左边距离
     * @param top 根菜单距离页面顶部距离
     */
    public setLocation(left: number, top: number) {
        this.location = { left, top }
        return this
    }
    /** 显示根菜单 */
    public show() {
        this.makeNewMenu(this.menuConfig, this.location.left, this.location.top, this.rootMenuId)
    }
    /**
    * 生成新的菜单
    * @param menuConfig 菜单配置
    * @param left 菜单左边距
    * @param top 菜单顶边距
    * @param menuId 菜单 ID，同时是菜单项的父 ID
    */
    private makeNewMenu(menuConfig: Menu, left: number, top: number, menuId: string) {
        // 如果没有菜单项，则不生成菜单
        if (menuConfig.length == 0) return
        /** 新生成的菜单元素 */
        const menuEle = document.createElement('div')
        menuEle.classList.add('menu')
        menuEle.setAttribute('data-menu-id', menuId)
        // 设置所属的根菜单 ID
        menuEle.setAttribute('data-root-menu-id', this.rootMenuId)
        // 设置菜单位置
        menuEle.style.position = 'fixed'
        menuEle.style.left = left + 'px'
        menuEle.style.top = top + 'px'
        // 生成菜单项
        menuConfig.forEach(itemConfig => {
            /** 新生成的菜单项元素 */
            const itemEle = document.createElement('div')
            itemEle.classList.add('item')
            /** 新生成的菜单项的 `itemId`，也是其子菜单的 `menuId` */
            let newItemId = this.randString()
            itemEle.setAttribute('data-item-id', newItemId)
            itemEle.setAttribute('data-root-menu-id', this.rootMenuId)
            if (itemConfig.disabled) itemEle.classList.add('disabled')
            /** 左边的选中图标元素 */
            const checkEle = document.createElement(itemConfig.isChecked ? 'img' : 'div')
            checkEle.classList.add('check')
            checkEle.setAttribute('data-root-menu-id', this.rootMenuId)
            // 需要被选中，则为其添加图片路径
            if (itemConfig.isChecked) {
                const imgEle = checkEle as HTMLImageElement
                imgEle.src = itemConfig.disabled ? 'https://cdn.jsdelivr.net/npm/apee-menu/img/check-disabled.svg' : 'https://cdn.jsdelivr.net/npm/apee-menu/img/check.svg'
            }
            /** 是否存在子菜单 */
            let hasSubMenu = Boolean(itemConfig.subMenu && itemConfig.subMenu.length > 0)
            // 右边图标元素
            const rightEle = document.createElement(hasSubMenu ? 'img' : 'div')
            rightEle.classList.add('right')
            rightEle.setAttribute('data-root-menu-id', this.rootMenuId)
            // 存在子菜单，绑定鼠标悬停展开子菜单事件
            if (hasSubMenu) {
                const imgEle = rightEle as HTMLImageElement
                imgEle.src = itemConfig.disabled ? 'https://cdn.jsdelivr.net/npm/apee-menu/img/right-disabled.svg' : 'https://cdn.jsdelivr.net/npm/apee-menu/img/right.svg'
                itemEle.addEventListener('mouseenter', () => {
                    if (itemEle.classList.contains('hover')) return
                    const rect = itemEle.getBoundingClientRect()
                    let top = rect.top - 5
                    let left = rect.width + rect.left + 5
                    this.removeSubMenu(menuId)
                    itemEle.classList.add('hover')
                    this.makeNewMenu(itemConfig.subMenu as Menu, left, top, newItemId)
                })
            } else {
                itemEle.addEventListener('mouseenter', () => {
                    this.removeSubMenu(menuId)
                })
                itemEle.addEventListener('click', () => {
                    if (itemConfig.autoClose || itemConfig.autoClose == undefined) this.remove()
                    if (itemConfig.autoCheck) {
                        if (itemConfig.oneCheck)
                            menuConfig.forEach(itemConfig => {
                                if (itemConfig.oneCheck)
                                    itemConfig.isChecked = false
                            })
                        itemConfig.isChecked = itemConfig.oneCheck ? true : !itemConfig.isChecked
                    }
                })
            }

            if (itemConfig.onclick != undefined) {
                const { onclick } = itemConfig
                itemEle.addEventListener('click', (event) => {
                    onclick(itemConfig, event)
                })
            }

            const textEle = document.createElement('div')
            textEle.innerHTML = itemConfig.text
            textEle.classList.add('text')
            textEle.setAttribute('data-root-menu-id', this.rootMenuId)
            menuEle.append(itemEle)
            itemEle.append(checkEle, textEle, rightEle)
        })
        document.body.appendChild(menuEle)
    }
    /**
     * 移除指定菜单的所有子菜单
     * @param menuId 需要移除子菜单的菜单 ID
     */
    private removeSubMenu(menuId: string) {
        /** 父菜单 ID */
        const menuEle = document.querySelector(`[data-menu-id="${menuId}"]`) as HTMLDivElement
        if (!menuEle) return
        /** 父菜单中，处于聚焦的菜单项 */
        const hoverItemEle = menuEle.querySelector('.hover')
        // 当前父菜单，没有聚焦状态的菜单项，则不需要移除子菜单
        if (!hoverItemEle) return
        /** 之前处于聚焦状态的菜单项 ID */
        let hoverItemId = hoverItemEle.getAttribute('data-item-id') as string
        const subMenuEle = document.querySelector(`[data-menu-id="${hoverItemId}"]`) as HTMLDivElement
        this.removeSubMenu(hoverItemId)
        hoverItemEle.classList.remove('hover')
        subMenuEle.remove()
    }
    /** 生成随机字符串 */
    private randString(length: number = 10) {
        let result = ''
        for (var i = 0; i < length; i++) {
            let randomAscii = Math.floor(Math.random() * 26) + 97
            result += String.fromCharCode(randomAscii)
        }
        return result
    }
}

/** 初始化配置类 */
type InitOption = {
    /** 菜单配置 */
    menuConfig?: Menu,
    /** 根菜单距离页面左边距离 */
    left?: number,
    /** 根菜单距离页面顶部距离 */
    top?: number
}

/** 菜单类型 */
export type Menu = Item[]
/** 菜单项 */
type Item = {
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

Object.defineProperty(window, 'ApeeMenu', {
    value: ApeeMenu
})