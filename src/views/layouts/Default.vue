<template>
  <div id="default-layout">
    <main-nav-bar/>
    <div class="container container--lg">
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
