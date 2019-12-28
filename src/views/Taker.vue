<template>
  <div class="taker">
    <section>
      <b-container >
        <b-row>
          <b-col v-for="(d, i) in headerData" :key="'header_'+i">
            <b-row>
              <img :src="require(`@/assets/${d.img}`)" class="header-img"/>
            </b-row>
            <b-row>
              <p class="header-desc">
                {{d.name}}
              </p>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section v-for="(d, i) in headerData" :key="'body_'+i">
      <b-container>
        <b-row>
          <b-col v-if="i%2==0">
            <b-row>
              <h6>{{d.name}}</h6>
            </b-row>
            <b-row>
              <p>{{d.desc}}</p>
            </b-row>
          </b-col>
          <b-col>
            <img :src="require(`@/assets/${d.img}`)" class="body-img"/>
          </b-col>
          <b-col v-if="i%2==1">
            <b-row>
              <h6>{{d.name}}</h6>
            </b-row>
            <b-row>
              <p>{{d.desc}}</p>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<style>
  .header-img {
    width: 60px;
    height: 60px;
  }
</style>

<script>
// @ is an alias to /src
import headerData from '@/mock_data/header.json'


export default {
  name: 'home',
  components: {
    
  },
  data: () => ({
    headerData: headerData
  })
}
</script>
