import autoGetSidebarOptionBySrcDir from "./sidebar";
const path = require("path");

module.exports = {
  title: '清晨投递的人个站点', // 站点名称
  description: 'Just playing around.',
  // srcDir: 'pages/', // 配置根路径
  lastUpdated: true, // 显示文章更新时间
  // outDir: './public/', // 打包后保存路径
  themeConfig: { // 主题配置
    siteTitle: '清晨投递',
    lastUpdatedText: '最后更新', // 时间前缀文字
    outlineTitle: '快速导航',
    docFooter: { // 上一页/下一页上方显示的文字
      prev: '上一篇',
      next: '下一篇'
    },
    // logo: '/logo.png', // logo
    nav: [ // 页面导航
      { text: '主页', link: '/' },
      { text: '关于我', link: '/my/' },
      {
        text: '前端',
        items: [
          { text: 'JavaScript', link: '/articles/javascript/01、基础类型' },
          { text: 'Vue', link: '/articles/vue/Day03_基础API_计算属性_过滤器_侦听器_品牌管理案例.md' },
          { text: 'Git', link: '/articles/git/' }
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
    sidebar:  // 侧边栏
    {
      "/articles/javascript": autoGetSidebarOptionBySrcDir(path.resolve(__dirname, "../articles/javascript"), "javascript"),
      "/articles/vue": autoGetSidebarOptionBySrcDir(path.resolve(__dirname, "../articles/vue"), "vue")
    },
    socialLinks: [ // 社交账户
      { icon: 'github', link: 'https://github.com/dhk333' },
    ],
    footer: { // 底部
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
    }
  }
}