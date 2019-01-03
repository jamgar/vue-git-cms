<template>
  <div id="admin-nav">
    <nav class="navbar">
      <ul class="navbar-nav">
        <li><router-link to="/">Home</router-link></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Add New</a></li>
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
  background-color: #39495C;
  overflow: hidden;
  height: 63px;

  a {
    float: left;
    display: block;
    color: #64B587;
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
