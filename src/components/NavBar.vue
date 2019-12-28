<template>
    <b-navbar toggleable="lg" v-if="$route.name !== 'landing'">
    <b-navbar-brand href="/home">
        <img src="../assets/logo.svg" class="logo" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/questionaire" :class="{active: $route.name === 'questionaire' }">Questionaire</b-nav-item>
        <b-nav-item href="matching"  :class="{active: $route.name === 'matching' }">List of something</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
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
    height: 100%;
}

</style>