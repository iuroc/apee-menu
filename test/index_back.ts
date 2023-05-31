function makeSelect(menu: Menu, x: number = 0, y: number = 0, pid: string = '0') {
    const menuEle = document.createElement('div')
    menuEle.classList.add('menu')
    menuEle.setAttribute('data-mid', pid)
    menuEle.style.top = y + 'px'
    menuEle.style.left = x + 'px'
    menu.forEach(menuItem => {
        const menuItemEle = document.createElement('div')
        menuItemEle.classList.add('item')
        menuItemEle.innerHTML = menuItem.text
        let subId = randString()
        menuItemEle.setAttribute('data-id', subId)
        menuItemEle.setAttribute('data-pid', pid)
        menuEle.append(menuItemEle)
        if (menuItem.subMenu != undefined) {
            const rightIcon = document.createElement('div')
            rightIcon.classList.add('right')
            menuItemEle.append(rightIcon)
            let subMenu = menuItem.subMenu
            menuItemEle.addEventListener('mouseenter', () => {
                if (menuItemEle.classList.contains('hover')) return
                removeChild(pid)
                menuItemEle.classList.add('hover')
                let thisWidth = menuItemEle.offsetWidth
                let thisHeight = menuItemEle.offsetTop
                makeSelect(subMenu, x + thisWidth, thisHeight, subId)
            })
        } else {
            menuItemEle.addEventListener('mouseenter', () => {
                removeChild(pid)
            })
        }
    })
    document.body.append(menuEle)
}

function removeChild(pid: string) {
    const hoverEle = document.querySelector(`[data-pid="${pid}"].hover`) as HTMLDivElement
    if (!hoverEle) return
    hoverEle.classList.remove('hover')
    let id = hoverEle.getAttribute('data-id')
    document.querySelector(`[data-mid="${id}"]`)?.remove()
}

/** 生成随机字符串 */
function randString(length: number = 10) {
    let result = ''
    for (var i = 0; i < length; i++) {
        let randomAscii = Math.floor(Math.random() * 26) + 97
        result += String.fromCharCode(randomAscii)
    }
    return result
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