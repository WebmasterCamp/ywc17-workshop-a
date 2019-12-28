<template>
  <div class="result">
    <section>
      <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
        <img src="@/assets/people-24px.svg" />
         <h6>{{'result desc'}}</h6>
        <b-card-text>อธิบาย</b-card-text>
      </b-card>
    </section>
    <section>
      <!-- <b-card-group deck v-for="(d, i) in headerData" :key="'giver_'+i"> -->
      <b-container fluid>
        <b-row>
          <b-col class md="4" sm="12" deck v-for="(d, i) in headerData" :key="'giver_'+i">
            <b-card
              class="giver-card"
              :img-src="require('@/assets/people-24px.svg')"
              img-alt="Card image"
              img-top
            >
              <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      <!-- </b-card-group> -->
    </section>
  </div>
</template>

<style>
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
