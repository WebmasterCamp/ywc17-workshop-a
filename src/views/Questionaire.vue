<template>
    <b-container>
       <div v-for="(q, i) in loveQuestions" :key="i">
           <div class="d-block">{{q.question}}</div>
           <b-row>
               <b-col cols="3">{{q.answers}}</b-col>
           </b-row>
       </div>
    </b-container>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Questionaire from '@/mock_data/questionaire.json'

@Component({

})
export default class QuestionairePage extends Vue {
    get loveQuestions() {
        return Questionaire.love
    }
    mounted() {
        console.log(Questionaire)
    }
}
</script>