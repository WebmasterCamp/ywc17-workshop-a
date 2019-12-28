<template>
    <b-container>
        <div class="text-center my-5">
            <h2>แบบทดสอบ</h2>
            <div class="my-5">Some logo</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, tempora doloremque omnis et similique quidem minima voluptatem commodi fugit, eveniet natus facilis quas nostrum voluptate dolore. Error adipisci totam dignissimos!</p>
             <b-row class="my-4" align-h="center">
               <b-col cols="2" class="text-center">
                    <b-button pill variant="info" size="lg" block @click="addStep(-1)"><i class="fas fa-arrow-left mr-2"></i>กลับ</b-button>
               </b-col>
               <b-col cols="2" class="text-center">
                    <b-button pill variant="secondary" size="lg" block @click="addStep(1)">ต่อไป <i class="fas fa-arrow-right"></i></b-button>
               </b-col>
           </b-row>
        </div>
       <div v-for="(q, i) in loveQuestions" :key="i" class="mb-5">
           <h4 class="d-block mb-4">{{q.question}}</h4>
           <b-row  align-h="center" v-if="currentQuestionNo === i + 1">
               <b-col cols="5" v-for="(a, j) in q.answers" :key="`a${i}${j}`">
                   <div class="choice-btn p-3 mt-3" @click="onSelectChoice(i, j)">{{a.label}}</div>
               </b-col>
           </b-row>
           <b-row class="my-4" align-h="center">
               <b-col cols="2" class="text-center">
                    <b-button pill variant="info" size="lg" block @click="addStep(-1)"><i class="fas fa-arrow-left mr-2"></i>กลับ</b-button>
               </b-col>
               <b-col cols="2" class="text-center">
                    <b-button pill variant="secondary" size="lg" block @click="addStep(1)" :disabled="currentSelectedChoice === null">ต่อไป <i class="fas fa-arrow-right"></i></b-button>
               </b-col>
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

    currentQuestionNo = 0
    currentSelectedChoice = null
    userAnswer = []

    get loveQuestions() {
        return Questionaire.love
    }
    mounted() {
        console.log(Questionaire)
    }

    addStep(step) {
        this.currentQuestionNo += step
        this.currentSelectedChoice = null
    }

    onSelectChoice(questionNo, ansIdx) {
        this.currentSelectedChoice = ansIdx
        this.userAnswer.push([this.currentQuestionNo, ansIdx])
    }
}
</script>

<style lang="css" scoped>
.choice-btn {
    box-shadow: 0 6px 9px rgba(68,85,113,.1);
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
}
</style>