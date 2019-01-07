<template>
  <div class="blogs">
    <blog-item v-for="(blog, idx) in blogs" :blog="blog" :key="idx"></blog-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../store/types.js'

import BlogItem from '../components/BlogItem'

export default {
  computed: {
    ...mapGetters({
      blogs: types.GET_BLOGS
    })
  },
  components: {
    BlogItem
  }
}
</script>

<style lang="scss">
.blogs {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;
}
</style>
