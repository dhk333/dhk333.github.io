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
      clientSecret: "538b45b15fb13e5e3752bcd549b46a893bf7e875",
      repo: "dhk333.github.io",
      owner: "1731381719@qq.com",
      admin: ["1731381719@qq.com"],
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

