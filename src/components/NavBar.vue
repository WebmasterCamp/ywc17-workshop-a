<template>
    <b-navbar toggleable="lg" v-if="$route.name !== 'landing'">
      <b-container>
        <b-navbar-brand href="/">
            <span>
              <img src="../assets/logo.svg" class="logo" />
              </span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="article"  :class="{active: $route.name === 'article' }">บทความ</b-nav-item> 
            <b-nav-item href="call"  :class="{active: $route.name === 'call' }">ปรึกษาด่วน</b-nav-item> 
          </b-navbar-nav>
        </b-collapse>
      </b-container>
  </b-navbar>
</template>
<script>
</script>
<style lang="css">
.navbar {
    box-shadow: 0 8px 30px rgba(10,31,68,.1);
    background: #fafafa;
}
.logo {
    height: 32px;
    width: auto;
}

</style>