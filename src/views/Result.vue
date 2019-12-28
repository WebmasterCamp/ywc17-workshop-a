<template>
  <div class="result">
    <section class="taker-header">
      <b-container fluid class="h-100">
        <b-row class="align-items-center h-100" align-h="center">
          <b-col class="text-center" cols="6">
            <h3 class="text-center h-100 ht">ผลความเสี่ยงด้านสภาวะทางสุขภาพจิตของคุณจากแบบทดสอบอยู่ในระดับ</h3>
            <img class="headerIcon m-2" src="@/assets/mood_bad.svg" />
            <h4 class="m-2 text-light">ค่อนข้างไม่เสถียร</h4>
            <p class="m-2 text-light" style="line-height: 1.5em;">ใส่ใจชื่นชมมากที่คุณให้ความสำคัญในการทำความเข้าใจความรู้สึกของตนเอง ถึงแม้ว่าสภาพทางจิตใจของคุณในช่วงนี้อยู่ในเกณฑ์ค่อนข้างไม่เสถียร แต่ใส่ใจไม่อยากให้คุณกังวลกับผลของแบบทดสอบมากจนเกินไป เพราะคุณสามารถจัดการเรื่องรับมือและจัดการกับสภาวะทางอารมณ์ของตัวเองได้หลายวิธีด้วยกัน</p>
           </b-col>
        </b-row>
      </b-container>
    </section>
    <b-container>
      <section>
        <!-- <b-card-group deck v-for="(d, i) in headerData" :key="'giver_'+i"> -->
        <h2 class="m-5">{{'Top Suggestion'}}</h2>
        <b-container class="m-2" fluid>
          <b-row>
            <b-col class md="12" sm="12">
              <b-card
                class="giver-card text-center topcard"
                :img-src="require('@/assets/art.jpg')"
                img-alt="Card image"
                img-left
              >
                <h1>Art therapy</h1>
                <b-card-text class="mt-2">ถ้าคุณกำลังรู้สึกอ่อนล้าหรือเหน็ดเหนื่อยใจ มาผ่อนคลายไปด้วยกันกับการเยียวยาและบำบัดความเครียดด้วยตัวของคุณเองผ่านสีน้ำในคลาสศิลปะบำบัด</b-card-text>
                <h6 class="mt-3">2 มกราคม 63 14:00 - 18:30, Wolfpack gallery bangkok ชั้น 3 ศาลาแดง เขตบางรัก กรุงเทพมหานคร 10330</h6>
                <b-button class="mt-3" @click="onSelectActor(-1)" pill variant="secondary" to="/payment">จองเลย!</b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
        <!-- </b-card-group> -->
      </section>
    </b-container>
    <b-container>
      <section>
        <h2 class="m-5">{{'Other suggestions'}}</h2>
        <b-container class="m-2" fluid>
          <b-row>
            <b-col md="4" sm="12" deck v-for="(d, i) in resultData" :key="'giver_'+i">
              <b-card
                class="giver-card text-center topcard3 h-100 p justify-items-center align-content-center"
                :img-src="require(`@/assets/${d.img}`)"
                img-alt="Card image"
                img-top
              >
                <h3>{{d.name}}</h3>
                <b-card-text class="m-2">{{d.desc}}</b-card-text>
                <b-button class="m-2" @click="onSelectActor(i)" pill variant="primary" to="/payment">จองเลย!</b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </b-container>
  </div>
</template>

<style>
.taker-header {
  width: 100%;
  height: 70vh;
  background-color: #ed0a36;
  overflow: hidden;
  background-image: url('../assets/takerHeader/right.svg'), url('../assets/takerHeader/left.svg');
  background-position: right -50px bottom 0px, -50px bottom;
  background-repeat: no-repeat, no-repeat;
  background-size: 25vh, 25vh;
}
.headerIcon {
  width: 120px;
  height: 120px;
}
.topcard {
  background-color: #ed0a36 !important;
  color: #fff;
  border-radius: 15px !important;
}
.topcard3:hover {
  background-color: #7b8eff !important;
  color: #fff;
  border-radius: 15px !important;
}
.topcard3 {
  border-radius: 15px !important;
}
</style>

<script>
// @ is an alias to /src
import resultData from '@/mock_data/result.json'

export default {
  name: 'home',
  components: {},
  data: () => ({
    resultData: resultData
  }),
  methods: {
    onSelectActor(i) {
      localStorage.setItem('selectedDoctor', i)
      // this.$router.push({ path: '/matching' })
    }
  }
}
</script>
