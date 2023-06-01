"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApeeMenu = void 0;
/** 多层级下拉菜单 */
var ApeeMenu = /** @class */ (function () {
    function ApeeMenu(initOption) {
        var _this = this;
        var _a, _b, _c;
        this.menuConfig = (_a = initOption === null || initOption === void 0 ? void 0 : initOption.menuConfig) !== null && _a !== void 0 ? _a : [];
        this.location = {
            left: (_b = initOption === null || initOption === void 0 ? void 0 : initOption.left) !== null && _b !== void 0 ? _b : 0,
            top: (_c = initOption === null || initOption === void 0 ? void 0 : initOption.top) !== null && _c !== void 0 ? _c : 0
        };
        this.rootMenuId = this.randString();
        window.addEventListener('click', function (event) {
            var taregt = event.target;
            if (taregt.classList.contains('apee-menu'))
                return;
            if (!taregt.hasAttribute('data-root-menu-id'))
                _this.remove();
            else if (taregt.getAttribute('data-root-menu-id') != _this.rootMenuId)
                _this.remove();
        });
    }
    /** 移除页面中所有菜单 */
    ApeeMenu.prototype.remove = function () {
        document.querySelectorAll("[data-root-menu-id=\"".concat(this.rootMenuId, "\"]")).forEach(function (ele) { return ele.remove(); });
    };
    /** 设置菜单配置 */
    ApeeMenu.prototype.setMenuConfig = function (menuConfig) {
        this.menuConfig = menuConfig;
        return this;
    };
    /**
     * 设置根菜单位置
     * @param left 根菜单距离页面左边距离
     * @param top 根菜单距离页面顶部距离
     */
    ApeeMenu.prototype.setLocation = function (left, top) {
        this.location = { left: left, top: top };
        return this;
    };
    /** 显示根菜单 */
    ApeeMenu.prototype.show = function () {
        this.makeNewMenu(this.menuConfig, this.location.left, this.location.top, this.rootMenuId);
    };
    /**
    * 生成新的菜单
    * @param menuConfig 菜单配置
    * @param left 菜单左边距
    * @param top 菜单顶边距
    * @param menuId 菜单 ID，同时是菜单项的父 ID
    */
    ApeeMenu.prototype.makeNewMenu = function (menuConfig, left, top, menuId) {
        var _this = this;
        // 如果没有菜单项，则不生成菜单
        if (menuConfig.length == 0)
            return;
        /** 新生成的菜单元素 */
        var menuEle = document.createElement('div');
        menuEle.classList.add('menu');
        menuEle.setAttribute('data-menu-id', menuId);
        // 设置所属的根菜单 ID
        menuEle.setAttribute('data-root-menu-id', this.rootMenuId);
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
            var newItemId = _this.randString();
            itemEle.setAttribute('data-item-id', newItemId);
            itemEle.setAttribute('data-root-menu-id', _this.rootMenuId);
            if (itemConfig.disabled)
                itemEle.classList.add('disabled');
            /** 左边的选中图标元素 */
            var checkEle = document.createElement(itemConfig.isChecked ? 'img' : 'div');
            checkEle.classList.add('check');
            checkEle.setAttribute('data-root-menu-id', _this.rootMenuId);
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
            rightEle.setAttribute('data-root-menu-id', _this.rootMenuId);
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
                    _this.removeSubMenu(menuId);
                    itemEle.classList.add('hover');
                    _this.makeNewMenu(itemConfig.subMenu, left, top, newItemId);
                });
            }
            else {
                itemEle.addEventListener('mouseenter', function () {
                    _this.removeSubMenu(menuId);
                });
                itemEle.addEventListener('click', function () {
                    if (itemConfig.autoClose || itemConfig.autoClose == undefined)
                        _this.remove();
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
            textEle.setAttribute('data-root-menu-id', _this.rootMenuId);
            menuEle.append(itemEle);
            itemEle.append(checkEle, textEle, rightEle);
        });
        document.body.appendChild(menuEle);
    };
    /**
     * 移除指定菜单的所有子菜单
     * @param menuId 需要移除子菜单的菜单 ID
     */
    ApeeMenu.prototype.removeSubMenu = function (menuId) {
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
        this.removeSubMenu(hoverItemId);
        hoverItemEle.classList.remove('hover');
        subMenuEle.remove();
    };
    /** 生成随机字符串 */
    ApeeMenu.prototype.randString = function (length) {
        if (length === void 0) { length = 10; }
        var result = '';
        for (var i = 0; i < length; i++) {
            var randomAscii = Math.floor(Math.random() * 26) + 97;
            result += String.fromCharCode(randomAscii);
        }
        return result;
    };
    return ApeeMenu;
}());
exports.ApeeMenu = ApeeMenu;
Object.defineProperty(window, 'ApeeMenu', {
    value: ApeeMenu
});
