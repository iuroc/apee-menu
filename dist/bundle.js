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
var config_1 = require("./config");
var util_1 = require("./util");
(0, util_1.makeNewMenu)(config_1.menuConfig, 5, 50);
window.addEventListener('mouseover', function (event) {
    var taregt = event.target;
    if (!taregt.hasAttribute('data-menu-app'))
        (0, util_1.removeSubMenu)();
});

},{"./config":1,"./util":3}],3:[function(require,module,exports){
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

},{}]},{},[2]);
