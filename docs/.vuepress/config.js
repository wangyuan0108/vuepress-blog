module.exports = {
    title: '博客',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: 'web前端', link: '/foo/' },
            { text: '掘金小册', link: '/bar/' },
            { text: 'python', link: '/python/' },
            // 下拉列表
            {
                text: 'select',
                items: [{ text: 'select1', link: '/select/select1' }, { text: 'select2', link: '/select/select2' }]
            },
            { text: 'GitHub', link: 'http://liuyukuai.github.io' }
        ],
        sidebar: {
            '/foo/': [
                {
                    title: '基础',
                    // collapsable: true,
                    children: ['/foo/base/kk']
                },
                // '' /* /foo/ */,
                // 'js入门1' /* /foo/one.html */,
                'js入门2' /* /foo/two.html */
            ],

            '/bar/': [
                {
                    title: 'React 组合式开发实践：打造企业管理系统五大核心模块',
                    // collapsable: true,
                    children: [
                        '/bar/one/以史为鉴：前端开发的四个时代',
                        '/bar/one/似水流年：企业管理系统的前世今生',
                        '/bar/one/继往开来：可视化页面搭建工具',
                        '/bar/one/实战篇 01：开发前准备',
                        '/bar/one/实战篇 02：项目脚手架',
                        '/bar/one/实战篇 03：页面布局方案',
                        '/bar/one/实战篇 04：权限管理机制',
                        '/bar/one/实战篇 05：菜单匹配逻辑',
                        '/bar/one/实战篇 06：消息通知设计',
                        '/bar/one/实战篇 07：多语言支持',
                        '/bar/one/总结'
                    ]
                },
                {
                    title: 'Vue 项目构建与开发入门',
                    // collapsable: true,
                    children: [
                        '/bar/two/开篇：Vue CLI 3 项目构建基础',
                        '/bar/two/开发指南篇 1：从编码技巧与规范开始',
                        '/bar/two/开发指南篇 2：学会编写可复用性模块',
                        '/bar/two/开发指南篇 3：合理划分容器组件与展示组件',
                        '/bar/two/开发指南篇 4：数据驱动与拼图游戏',
                        '/bar/two/开发指南篇 5：Vue API 盲点解析',
                        '/bar/two/开发拓展篇 1：扩充你的开发工具',
                        '/bar/two/开发拓展篇 2：将 UI 界面交给第三方库',
                        '/bar/two/开发拓展篇 3：尝试使用外部数据',
                        '/bar/two/构建基础篇 1：你需要了解的包管理工具与配置项',
                        '/bar/two/构建基础篇 2：webpack 在 CLI 3 中的应用',
                        '/bar/two/构建基础篇 3：env 文件与环境设置',
                        '/bar/two/构建实战篇 1：单页应用的基本配置',
                        '/bar/two/构建实战篇 2：使用 pages 构建多页应用',
                        '/bar/two/构建实战篇 3：多页路由与模板解析',
                        '/bar/two/构建实战篇 4：项目整合与优化',
                        '/bar/two/总结篇：写在最后'
                    ]
                }
            ]
        }
    }
};
