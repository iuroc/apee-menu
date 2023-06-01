(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuConfig = void 0;
/** 菜单配置 */
exports.menuConfig = [
    {
        text: '文件',
        subMenu: [
            { text: '新建文本文件' },
            { text: '新建文件' },
            { text: '新建窗口' },
            { text: '打开文件' },
            { text: '打开文件夹' },
            { text: '从文件打开工作区' },
            {
                text: '打开最近的文件',
                subMenu: [
                    { text: 'D:\\Python 项目\\爬虫测试' },
                    { text: 'D:\\C 语言项目\\成绩管理系统' },
                    { text: 'E:\\JavaScript 项目\\前端可视化' },
                ]
            },
            { text: '将文件夹添加到工作区' },
            { text: '将工作区另存为' },
            { text: '复制工作区' },
            { text: '保存' },
            { text: '另存为' },
            { text: '全部保存' },
            { text: '共享' },
            { text: '自动保存', isChecked: true, autoCheck: true },
            { text: '首选项' },
            { text: '还原文件' },
            { text: '关闭编辑器' },
            { text: '关闭文件夹' },
            { text: '关闭窗口' },
            { text: '退出' },
        ]
    },
    {
        text: '编辑',
        subMenu: [
            { text: '撤消' },
            { text: '恢复' },
            { text: '剪切' },
            { text: '复制' },
            { text: '粘贴' },
            { text: '查找' },
            { text: '替换' },
            { text: '在文件中查找' },
            { text: '在文件中替换' },
            { text: '切换行注释' },
            { text: '切换块注释' },
            { text: 'Emmet：展开缩写' },
        ]
    },
    {
        text: '选择',
        subMenu: [
            { text: '全选' },
            { text: '扩大选区' },
            { text: '缩小选区' },
            { text: '向上复制一行' },
            { text: '向下复制一行' },
            { text: '向上移动一行' },
            { text: '向下移动一行' },
            { text: '重复选择' },
            { text: '在上面添加光标' },
            { text: '在下面添加光标' },
            { text: '在行尾添加光标' },
            { text: '添加下一个匹配项' },
            { text: '添加上一个匹配项' },
            { text: '选择所有匹配项' },
            { text: '列选择模式' },
        ]
    },
    {
        text: '查看',
        subMenu: [
            { text: '命令面板' },
            { text: '打开视图' },
            {
                text: '外观',
                subMenu: [
                    { text: '全屏' },
                    { text: '禅模式' },
                    { text: '居中布局' },
                    { text: '菜单栏', isChecked: true, autoCheck: true },
                    { text: '主侧边栏', isChecked: true, autoCheck: true },
                    { text: '辅助侧边栏', autoCheck: true },
                    { text: '状态栏', isChecked: true, autoCheck: true },
                    { text: '活动栏', isChecked: true, autoCheck: true },
                    { text: '面板', isChecked: true, autoCheck: true },
                    { text: '向右移动主侧栏' },
                    {
                        text: '面板位置',
                        subMenu: [
                            { text: '底部', isChecked: true, autoCheck: true, oneCheck: true },
                            { text: '右', autoCheck: true, oneCheck: true },
                            { text: '左', autoCheck: true, oneCheck: true },
                        ]
                    },
                    {
                        text: '对齐面板',
                        subMenu: [
                            { text: '居中', isChecked: true, autoCheck: true, oneCheck: true },
                            { text: '两端对齐', autoCheck: true, oneCheck: true },
                            { text: '右', autoCheck: true, oneCheck: true },
                            { text: '左', autoCheck: true, oneCheck: true },
                        ]
                    },
                    { text: '缩略图' },
                    { text: '痕迹导航', isChecked: true },
                    { text: '显示空格' },
                    { text: '显示控制字符', isChecked: true },
                    { text: '放大' },
                    { text: '缩小' },
                    { text: '重置缩放' },
                ]
            },
            {
                text: '编辑器布局',
                subMenu: [
                    { text: '向上拆分' },
                    { text: '向下拆分' },
                    { text: '向左拆分' },
                    { text: '向右拆分' },
                    { text: '在组中拆分' },
                    { text: '单列' },
                    { text: '双列' },
                    { text: '三列' },
                    { text: '双行' },
                    { text: '三行' },
                    { text: '2x2 网格' },
                    { text: '右侧双行' },
                    { text: '底部双列' },
                    { text: '翻转布局' },
                ]
            },
            { text: '资源管理器' },
            { text: '搜索' },
            { text: '源代码管理' },
            { text: '运行' },
            { text: '扩展' },
            { text: '问题' },
            { text: '输出' },
            { text: '调试控制台' },
            { text: '终端' },
            { text: '自动换行', autoCheck: true },
            { text: '粘滞滚动', autoCheck: true },
        ]
    },
    { text: '转到', subMenu: [] },
    { text: '运行', subMenu: [] },
    { text: '终端', subMenu: [] },
    { text: '帮助', subMenu: [] },
];

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var _1 = require(".");
var apeeMenu = new _1.ApeeMenu();
apeeMenu.setMenuConfig(config_1.menuConfig);
apeeMenu.setLocation(100, 50);
(_a = document.querySelector('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    apeeMenu.show();
});

},{".":2,"./config":1}]},{},[3]);
