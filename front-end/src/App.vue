<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand href="#"
          ><a class="navbar-brand" href="index.html"
            ><img src="/images/happy_trails.png" alt="Happy Trails logo" /></a
        ></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/blog">Blog</b-nav-item>
            <b-nav-item href="/newsletter">Newsletter</b-nav-item>
            <b-nav-item href="/contact">Contact</b-nav-item>
            <b-nav-item href="/parks">Parks</b-nav-item>
            <b-nav-item href="/admin">Admin</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style>
.navbar.navbar-light.bg-light {
  background-color: white !important;
  text-align: left;
}
.navbar-brand {
  padding: 0px;
}

.navbar-brand img {
  height: 45px;
  padding: 5px;
  width: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
