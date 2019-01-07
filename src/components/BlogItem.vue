<template>
  <div class="card">
    <div class="card__title">
      <router-link :to="{ name: 'blogShow', params: {id: blog.id} }">
        <h3>{{blog.title}}</h3>
      </router-link>
      <small>Published Date: {{blog.publish_date}}</small>
    </div>
    <div class="card__content">
      <p>{{truncateBody}}</p>
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown'
import { Edit3Icon, Trash2Icon } from 'vue-feather-icons'
import { SET_BLOG, SET_EDITING } from '../store/types'
import { utilities } from '../_helpers/'

export default {
  props: ['blog'],
  computed: {
    truncateBody() {
      return utilities.truncate(this.blog.body, 15, '...')
    }
  },
  components: {
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
</style>
