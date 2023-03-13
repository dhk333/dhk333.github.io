import autoGetSidebarOptionBySrcDir from "./sidebar";
const path = require("path");

module.exports = {
  lang: 'zh-cn',
  // 站点名称
  title: '清晨投递个人站点',
  description: 'Just playing around.',
  lastUpdated: true, // 显示文章更新时间
  // 主题配置
  themeConfig: {
    siteTitle: '清晨投递',
    // 时间前缀文字
    lastUpdatedText: '最后更新',
    // 右侧侧边栏标题
    outlineTitle: '快速导航',
    // 上一页/下一页上方显示的文字
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    // 标题提取深度(表示h2、h3、h4)
    outline: [2, 3, 4],
    // logo
    logo: '/logo.png',
    nav: [ // 页面导航
      { text: '主页', link: '/' },
      // { text: '关于我', link: '/my/' },
      { text: '学习计划', link: '/plan/' },
      {
        text: '前端',
        items: [
          { text: 'JavaScript', link: '/articles/javascript/01、基础类型' },
          { text: 'Vue', link: '/articles/vue/1.指令' },
          { text: 'Git', link: '/articles/git/1.Git简介' }
        ]
      },
      {
        text: '项目',
        items: [
          { text: '黑马头条', link: '/project/headline/' },
          { text: '后台管理系统', link: '/project/admin/' }
        ]
      },
      {
        text: '年终总结',
        items: [
          { text: '2022', link: '/year/2022/' },
        ]
      }],
    // 侧边栏
    sidebar:
    {
      "/articles/git": autoGetSidebarOptionBySrcDir(path.resolve(__dirname, "../articles/git"), "Git"),
      "/articles/vue": autoGetSidebarOptionBySrcDir(path.resolve(__dirname, "../articles/vue"), "Vue"),
    },
    // {
    //   "/articles/git": [
    //     {
    //       text: 'Git',
    //       collapsible: true,
    //       items: [
    //         { text: 'Git简介', link: '/articles/git/1、Git简介' },
    //         { text: '时光机穿梭', link: '/articles/git/2、时光机穿梭' },
    //         { text: '远程仓库', link: '/articles/git/3、远程仓库' },
    //         { text: '分支管理', link: '/articles/git/4、分支管理' },
    //         { text: '标签管理', link: '/articles/git/5、标签管理' },
    //       ]
    //     }
    //   ]
    // },
    // 社交账户
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dhk333' },
    ],
    // 底部
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
    },
  }
}