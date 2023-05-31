import { Menu, removeSubMenu } from './util'

/** 菜单配置 */
export const menuConfig: Menu = [
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
]
