<template>
  <div class="taker">
    <section class="taker-header">
        <b-container fluid class="h-100">
          <b-row class="align-items-center h-100">
            <b-col>
              <h2 class="text-center h-100">บลาๆๆๆๆ</h2>
            </b-col>
          </b-row>
        </b-container>
    </section>
    <img class="hb w-100" src="@/assets/takerHeader/bottom.svg" />
    <section v-for="(d, i) in headerData" :key="'body_'+i">
      <b-container class="takerChoice m-5">
        <b-row>
          <b-col cols="8" v-if="i%2==1" class="align-items-center">
            <b-row class="d-flex justify-content-end">
              <h6>{{d.name}}</h6>
            </b-row>
            <b-row class="d-flex justify-content-end">
              <p>{{d.desc}}</p>
            </b-row>
            <b-row class="d-flex justify-content-end">
              <b-button pill variant="primary">Button</b-button>
            </b-row>
          </b-col>
          <b-col cols="4" fluid>
            <img :src="require(`@/assets/${d.img}`)" class="body-img w-100" />
          </b-col>
          <b-col cols="8" v-if="i%2==0">
            <b-row>
              <h6>{{d.name}}</h6>
            </b-row>
            <b-row>
              <p>{{d.desc}}</p>
            </b-row>
            <b-row>
              <b-button pill variant="primary">Button</b-button>
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
.taker-header {
  width: 100%;
  height: 50vh;
  background-color: #ed0a36;
  overflow: hidden;
  background-image: url('../assets/takerHeader/right.svg'), url('../assets/takerHeader/left.svg');
  background-position: right -50px bottom 0px, -50px bottom;
  background-repeat: no-repeat, no-repeat;
  background-size: 25vh, 25vh;
}
.header-props {
  width: calc(30vh - 56px);
  z-index: 9999;
  bottom: 0px;
}
.hb {
  margin-top: -10px;
}
</style>

<script>
// @ is an alias to /src
import headerData from '@/mock_data/header.json'

export default {
  name: 'home',
  components: {},
  data: () => ({
    headerData: headerData
  })
}
</script>
