<template>
  <div class="calling d-flex p-2 flex-col justify-content-center">
    <img src="@/assets/people-24px.svg" class="call-img"/>
    <div class="call-controller position-absolute d-flex p-2 flex-row justify-content-center">
      <b-button pill class="end-btn" >
        <img src="@/assets/call.svg" class="end-btn-img"/>
      </b-button>
    </div>
    <div class="call-timer position-absolute d-flex p-2 flex-row justify-content-center">
      <h4>{{Math.floor(current/3600).toString().padStart(2, "0")+':'+Math.floor(current/60).toString().padStart(2, "0")+':'+Math.floor(current%60).toString().padStart(2, "0")}}</h4>
    </div>
  </div>
</template>

<style>
  .call-controller {
    width: 100%;
    bottom: 20px;
    left: 0px;
    padding-bottom: 10px;
  }
  .calling {
    width: 100%;
    height: calc(100vh - 56px);
    background-color: #fafafa;
  }
  .call-img {
    width: 30vh;
  }
  .end-btn {
    color: #fff;
    background-color: #ed0a36 !important;
    border-color: #ed0a36 !important;
  }
  .end-btn-img {
    fill: #FFF;
  }
  .call-timer {
    width: 100%;
    top: 70px;
    left: 0px;
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
    headerData: headerData,
    initial: 0,
    current: 0,
    timerInterval: null,
    interval: 1,
  }),
  methods: {
    onInterval() {
      this.current = this.current + this.interval
    }
  },
  mounted() {
    setInterval(this.onInterval, this.interval * 1000)
  }
}
</script>
