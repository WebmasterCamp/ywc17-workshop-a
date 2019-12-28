<template>
    <b-container>
       <div v-for="(q, i) in loveQuestions" :key="i">
           <div class="d-block">{{q.question}}</div>
           <b-row>
               <b-col cols="4" v-for="(a, j) in q.answers" :key="`a${i}${j}`">{{a}}</b-col>
               <b-button variant="primary">test</b-button>
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