<template>
  <div class="blogs">
    <admin-blog v-for="(blog, idx) in blogs" :blog="blog" :key="idx"></admin-blog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../../store/types.js'

import AdminBlog from './AdminBlog'

export default {
  computed: {
    ...mapGetters({
      blogs: types.GET_BLOGS
    })
  },
  components: {
    AdminBlog
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
