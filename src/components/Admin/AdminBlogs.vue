<template>
  <div class="blogs">
    <admin-blog-item v-for="(blog, idx) in blogs" :blog="blog" :key="idx"></admin-blog-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../../store/types.js'

import AdminBlogItem from './AdminBlogItem'

export default {
  computed: {
    ...mapGetters({
      blogs: types.GET_BLOGS
    })
  },
  components: {
    AdminBlogItem
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
