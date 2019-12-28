<template>
  <div>
    <section class="taker-header">
      <b-container fluid class="h-100">
        <b-row class="align-items-center h-100">
          <b-col class="text-center">
            <b-container>
            <img src="@/assets/logo-white.svg" class="tlogo" />
              <section>
                <h1 class="my-4 text-center text-light">Community ที่เข้าถึงจิตด้วยความเข้าใจ</h1>
                <b-row align-h="center" style="min-height: 50vh;">
                  <b-col cols="5">
                    <div
                      class="card topc text-center d-flex h-100 justify-content-center align-items-center"
                      @click="onSelectActor('taker')"
                    >
                    <img src="@/assets/landing/l.svg" class="lf"/>
                    <h1 class="mt-5">Taker</h1>
                    <h6 class="mt-5">ผู้รับ</h6> 
                    <div class="sline" />
                    <p class='m-2'>ผู้ที่มีความต้องการปรึกษาพูดคุยเพื่อแก้ไขความไม่สบายใจของตนเองให้ดีขึ้น</p>
                    </div>
                  </b-col>
                  <b-col cols="5">
                    <div
                      class="card topc text-center d-flex h-100 justify-content-center align-items-center"
                      @click="onSelectActor('giver')"
                    >
                    <img src="@/assets/landing/r.svg" class="lf"/>
                    <h1 class="mt-5">Giver</h1>
                    <h6 class="mt-5">ผู้ให้</h6> 
                    <div class="sline" />
                    <p class='m-2'>ผู้ที่มีความสามารถ และได้รับการรับรองในการให้คำปรึกษาแก่ผู้ที่มีภาวะวิตกกังวล หรือภาวะเครียด</p>
                    </div>
                  </b-col>
                </b-row>
              </section>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <img class="hb w-100" src="@/assets/takerHeader/bottom.svg" />
  </div>
</template>

<script>
export default {
  methods: {
    onSelectActor(type) {
      if (type === 'taker') {
        this.$router.push({ path: '/taker' })
      } else {
        // .. todo
      }
    }
  }
}
</script>

<style scoped>
.card-select {
  min-height: 50vh;
}
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
.tlogo {
  width: 30%;
}
.lf {
  width: 50%;
  height: 10%
}
.sline {
  width: 70%;
  height: 3px;
  border-bottom: 3px solid #ed0a36;
  border-radius: 50%;
}
.topc:hover {
  background-color: #d4d4d4;
  cursor: pointer;
}
</style>