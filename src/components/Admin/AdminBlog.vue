<template>
  <div class="card">
    <div class="card__title">
      <h3>{{blog.title}}</h3>
      <small>Published Date: {{blog.publish_date}}</small>
    </div>
    <div class="card__content">
      <p>{{blog.body}}</p>
    </div>
    <div class="card_actions">
      <edit-3-icon class="icon icon--info"></edit-3-icon>
      <trash-2-icon class="icon icon--danger"></trash-2-icon>
    </div>
  </div>
</template>

<script>
import { Edit3Icon, Trash2Icon } from 'vue-feather-icons'

export default {
  props: ['blog'],
  components: {
    Edit3Icon,
    Trash2Icon
  }
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
