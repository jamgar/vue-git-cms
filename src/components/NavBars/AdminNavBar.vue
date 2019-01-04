<template>
  <div id="admin-nav">
    <nav class="navbar">
      <ul class="navbar-nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/admin/blogs">Blogs</router-link></li>
        <li><router-link to="/admin/blogs/new">Add New</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $vue-gray;
  overflow: hidden;
  height: 63px;

  a {
    float: left;
    display: block;
    color: $vue-green;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    transition: .5s;
  }
  ul {
    margin: 6px 0 0 0;
    list-style: none;
  }
  ul li {
    margin-bottom: 0;
  }
  a:hover {
    color: #fff;
    font-weight: bold;
  }
}
</style>
