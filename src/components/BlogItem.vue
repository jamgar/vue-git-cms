<template>
  <div class="card">
    <div class="card__title">
      <router-link class="card__link" :to="{ name: 'blogShow', params: {id: blog.id} }">
        <h3>{{blog.title}}</h3>
      </router-link>
      <small>Date: {{formattedDate}}</small>
    </div>
    <div class="card__content">
      <p>{{truncateBody}}</p>
      <router-link class="card__link" :to="{ name: 'blogShow', params: {id: blog.id} }">
        <span>Read More...</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown'
import moment from 'moment'

import { utilities } from '../_helpers/'

export default {
  props: ['blog'],
  computed: {
    truncateBody() {
      return utilities.truncate(this.blog.body, 15, '...')
    },
    formattedDate() {
      if (this.blog.publish_date) {
        return moment(new Date(this.blog.publish_date)).format('MMMM Do, YYYY')
      }
      return ""
    }  },
  components: {
    VueShowdown
  }
}
</script>

<style lang="scss">
.card {
  border-radius: 5px;
  box-shadow: 1px 4px 10px 1px rgba(82,82,82,0.50);
  height: 250px;
  margin: 10px;
  text-align: center;
  transition: .5s;
  width: 300px;
  &:hover {
    box-shadow: 4px 8px 10px 1px rgba(82,82,82,0.50);
  }
}
.card__content {
  p {
    margin-bottom: 30px;
  }
}
.card__link {
  color: $base-font-color;
  text-decoration: none;
  span {
    background-color: lighten($light-gray, 10%);
    border: 1px solid $light-gray;
    border-radius: 20px;
    padding: 5px 10px;
    transition: .3s;
    &:hover {
      background-color: $light-gray;
    }
  }
}
</style>
