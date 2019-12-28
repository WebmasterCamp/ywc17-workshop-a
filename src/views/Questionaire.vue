<template>
  <div class="questionaire-container pt-5">
    <section class="taker-header">
      <b-container>
        <div class="text-center py-5 heading-container" v-if="!isStarted">
          <h2 class="mb-5">Question รู้ทันใจ</h2>
          <h5>เพิ่งอกหักมาป่ะเนี่ย หรือกำลังทะเลาะกับแฟน? ถ้าหากช่วง 2-3 สัปดาห์ที่ผ่านมา</h5>
          <h5
            class="mb-5"
          >ปัญหาด้านความรักเริ่มกระทบกับจิตใจและการใช้ชีวิตประจำวันของคุณ ลองมาเช็คอาการกันหน่อยไหม</h5>
          <b-button pill size="lg" variant="outline-primary px-5 start-btn" @click="onStart">Start</b-button>
        </div>
      </b-container>
      <b-container>
        <div>
          <div v-for="(q, i) in loveQuestions" :key="i" class="mb-5">
            <div v-if="i == currentQuestionNo && isStarted">
              <div class="question-wrapper">
                <h4 class="mb-4 text-white pl-5 px-5">{{q.question}}</h4>
                <b-row align-h="center">
                  <b-col cols="5" v-for="(a, j) in q.answers" :key="`a${i}${j}`">
                    <div class="choice-btn p-3 mt-3" :class="{ active: currentSelectedChoice == j }" @click="onSelectChoice(i, j)">{{a.label}}</div>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
          <b-row class="my-4" align-h="center" v-if="isStarted">
            <!-- <b-col cols="2" class="text-center">
              <b-button pill variant="outline-primary start-btn" size="lg" block @click="addStep(-1)" :disabled="currentQuestionNo === 0">
                <i class="fas fa-arrow-left mr-2"></i>กลับ
              </b-button>
            </b-col> -->
            <b-col cols="2" class="text-center">
              <b-button pill variant="outline-primary start-btn" size="lg" block @click="addStep(1)" :disabled="currentSelectedChoice === null">
                ต่อไป
                <i class="fas fa-arrow-right"></i>
              </b-button>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <AuthModal @hide="goResult"></AuthModal>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Questionaire from '@/mock_data/questionaire.json'
import { isLoggedIn } from '../utils'
import AuthModal from '@/components/AuthModal'

@Component({
    components: {AuthModal}
})
export default class QuestionairePage extends Vue {
  currentQuestionNo = 0
  currentSelectedChoice = null
  userAnswer = []
  isStarted = false

  get loveQuestions() {
    return Questionaire.love
  }

  get totalQuestions() {
    return Questionaire.love.length
  }

  mounted() {
    //   this.$root.$emit('bv::show::modal', 'auth-modal
  }

  onStart() {
    this.isStarted = true
  }

  addStep(step) {
    this.currentQuestionNo += step

    if (this.totalQuestions === this.currentQuestionNo) {
    //   if (isLoggedIn()) {
    //     this.showResult()
    //   } else {
    //       }
        this.$root.$emit('bv::show::modal', 'auth-modal')
    }
    this.currentSelectedChoice = null
  }

  goResult() {
    this.$router.push({ path: '/result' })
  }

  onSelectChoice(questionNo, ansIdx) {
    this.currentSelectedChoice = ansIdx
    this.userAnswer.push([this.currentQuestionNo, ansIdx])
  }
}
</script>

<style lang="css" scoped>
.questionaire-container {
  min-height: calc(100vh - 58px);
  background: #ed0a36;
  color: #fafafa;
}

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

.start-btn {
  border: 2px solid #fafafa;
  color: #fafafa;
}
.start-btn:hover {
  background-color: #fafafa;
  border: 2px solid #ed0a36;
  color: #ed0a36;
}
h5 {
  line-height: 1.5em;
}

.heading-container {
  padding-top: 200px !important;
}
.question-wrapper {
  color: #2a2a2a;
  /* border: 8px solid #eee; */
}
.choice-btn {
  box-shadow: 0 6px 9px rgba(68, 85, 113, 0.1);
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  min-height: 80px;
}
.choice-btn.active {
    color: #ed0a36;
    font-weight: 500;
    box-shadow: 0 20px 9px rgba(68, 85, 113, 0.1);
}
</style>