<template>
  <div id="admin-blog-new">
    <div class="container__content">
      <admin-blog-form @saveBlog="saveBlog" :blog="blog" />
    </div>
    <div class="container__content">
      <admin-blog-preview :blog="blog" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import AdminBlogForm from './AdminBlogForm'
import AdminBlogPreview from './AdminBlogPreview'

export default {
  computed: {
    ...mapState({
      blog: state => state.blog.blog,
      isEditing: state => state.blog.isEditing
    })
  },
  methods: {
    saveBlog(blog) {
      if (!this.isEditing) {
        this.$store.dispatch('addBlog', blog)
      } else {
        // Update post
        this.$store.dispatch('editBlog', this.blog)
      }
    },
    handleCancel() {
      console.log('cancelling...');
      // Set isEditing to false
      // ?? may have to reset state.post
    }
  },
  components: {
    AdminBlogForm,
    AdminBlogPreview
  }
}
</script>

<style lang="scss">
#admin-blog-new {
  display: flex;
  justify-content: space-evenly;
}
.container__content {
  overflow: auto;
  padding: 20px;
  max-height: 100vh;
  width: 100%;
}
</style>
