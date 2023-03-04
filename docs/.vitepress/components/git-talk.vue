<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
import md5 from "md5"
import Gitalk from "gitalk"
import "gitalk/dist/gitalk.css"
export default {
  name: "git-talk",
  data () {
    return {}
  },
  mounted () {
    const commentConfig = {
      clientID: "4cc4bcb249a54914968e",
      clientSecret: "fb57a28686979029a813252cb428f34fcc95b0f9",
      repo: "dhk333.github.io",
      owner: "dhk333",
      admin: ["dhk333"],
      id: md5(location.pathname),
      distractionFreeMode: false,
    }
    const gitalk = new Gitalk(commentConfig)
    gitalk.render("gitalk-container")
  },
}
</script>
<style>
.gt-container .gt-header-textarea {
  color: #000;
}
</style>

