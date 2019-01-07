<template>
  <div class="blog-show">
    <h1>{{blog.title}}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { GET_BLOG } from '../store/types'

export default {
  computed: {
    ...mapState({
      blog: state => state.blog.blog
    })
  },
  mounted() {
    console.log('mounted');
    this.$store.dispatch('setBlog', this.$route.params.id)
  }
}
</script>

<style lang="css">
</style>
