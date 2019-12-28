<template>
  <div id="app">
    <NavBar />
    <router-view />

    <b-modal id="auth-modal" size="lg" hide-header hide-footer>
      <div>
        <b-tabs content-class="mt-3 py-3" align="center">
          <b-tab title="Login" active>
            <b-row align-h="center">
              <b-col cols="7">
                <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                  <b-form-input id="input-1" type="email" required placeholder="Enter email"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="7">
                <b-form-group id="input-group-1" label="Password:" label-for="input-1">
                  <b-form-input id="input-1" type="email" required placeholder="Enter email"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="7">
                <b-button variant="primary" block>Login</b-button>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Register">
            <p>I'm the second tab</p>
          </b-tab>
        </b-tabs>
      </div>
    </b-modal>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components: { NavBar }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
