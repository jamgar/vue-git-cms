<template>
  <div id="blog-form-view">
    <div class="container__content">
      <form class="form">
        <div class="form__group">
          <label for="title">Title</label>
          <input
          type="text"
          id="title"
          class="form__input"
          v-model="blog.title">
        </div>
        <div class="form__group">
          <label for="tags">Tags</label>
          <input
          type="text"
          id="tags"
          class="form__input"
          v-model="blog.tags">
        </div>
        <div class="form__group">
          <label for="date">Publish Date</label>
          <input
          type="text"
          id="date"
          class="form__input"
          v-model="blog.publish_date">
        </div>
        <div class="form__group">
          <label for="image">Feature Image</label>
          <p>Feature Image Upload</p>
        </div>
        <div class="form__group">
          <label for="body">Body</label>
          <markdown-editor
          id="body"
          v-model="blog.body"
          :configs="configs"></markdown-editor>
        </div>
      </form>
      <button class="btn btn--success" type="button"  @click="handleSubmit">Save</button>
      <button class="btn btn--secondary" type="button" @click="handleCancel">Cancel</button>
    </div>
    <div class="container__content">
      <blog-preview :blog="currentPost" />
    </div>
  </div>
</template>

<script>
import markdownEditor from 'vue-inscrybmde/src/markdown-editor'

import BlogPreview from './BlogPreview'

export default {
  props: ['blog'],
  date() {
    return {
      configs: {}
    }
  },
  computed: {
    currentPost() {
      return {
        title: this.blog.title,
        tags: this.blog.tags,
        publish_date: this.blog.publish_date,
        body: this.blog.body
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('savePost', this.blog)
    },
    handleCancel() {
      console.log('cancelling...');
      // Set isEditing to false
      // ?? may have to reset state.blog
    }
  },
  components: {
    BlogPreview,
    markdownEditor
  }
}
</script>

<style lang="scss" scoped>
  @import '~inscrybmde/dist/inscrybmde.min.css';

  #blog-form-view {
    display: flex;
    justify-content: space-evenly;
  }
  .container__content {
    overflow: auto;
    padding: 20px;
    max-height: 100vh;
    width: 100%;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  .form__group {
    margin: $xs-size;
    label {
      display: block;
      font-size: $xs-size;
      font-weight: bolder;
      color: lighten($base-font-color, 20%);
      text-transform: uppercase;
    }
  }
  .form__input {
    border: 2px solid #CCC;
    border-radius: 5px;
    height: 2.6rem;
    padding: $xs-size;
    margin: $xs-size 0;
    width: 100%;
  }
  .form__input--textarea {
    height: 20rem;
  }
  .btn {
    border: none;
    border-radius: 3px;
    cursor: pointer;
    padding: 10px;
    margin: 3px;
    transition: .3s;
  }
  .btn--success {
    background-color: $light-green;
    color: $base-font-color;
    &:hover {
      background-color: darken($light-green, 10%);
    }
  }
  .btn--secondary {
    background-color: $light-gray;
    color: white;
    &:hover {
      background-color: darken($light-gray, 10%);
    }
  }
</style>
