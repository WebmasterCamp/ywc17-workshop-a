<template>
  <div class="home">
   <b-container style="min-height:100vh;">
     test


    <CategoryDetail></CategoryDetail>
    <CategoryDetail></CategoryDetail>
    <CategoryDetail></CategoryDetail>
    <CategoryDetail></CategoryDetail>
    <b-button variant="primary"  @click="moveTo('#section-2')">Scroll Down</b-button>
   </b-container>


    <div style="min-height:100vh;" id="section-2">ss</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CategoryDetail from '@/components/CategoryDetail.vue'
import { Vue, Component} from 'vue-property-decorator'

@Component({components: {
    HelloWorld, CategoryDetail
  }})
export default class Home extends Vue {
  moveTo(element) {
        this.$scrollTo(element, 1100, {
        easing: 'ease-in-out',
        offset: -70
    })
  }
}
</script>
