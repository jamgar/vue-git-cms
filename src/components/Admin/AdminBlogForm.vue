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
        <label for="date">Publish Date</label>
        <input
        type="text"
        id="date"
        class="form__input"
        v-model="publish_date">
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
import * as types from '../../store/types'

export default {
  props: ['blog'],
  // date() {
  //   return {
  //     configs: {}
  //   }
  // },
  computed: {
    title: {
      get() {
        return this.$store.state.blog.title;
      },
      set(value) {
        this.$store.commit(types.UPDATE_TITLE, value)
      }
    },
    tags: {
      get() {
        return this.$store.state.blog.tags;
      },
      set(value) {
        this.$store.commit(types.UPDATE_tags, value)
      }
    },
    publish_date: {
      get() {
        return this.$store.state.blog.publish_date;
      },
      set(value) {
        this.$store.commit(types.UPDATE_PUBLISH_DATE, value)
      }
    },
    body: {
      get() {
        return this.$store.state.blog.body;
      },
      set(value) {
        this.$store.commit(types.UPDATE_BODY, value)
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('saveBlog', this.blog)
    },
    handleCancel() {
      console.log('cancelling...');
      // Set isEditing to false
      // ?? may have to reset state.blog
    }
  },
  components: {
    markdownEditor
  }
}
</script>

<style lang="scss" scoped>
  @import '~inscrybmde/dist/inscrybmde.min.css';

  // #blog-form-view {
  //   display: flex;
  //   justify-content: space-evenly;
  // }
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
