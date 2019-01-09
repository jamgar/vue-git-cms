<template>
  <div id="admin-layout">
    <admin-nav-bar/>
    <div class="container container--lg">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import AdminNavBar from "@/components/NavBars/AdminNavBar"

export default {
  components: {
    AdminNavBar
  }
}
</script>
