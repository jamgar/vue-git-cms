<template>
  <div class="card">
    <div class="card__title">
      <h3>{{blog.title}}</h3>
      <small>Published Date: {{blog.publish_date}}</small>
    </div>
    <div class="card__content">
      <p>{{truncateBody}}</p>
    </div>
    <div class="card_actions">
      <edit-3-icon class="icon icon--info" @click="editBlog"></edit-3-icon>
      <trash-2-icon class="icon icon--danger" @click="deleteBlog"></trash-2-icon>
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown'
import { Edit3Icon, Trash2Icon } from 'vue-feather-icons'
import { SET_BLOG, SET_EDITING } from '../../store/types'
import { utilities } from '../../_helpers/'

export default {
  props: ['blog'],
  computed: {
    truncateBody() {
      return utilities.truncate(this.blog.body, 10, '...')
    }
  },
  methods: {
    editBlog() {
      this.$store.commit(SET_EDITING, true)
      this.$store.commit(SET_BLOG, this.blog.id)
      this.$router.push({name: 'blogEdit', params: {id: this.blog.id}})
    },
    deleteBlog() {
      if (confirm("Are you sure?")) {
        this.$store.dispatch('deleteBlog', this.blog.id)
      } else {
        console.log('Cancel delete...');
      }
    }
  },
  components: {
    Edit3Icon,
    Trash2Icon,
    VueShowdown
  }
}
</script>

<style lang="scss">
.card {
  border-radius: 5px;
  box-shadow: 1px 4px 10px 1px rgba(82,82,82,0.50);
  height: 200px;
  margin: 10px;
  text-align: center;
  transition: .5s;
  width: 300px;
  &:hover {
    box-shadow: 4px 8px 10px 1px rgba(82,82,82,0.50);
  }
}
.icon {
  border-radius: 15px;
  cursor: pointer;
  height: 30px;
  width: 30px;
  margin: 5px;
  padding: 5px;
  transition: .3s;
}
.icon--info {
  color: $button-lightblue;
  &:hover {
    color: darken($button-lightblue, 10%);
    background-color: $light-gray;
  }
}
.icon--danger {
  color: $button-red;
  &:hover {
    color: darken($button-red, 10%);
    background-color: $light-gray;
  }
}
</style>
