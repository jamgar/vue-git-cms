<template>
  <div id="blog-form-view">
    <form class="form">
      <div class="form__group">
        <label for="title">Title</label>
        <input
        type="text"
        id="title"
        class="form__input"
        v-model="title">
      </div>
      <div class="form__group">
        <label for="tags">Tags</label>
        <input
        type="text"
        id="tags"
        class="form__input"
        v-model="tags">
      </div>
      <div class="form__group">
        <label for="tags">Publish Date</label>
        <datepicker
          id="publish-date"
          :input-class="formInput"
          v-model="publish_date"></datepicker>
      </div>
      <div class="form__group">
        <label for="image">Feature Image</label>
        <p>Feature Image Upload</p>
      </div>
      <div class="form__group">
        <label for="body">Body</label>
        <markdown-editor
        id="body"
        v-model="body"></markdown-editor>
      </div>
    </form>
    <button class="btn btn--success" type="button"  @click="handleSubmit">Save</button>
      <button class="btn btn--secondary" type="button" @click="handleCancel">Cancel</button>
  </div>
</template>

<script>
import markdownEditor from 'vue-inscrybmde/src/markdown-editor'
import Datepicker from 'vuejs-datepicker'

import * as types from '../../store/types'

export default {
  props: ['blog'],
  data() {
    return {
      formInput: 'form__input'
    }
  },
  computed: {
    title: {
      get() {
        return this.blog.title;
      },
      set(title) {
        this.$store.commit(types.UPDATE_TITLE, { title })
      }
    },
    tags: {
      get() {
        return this.blog.tags;
      },
      set(tags) {
        this.$store.commit(types.UPDATE_TAGS, { tags })
      }
    },
    publish_date: {
      get() {
        return this.blog.publish_date;
      },
      set(publish_date) {
        this.$store.commit(types.UPDATE_PUBLISH_DATE, { publish_date })
      }
    },
    body: {
      get() {
        return this.blog.body;
      },
      set(body) {
        this.$store.commit(types.UPDATE_BODY, { body })
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('saveBlog')
    },
    handleCancel() {
      console.log('cancelling...');
      this.$store.commit(types.RESET_BLOG)
      this.$router.push('/admin/blogs')
    }
  },
  components: {
    markdownEditor,
    Datepicker
  }
}
</script>

<style lang="scss">
  @import '~inscrybmde/dist/inscrybmde.min.css';

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
    border-radius: 2px;
    cursor: pointer;
    padding: 10px;
    margin: 3px;
    transition: .3s;
  }
  .btn--success {
    background-color: $button-green;
    color: $base-font-color;
    &:hover {
      background-color: darken($button-green, 10%);
    }
  }
  .btn--secondary {
    background-color: $button-gray;
    color: white;
    &:hover {
      background-color: darken($button-gray, 10%);
    }
  }
</style>
