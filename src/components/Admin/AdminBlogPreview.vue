<template>
  <div id="blog-preview">
    <h2>{{ blog.title }}</h2>
    <h4>{{ blog.tags}}</h4>
    <h4>{{ formattedDate }}</h4>
    <div class="body">
      <vue-showdown :markdown="blog.body"/>
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown'
import moment from 'moment'

export default {
  props: ['blog'],
  computed: {
    formattedDate() {
      if (this.blog.publish_date) {
        return moment(new Date(this.blog.publish_date)).format('MMMM Do, YYYY')
      }
      return ""
    }
  },
  components: {
    VueShowdown
  }
}
</script>
