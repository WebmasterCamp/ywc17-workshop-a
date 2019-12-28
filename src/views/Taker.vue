<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <section>
      <b-container>
        <b-row>
          <b-col v-for="(d, i) in headerData" :key="'header_'+i">
            <b-row>
              <img :src="require(d.img)" class="header-img"/>
            </b-row>
            <b-row>
              <p class="header_desc">'
                {{d.desc}}
              </p>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container>
        <b-row>
          <b-col v-for="(d, i) in headerData" :key="'header_'+i">
            <b-row>
              <img :src="require(d.img)" class="header-img"/>
            </b-row>
            <b-row>
              <p class="header_desc">'
                {{d.desc}}
              </p>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import headerData from '@/mock_data/header.json'


export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: () => ({
    headerData: headerData
  })
}
</script>
