<template>
  <div class="taker">
    <section class="taker-header">
        <b-container fluid class="h-100">
          <b-row class="align-items-center h-100">
            <b-col class="text-center">
              <h2 class="text-center h-100 ht">บลาๆๆๆๆ</h2>
              <b-button @click="moveTo('#section-2')" pill variant="primary mt-5 hbd" class="scoll-btn"><i class="fa fa-arrow-down" style="font-size: 2em;" aria-hidden="true"></i></b-button>
            </b-col>
          </b-row>
        </b-container>
    </section>
    <img class="hb w-100" src="@/assets/takerHeader/bottom.svg" />
  <b-container id="section-2">
     <b-row class="content py-4" v-for="(d, i) in headerData" :key="'body_'+i">
        <b-col cols="5" class="icon"> <img :src="require(`@/assets/headerLogos/${d.img}`)" class="body-img" /></b-col>
        <b-col>
          <div>
            <h2>{{d.name}}</h2>
            <p>{{d.desc}}</p>
            <b-button pill variant="primary" to="/questionaire">เลือก</b-button>
          </div>
        </b-col>
    </b-row>
  </b-container>

  </div>
</template>

<style>
.content:nth-child(2n) {
    flex-direction: row-reverse;
}
.content:nth-child(2n) > .icon {
     display: flex;
        justify-content: flex-end;
}
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
.scoll-btn {
  border-color: #fafafa;
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
