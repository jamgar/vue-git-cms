<template>
  <div id="default-layout">
    <main-nav-bar/>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import MainNavBar from "@/components/NavBars/MainNavBar"

export default {
  components: {
    MainNavBar
  }
}
</script>
