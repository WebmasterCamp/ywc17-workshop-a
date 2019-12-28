<template>
  <div class="result">
    <section class="taker-header">
      <b-container fluid class="h-100">
        <b-row class="align-items-center h-100">
          <b-col class="text-center">
            <h1 class="text-center h-100 ht">Result</h1>
            <img class="headerIcon m-2" src="@/assets/mood_bad.svg" />
            <h2 class="m-2 text-light">{{'result desc'}}</h2>
            <h4 class="m-2 text-light">{{'result desc'}}</h4>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <b-container>
      <section>
        <!-- <b-card-group deck v-for="(d, i) in headerData" :key="'giver_'+i"> -->
        <h2 class="m-5">{{'กิจกรรม Workshop'}}</h2>
        <b-container class="m-2" fluid>
          <b-row>
            <b-col class md="12" sm="12">
              <b-card
                class="giver-card text-center"
                :img-src="require('@/assets/people-24px.svg')"
                img-alt="Card image"
                img-left
              >
                <h1>testtttttt</h1>
                <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
                <b-button @click="onSelectActor(-1)" pill variant="primary">จองเลย!</b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
        <!-- </b-card-group> -->
      </section>
    </b-container>
    <b-container>
      <section>
        <!-- <b-card-group deck v-for="(d, i) in headerData" :key="'giver_'+i"> -->
        <h2 class="m-5">{{'Top 4 Recomended _____/h2'}}>
        <b-container class="m-2" fluid>
          <b-row>
            <b-col class md="3" sm="12" deck v-for="(d, i) in headerData" :key="'giver_'+i">
              <b-card
                class="giver-card text-center"
                :img-src="require('@/assets/people-24px.svg')"
                img-alt="Card image"
                img-top
              >
                <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
                <b-button @click="onSelectActor(i)" pill variant="primary">จองเลย!</b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
        <!-- </b-card-group> -->
      </section>
    </b-container>
  </div>
</template>

<style>
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
.headerIcon {
  width: 60px;
  height: 60px;
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
    onSelectActor(i) {
      localStorage.setItem("selectedDoctor", i);
      this.$router.push({ path: '/matching'})
    }
  }
}
</script>
