<template>
  <div class="card">
    <div class="card__title">
      <h3>Title: {{blog.title}}</h3>
      <small>Published Date: {{blog.publish_date}}</small>
    </div>
    <div class="card__content">
      <p>{{blog.body}}</p>
    </div>
    <div class="card_actions">
    </div>
  </div>
</template>

<script>
export default {
  props: ['blog']
}
</script>

<style lang="scss">
.card {
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
