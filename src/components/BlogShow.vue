<template>
  <div class="blog-show container container--md">
    <h1 class="text-center">{{blog.title}}</h1>
    <vue-showdown>{{blog.body}}</vue-showdown>
    <hr>
    <div class="blog__tags">
      <span v-for="tag in blog.tags">{{tag}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { VueShowdown } from 'vue-showdown'

import { GET_BLOG } from '../store/types'

export default {
  computed: {
    ...mapGetters({
      blog: GET_BLOG
    })
  },
  created() {
    this.$store.dispatch('setBlog', this.$route.params.id)
  },
  beforeRouteLeave (to, from, next) {
    this.$store.dispatch('resetBlog')
    next()
  },
  components: {
    VueShowdown
  }
}
</script>

<style lang="scss">
.blog__tags {
  span {
    background-color: $light-gray;
    border-radius: 20px;
    font-size: 1rem;
    padding:  0 10px;
    margin: 5px;
  }
}
</style>
