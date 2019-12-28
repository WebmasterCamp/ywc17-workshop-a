<template>
  <div class="home">
   <b-container>
     test


    <CategoryDetail></CategoryDetail>
    <CategoryDetail></CategoryDetail>
    <CategoryDetail></CategoryDetail>
    <CategoryDetail></CategoryDetail>
   </b-container>



  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CategoryDetail from '@/components/CategoryDetail.vue'

export default {
  name: 'home',
  components: {
    HelloWorld, CategoryDetail
  }
}
</script>
