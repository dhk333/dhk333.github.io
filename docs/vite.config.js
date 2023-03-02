import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

//default options
var options = {
  // ...flexSearchIndexOptions,
  previewLength: 62,
  buttonLabel: "搜索本站",
  placeholder: "请输入关键字",
};

export default defineConfig({
  plugins: [SearchPlugin(options)],
});