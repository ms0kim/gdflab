<script>
  import HeaderNav from '../HeaderNav.vue';
  import BottomNav from '../BottomNav.vue';
  import BottomFooter from '../BottomFooter.vue';
  import Scrollbar from 'smooth-scrollbar';

  export default {
    data(){
      return{
        // text1: true,
        // text2: false,

        ai: false,
        image: false,
        video: false,
        live: false,
        vr: false,
        sdk: false,
        pikavue: false,
        play: false,
        enhancer: false,
        contact: false,
      }
    },
    mounted(){
      Scrollbar.init(document.querySelector('#mainScroll'), {speed:0.7});
    },
    methods: {
    },
    components: {
      HeaderNav,
      BottomNav,
      BottomFooter,
    }
  }
</script>

<template>
  <div class="content contactUs" id="mainScroll">
    <HeaderNav class="black"/>
      <form @submit.prevent>
        <!-- <Transition name="right">
          <div class="contact_text" v-if="text1">
            <h4>
              문의할 카테고리를<br>
              선택해주세요
              <p>* 해당 분야를 모두 선택해주세요</p>
            </h4>
            <div class="category">
              <div>
                <button class="abtn" :class="ai ? 'active' : ''" @click="ai = !ai">AI</button>
                <button class="abtn" :class="image ? 'active' : ''" @click="image = !image">이미지 업스케일</button>
                <button class="abtn" :class="video ? 'active' : ''" @click="video = !video">동영상 업스케일</button>
                <button class="abtn" :class="live ? 'active' : ''" @click="live = !live">라이브 스트리밍</button>
                <button class="abtn" :class="vr ? 'active' : ''" @click="vr = !vr">VR</button>
                <button class="abtn" :class="sdk ? 'active' : ''" @click="sdk = !sdk">SDK</button>
                <button class="abtn" :class="pikavue ? 'active' : ''" @click="pikavue = !pikavue">Pikavue</button>
                <button class="abtn" :class="play ? 'active' : ''" @click="play = !play">GDF Play</button>
                <button class="abtn" :class="enhancer ? 'active' : ''" @click="enhancer = !enhancer">GDF-Enhancer</button>
                <button class="abtn" :class="contact ? 'active' : ''" @click="contact = !contact">견적 문의</button>
              </div>
              <div class="btns">
                <button class="abtn" @click="[text1 = false, text2 = true]">다음으로</button>
              </div>
            </div>
          </div>
        </Transition> -->
  
        <Transition name="right">
          <div class="contact_text">
            <h4>
              문의할 내용에 대해<br>
              알려주세요
            </h4>
            <div class="input">
              <div>
                <input type="text" placeholder="회사/단체명">
                <input type="text" placeholder="성함">
                <input type="text" placeholder="연락처">
                <input type="text" placeholder="이메일">
              </div>
              <h5>문의 내용</h5>
              <textarea name="" id="" cols="30" rows="10" placeholder="문의내용을 입력해주세요"></textarea>
              <div class="btns">
                <button class="abtn" type="submit">문의하기</button>
                <button class="abtn" @click="[text2 = false, text1 = true]">이전으로</button>
              </div>
            </div>
          </div>
        </Transition>
      </form>
      <BottomFooter />
  </div>
</template>