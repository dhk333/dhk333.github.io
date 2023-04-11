---
layoutClass: bruceblog-navigation
outline: [2, 3, 4]
---

<script setup>
import NavLinks from './navigation/components/NavLinks.vue'

import data from './navigation/data.js'
</script>
<style src="./navigation/index.scss"></style>

# 站点导航

<NavLinks v-for="{title, items} in data" :title="title" :items="items"/>
