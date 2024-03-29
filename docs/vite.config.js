import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

//default options
var options = {
  previewLength: 62,
  buttonLabel: "搜索本站",
  placeholder: "请输入关键字",
};

export default defineConfig({
  plugins: [SearchPlugin(options)],
  server:{
    hmr:{
      // overlay: false
    }
  }
});