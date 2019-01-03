<template>
  <div id="admin-page">
    <blog-form @savePost="savePost" :post="post" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import BlogForm from '../../components/Admin/BlogForm'

export default {
  computed: {
    ...mapState({
      post: state => state.blog.post,
      isEditing: state => state.blog.isEditing
    })
  },
  methods: {
    savePost(post) {
      if (!this.isEditing) {
        this.$store.dispatch('addPost', post)
      } else {
        // Update post
        this.$store.dispatch('editPost', this.post)
      }
    },
    handleCancel() {
      console.log('cancelling...');
      // Set isEditing to false
      // ?? may have to reset state.post
    }
  },
  components: {
    BlogForm
  }
}
</script>

<style lang="scss">
</style>
