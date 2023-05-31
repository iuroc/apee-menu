function makeSelect(menu: Menu, x: number = 0, y: number = 0) {
    const menuEle = document.createElement('div')
    menuEle.classList.add('menu')
    menuEle.style.top = y + 'px'
    menuEle.style.left = x + 'px'
    menu.forEach(menuItem => {
        const menuItemEle = document.createElement('div')
        menuItemEle.classList.add('item')
        menuItemEle.innerHTML = menuItem.text
        menuEle.append(menuItemEle)
        if (menuItem.subMenu != undefined) {
            const rightIcon = document.createElement('div')
            rightIcon.classList.add('right')
            menuItemEle.append(rightIcon)
            let subMenu = menuItem.subMenu
            menuItemEle.addEventListener('mouseenter', () => {
                if (menuItemEle.classList.contains('hover')) return
                menuItemEle.classList.add('hover')
                let thisWidth = menuItemEle.offsetWidth
                let thisHeight = menuItemEle.offsetTop
                makeSelect(subMenu, x + thisWidth, thisHeight)
            })
        }
    })
    menuEle.addEventListener('mouseleave', () => {
        if (menuEle.classList.contains('hover')) return
        menuEle.remove()
    })
    document.body.append(menuEle)
    console.log(menuEle)
}

/** 菜单 */
type Menu = Item[]
/** 菜单项 */
type Item = {
    /** 菜单文本 */
    text: string,
    /** 子菜单列表 */
    subMenu?: Menu
}
const menu: Menu = [
    {
        text: '文件',
        subMenu: [
            {
                text: '新建文本文件'
            },
            {
                text: '新建文件'
            },
            {
                text: '新建窗口'
            },
            {
                text: '打开文件'
            },
            {
                text: '打开文件夹'
            },
            {
                text: '从文件夹打开工作区'
            },
            {
                text: '打开最近的文件',
                subMenu: [
                    {
                        text: 'JavaScript 代码'
                    },
                    {
                        text: 'Python 代码'
                    },
                    {
                        text: 'Go 代码'
                    }
                ]
            },
            {
                text: '将文件夹添加到工作区'
            },
            {
                text: '将工作区另存为'
            },
            {
                text: '共享',
                subMenu: [
                    {
                        text: '导出配置文件（默认）'
                    },
                    {
                        text: '导入配置文件'
                    }
                ]
            }
        ]
    },
    {
        text: '一级菜单项'
    }
]

makeSelect(menu)