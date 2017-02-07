<template>
  <div id="vue-container" class="outer vue-container">
    <nav class="navbar navbar-default shadow-z-2">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Friendly Items App</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav pull-right">
            <router-link to="/items" class="btn" active-class="btn-raised" tag="li"><a>Items</a></router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
</script>

<style scoped>
  nav, .btn {
    background-color: midnightblue
  }
  .navbar-header a {
    margin-top: 1rem;
    font-size: 3rem;
  }
  a {
    color: whitesmoke !important
  }
  ul.nav {
    margin-top: 0.5rem;
  }
  .btn.btn-raised {
    background-color: orange
  }
</style>