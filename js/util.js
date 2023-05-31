"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNewMenu = exports.removeSubMenu = exports.randString = void 0;
/** 生成随机字符串 */
function randString(length) {
    if (length === void 0) { length = 10; }
    var result = '';
    for (var i = 0; i < length; i++) {
        var randomAscii = Math.floor(Math.random() * 26) + 97;
        result += String.fromCharCode(randomAscii);
    }
    return result;
}
exports.randString = randString;
/**
 * 移除指定菜单的所有子菜单
 * @param menuId 需要移除子菜单的菜单 ID
 */
function removeSubMenu(menuId) {
    if (typeof menuId != 'string')
        menuId = '0';
    /** 父菜单 ID */
    var menuEle = document.querySelector("[data-menu-id=\"".concat(menuId, "\"]"));
    if (!menuEle)
        return;
    /** 父菜单中，处于聚焦的菜单项 */
    var hoverItemEle = menuEle.querySelector('.hover');
    // 当前父菜单，没有聚焦状态的菜单项，则不需要移除子菜单
    if (!hoverItemEle)
        return;
    /** 之前处于聚焦状态的菜单项 ID */
    var hoverItemId = hoverItemEle.getAttribute('data-item-id');
    var subMenuEle = document.querySelector("[data-menu-id=\"".concat(hoverItemId, "\"]"));
    removeSubMenu(hoverItemId);
    hoverItemEle.classList.remove('hover');
    subMenuEle.remove();
}
exports.removeSubMenu = removeSubMenu;
/**
 * 生成新的菜单
 * @param menuConfig 菜单配置
 * @param left 菜单左边距
 * @param top 菜单顶边距
 * @param menuId 菜单 ID，同时是菜单项的父 ID
 */
function makeNewMenu(menuConfig, left, top, menuId) {
    if (menuId === void 0) { menuId = '0'; }
    // 如果没有菜单项，则不生成菜单
    if (menuConfig.length == 0)
        return;
    /** 新生成的菜单元素 */
    var menuEle = document.createElement('div');
    menuEle.classList.add('menu');
    menuEle.setAttribute('data-menu-id', menuId);
    menuEle.setAttribute('data-menu-app', 'true');
    // 设置菜单位置
    menuEle.style.position = 'fixed';
    menuEle.style.left = left + 'px';
    menuEle.style.top = top + 'px';
    // 生成菜单项
    menuConfig.forEach(function (itemConfig) {
        /** 新生成的菜单项元素 */
        var itemEle = document.createElement('div');
        itemEle.classList.add('item');
        /** 新生成的菜单项的 `itemId`，也是其子菜单的 `menuId` */
        var newItemId = randString();
        itemEle.setAttribute('data-item-id', newItemId);
        itemEle.setAttribute('data-menu-app', 'true');
        if (itemConfig.disabled)
            itemEle.classList.add('disabled');
        /** 左边的选中图标元素 */
        var checkEle = document.createElement(itemConfig.isChecked ? 'img' : 'div');
        checkEle.classList.add('check');
        checkEle.setAttribute('data-menu-app', 'true');
        // 需要被选中，则为其添加图片路径
        if (itemConfig.isChecked) {
            var imgEle = checkEle;
            imgEle.src = itemConfig.disabled ? 'img/check-disabled.svg' : 'img/check.svg';
        }
        /** 是否存在子菜单 */
        var hasSubMenu = Boolean(itemConfig.subMenu && itemConfig.subMenu.length > 0);
        // 右边图标元素
        var rightEle = document.createElement(hasSubMenu ? 'img' : 'div');
        rightEle.classList.add('right');
        rightEle.setAttribute('data-menu-app', 'true');
        // 存在子菜单，绑定鼠标悬停展开子菜单事件
        if (hasSubMenu) {
            var imgEle = rightEle;
            imgEle.src = itemConfig.disabled ? 'img/right-disabled.svg' : 'img/right.svg';
            itemEle.addEventListener('mouseenter', function () {
                if (itemEle.classList.contains('hover'))
                    return;
                var rect = itemEle.getBoundingClientRect();
                var top = rect.top - 5;
                var left = rect.width + rect.left + 5;
                removeSubMenu(menuId);
                itemEle.classList.add('hover');
                makeNewMenu(itemConfig.subMenu, left, top, newItemId);
            });
        }
        else {
            itemEle.addEventListener('mouseenter', function () {
                removeSubMenu(menuId);
            });
            itemEle.addEventListener('click', function () {
                if (itemConfig.autoClose || itemConfig.autoClose == undefined)
                    removeSubMenu();
                if (itemConfig.autoCheck) {
                    if (itemConfig.oneCheck)
                        menuConfig.forEach(function (itemConfig) {
                            if (itemConfig.oneCheck)
                                itemConfig.isChecked = false;
                        });
                    itemConfig.isChecked = itemConfig.oneCheck ? true : !itemConfig.isChecked;
                }
            });
        }
        if (itemConfig.onclick != undefined) {
            var onclick_1 = itemConfig.onclick;
            itemEle.addEventListener('click', function (event) {
                onclick_1(itemConfig, event);
            });
        }
        var textEle = document.createElement('div');
        textEle.innerHTML = itemConfig.text;
        textEle.classList.add('text');
        textEle.setAttribute('data-menu-app', 'true');
        menuEle.append(itemEle);
        itemEle.append(checkEle, textEle, rightEle);
    });
    document.body.appendChild(menuEle);
}
exports.makeNewMenu = makeNewMenu;
