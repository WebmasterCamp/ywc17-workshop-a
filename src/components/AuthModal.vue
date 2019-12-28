<template>
    <b-modal id="auth-modal" size="lg" hide-header hide-footer no-close-on-esc no-close-on-backdrop>
      <div>
        <b-tabs content-class="mt-3 py-3" align="center">
          <b-tab title="Login" active>
            <b-row align-h="center">
              <b-col cols="7">
                <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                  <b-form-input id="input-1" type="email" value="ywc17@psyjai.com" required placeholder="Enter email"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="7">
                <b-form-group id="input-group-1" label="Password:" label-for="input-2">
                  <b-form-input id="input-2" value="1234564789" type="password" required placeholder="Enter email"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="7">
                <b-button variant="primary" block @click="hideModal">Login</b-button>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Register">
            <b-row align-h="center">
              <b-col cols="7">
                <b-form-group id="input-group-1" label="Email address:" label-for="input-3">
                  <b-form-input id="input-3" type="email" required placeholder="Enter email"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="7">
                <b-form-group id="input-group-1" label="Password:" label-for="input-4">
                  <b-form-input id="input-4" type="password" required placeholder="Enter email"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="7">
                <b-form-group id="input-group-1" label="Re-Password:" label-for="input-5">
                  <b-form-input id="input-5" type="password" required placeholder="Enter email"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="7">
                <b-button variant="primary" block @click="hideModal">Register</b-button>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </div>
    </b-modal>
</template>


<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({})
export default class AuthModal extends Vue {
    hideModal() {
        this.$root.$emit('bv::hide::modal', 'auth-modal')
        this.$emit('hide')
    }
}
</script>

<style>

</style>