<template>
    <b-navbar toggleable="lg">
    <b-navbar-brand href="#">Psyjai</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="css">
.navbar {
    box-shadow: 0 8px 30px rgba(10,31,68,.1);
}

</style>