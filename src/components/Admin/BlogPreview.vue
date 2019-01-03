<template>
  <div id="blog-preview">
    <h2>{{ post.title }}</h2>
    <h4>{{ post.tags}}</h4>
    <h4>{{ post.publish_date }}</h4>
    <div class="body">
      <vue-showdown :markdown="post.body"/>
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown'

export default {
  props: ['post'],
  components: {
    VueShowdown
  }
}
</script>

<style lang="scss" scoped>
  .container__content {
    overflow: auto;
    padding: 20px;
    max-height: 100vh;
    width: 100%;
  }

</style>
