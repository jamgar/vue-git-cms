<template>
  <div id="blog-preview">
    <h2>{{ blog.title }}</h2>
    <h4>{{ blog.tags}}</h4>
    <h4>{{ blog.publish_date }}</h4>
    <div class="body">
      <vue-showdown :markdown="blog.body"/>
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown'

export default {
  props: ['blog'],
  components: {
    VueShowdown
  }
}
</script>

<style lang="scss" scoped>
  // .container__content {
  //   overflow: auto;
  //   padding: 20px;
  //   max-height: 100vh;
  //   width: 100%;
  // }

</style>
