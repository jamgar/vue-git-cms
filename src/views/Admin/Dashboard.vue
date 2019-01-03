<template>
  <div class="dashboard">
    <blog v-for="(blog, idx) in blogs" :blog="blog" :key="idx"></blog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../../store/types'

import Blog from '../../components/Admin/Blog'

export default {
  computed: {
    ...mapGetters({
      blogs: types.GET_BLOGS
    })
  },
  components: {
    Blog
  }
}
</script>

<style lang="scss">
.dashboard {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
