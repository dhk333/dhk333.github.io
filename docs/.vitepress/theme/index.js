// /* 自定义主题 */

// // 导入默认主题
// import DefaultTheme from 'vitepress/theme'

// // 导入自定义主题样式/覆盖默认样式
// import './custom.css'

// // 导出
// export default DefaultTheme

import Theme from "vitepress/theme"

import './custom.css'

import comment from "../components/git-talk.vue"
export default {
  ...Theme,
  enhanceApp (ctx) {
    Theme.enhanceApp(ctx)
    ctx.app.component("git-talk", comment)
  },
}