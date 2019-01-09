<template>
  <div id="admin-blog-new">
    <div class="container__content">
      <h2 class="text-center">{{ isEditing ? 'EDIT ' : 'ADD ' }}BLOG</h2>
      <admin-blog-form @saveBlog="saveBlog" :blog="blog" />
    </div>
    <div class="container__content">
      <admin-blog-preview :blog="blog" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { SET_EDITING } from '../../store/types'

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
        this.$store.dispatch('addBlog', blog).then(() => {
          this.$store.dispatch('resetBlog')
        })
      } else {
        this.$store.dispatch('editBlog', this.blog).then(() => {
          this.$store.dispatch('resetBlog')
        })
      }
      this.$router.push('/admin/blogs')
    },
    handleCancel() {
      console.log('cancelling...');
      this.$store.dispatch('resetBlog')
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$store.dispatch('resetBlog')
    this.$store.commit(SET_EDITING)
    next()
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
