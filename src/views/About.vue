<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class About extends Vue {

  mounted() {
    this.$root.$emit('bv::show::modal', 'modal-1')
  }
}
</script>

<style lang="css" scoped>

</style>