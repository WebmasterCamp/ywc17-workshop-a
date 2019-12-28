<template>
  <div class="taker">
    <section class="taker-header">
        <b-container fluid class="h-100">
          <b-row class="align-items-center h-100">
            <b-col class="text-center">
              <h2 class="text-center h-100 ht">บลาๆๆๆๆ</h2>
              <b-button @click="moveTo('.first-content')" pill variant="secondary mt-5 hbd"><i class="fa fa-arrow-down" aria-hidden="true"></i></b-button>
            </b-col>
          </b-row>
        </b-container>
    </section>
    <img class="hb w-100" src="@/assets/takerHeader/bottom.svg" />
    <section v-for="(d, i) in headerData" :key="'body_'+i">
      <b-container class="takerChoice m-5 first-content">
        <b-row>
          <b-col cols="8" v-if="i%2==1">
            <b-row class="d-flex justify-content-end">
              <h2>{{d.name}}</h2>
            </b-row>
            <b-row class="d-flex justify-content-end">
              <p>{{d.desc}}</p>
            </b-row>
            <b-row class="d-flex justify-content-end">
              <b-button @click="onSelectActor()" pill variant="primary">เลือก</b-button>
            </b-row>
          </b-col>
          <b-col cols="4" fluid>
            <img :src="require(`@/assets/${d.img}`)" class="body-img" />
          </b-col>
          <b-col cols="8" v-if="i%2==0">
            <b-row>
              <h2>{{d.name}}</h2>
            </b-row>
            <b-row>
              <p>{{d.desc}}</p>
            </b-row>
            <b-row>
              <b-button @click="onSelectActor()" pill variant="primary">เลือก</b-button>
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
  margin-top: -1px;
}
.body-img {
  width: 70%;
  height: 70%;
}
.ht {
  color: #FFF;
  margin: auto;
}
.hb {
  width: 100%;
  z-index: 99999;
}
.hbd {
  color: white;
  background-color: white;
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
  }),
  methods: {
    moveTo(element) {
        this.$scrollTo(element, 1100, {
        easing: 'ease-in-out',
        offset: -70
    })
  },
    onSelectActor() {
      this.$router.push({ path: '/questionaire' })
    }
  }
}
</script>
