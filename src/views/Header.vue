<template>
  <div id="header">
    <nav class="navbar">
      <span class="open-menu">
        <a href="#" @click="openSideMenu">
          <svg width="30" height="30">
            <path class="burger-line" d="M0,5 30,5" stroke="#64B587" stroke-width="3"/>
            <path class="burger-line" d="M0,14 30,14" stroke="#64B587" stroke-width="3"/>
            <path class="burger-line" d="M0,23 30,23" stroke="#64B587" stroke-width="3"/>
          </svg>
        </a>
      </span>

      <ul class="navbar-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <div id="side-menu" class="side-nav">
      <a href="#" class="btn-close" @click="closeSideMenu">&times;</a>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openSideMenu() {
      document.getElementById('side-menu').style.width = '250px'
    },
    closeSideMenu() {
      document.getElementById('side-menu').style.width = '0'
    }
  }
}
</script>

<style lang="scss">
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
.side-nav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;

  a {
    padding: 10px 10px 10px 30px;
    text-decoration: none;
    font-size: 22px;
    color: #ccc;
    display: block;
    transition: 0.3s;
  }

  a:hover {
    color: #fff;
    font-weight: bold;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 22px;
    font-weight: bold;
    font-size: 40px;
    margin-left: 50px;
  }
}
.open-menu {
  a {
    padding: 16px
  }
  .burger-line {
    transition: .5s;
  }
  &:hover .burger-line {
    stroke: #fff;
  }
}
@media(max-width: 568px) {
  .navbar-nav { display: none; }
}
@media(min-width: 568px) {
  .open-menu { display: none; }
}
/* To make the main body move with open side bar */
/* #main {
  transition: margin-left 0.5s;
  padding: 20px;
  overflow: hidden;
  width: 100%;
} */

</style>
