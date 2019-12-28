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
                      class="card text-center d-flex h-100 justify-content-center"
                      @click="onSelectActor('taker')"
                    >Taker</div>
                  </b-col>
                  <b-col cols="5">
                    <div
                      class="card text-center d-flex h-100 justify-content-center"
                      @click="onSelectActor('giver')"
                    >Giver</div>
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
</style>