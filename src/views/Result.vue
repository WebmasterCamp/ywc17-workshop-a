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
        <h2 class="m-5">{{'Top Suggestion'}}</h2>
        <b-container class="m-2" fluid>
          <b-row>
            <b-col class md="12" sm="12">
              <b-card
                class="giver-card text-center topcard"
                :img-src="require('@/assets/people-24px.svg')"
                img-alt="Card image"
                img-left
              >
                <h1>Art therapy</h1>
                <b-card-text>ถ้าคุณกำลังรู้สึกอ่อนล้าหรือเหน็ดเหนื่อยใจ มาผ่อนคลายไปด้วยกันกับการเยียวยาและบำบัดความเครียดด้วยตัวของคุณเองผ่านสีน้ำในคลาสศิลปะบำบัด</b-card-text>
                <h6>2 มกราคม 63 14:00 - 18:30, Wolfpack gallery bangkok ชั้น 3 ศาลาแดง เขตบางรัก กรุงเทพมหานคร 10330</h6>
                <b-button @click="onSelectActor(-1)" pill variant="secondary">จองเลย!</b-button>
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
            <b-col md="4" sm="12">
              <b-card
                class="giver-card text-center topcard2 h-100"
                :img-src="require('@/assets/people-24px.svg')"
                img-alt="Card image"
                img-top
              >
                 <h3>คุณมินตรา ม่านนิรมิตร, นักจิตวิทยาสังคม</h3>
                <b-card-text>ปรึกษาตัวต่อตัวกับ คุณ มินตรา นักจิตวิทยาสังคมมากด้วยประสบการณ์ เจ้าของเพจชื่อดัง “ทำยังไรให้ไหวตัวทัน” ที่เชื่อว่าทุกคนสามารถเปลี่ยนแปลงโลกได้ด้วยการสื่อสารที่ถูกจุด คุณสามารถรับคำปรึกษาได้อย่างเป็นส่วนตัว</b-card-text>
                <b-button @click="onSelectActor(i)" pill variant="primary">จองเลย!</b-button>
              </b-card>
            </b-col>
            <b-col md="4" sm="12" deck v-for="(d, i) in resultData" :key="'giver_'+i">
              <b-card
                class="giver-card text-center topcard3 h-100"
                :img-src="require('@/assets/people-24px.svg')"
                img-alt="Card image"
                img-top
              >
                <h3>{{d.name}}</h3>
                <b-card-text>{{d.desc}}</b-card-text>
                <b-button @click="onSelectActor(i)" pill variant="primary">จองเลย!</b-button>
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
.topcard {
  background-color: #ed0a36 !important;
  color: #fff;
  border-radius: 15px !important;
}
.topcard2 {
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
      this.$router.push({ path: '/matching' })
    }
  }
}
</script>
