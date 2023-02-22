export default {
  title: '戴鸿锟的个人站点', // 站点名称
  description: 'Just playing around.',
  themeConfig: { // 主题配置
    siteTitle: '戴鸿锟的个人站点',
    // logo: "" // logo
    nav: [ // 页面导航
      { text: '我的', link: '/my/' },
      { text: '文章', link: '/list/' },
      {
        text: '标签',
        items: [
          { text: '前端', link: '/item-1' },
          { text: '后端', link: '/item-2' },
          { text: 'UI', link: '/item-3' }
        ]
      },
      { text: 'Gitee', link: 'https://github.com/...' }
    ],
    // sidebar: [ // 侧边栏
    //   {
    //     text: 'Guide',
    //     collapsed: true, // 关闭该条
    //     items: [
    //       { text: 'Introduction', link: '/introduction' },
    //       { text: 'Getting Started', link: '/getting-started' }
    //     ]
    //   }
    // ]
  }
}