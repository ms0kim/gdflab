<script>
  import HeaderNav from '../HeaderNav.vue';
  import BottomNav from '../BottomNav.vue';
  import HomeMain from './HomeMain.vue';
  import gdfplay from './gdfplay.vue';
  import Technology from './Technology.vue';
  import Technology2 from './Technology2.vue';
  import Pikavue from './Pikavue.vue';
  import Pikavue2 from './Pikavue2.vue';
  import Play from './Play.vue';
  import Play2 from './Play2.vue';
  import Enhancer from './Enhancer.vue';
  import Enhancer2 from './Enhancer2.vue';
  import Application from './Application.vue';
  import Partner from './Partner.vue';
  import Contact from './Contact.vue';
  import BottomFooter from '../BottomFooter.vue';
  import Scrollbar from 'smooth-scrollbar';

  export default {
    data() {
      return {
      }
    },
    components: {
      HeaderNav,
      BottomNav,
      HomeMain,
      gdfplay,
      Technology,
      Technology2,
      Pikavue,
      Pikavue2,
      Play,
      Play2,
      Enhancer,
      Enhancer2,
      Application,
      Partner,
      Contact,
      BottomFooter,
    },
    mounted() {
      Scrollbar.init(document.querySelector('#mainScroll'), {speed:0.7});
    }
  }
</script>
<template>
  <div class="wrap">
    <HeaderNav />
    <!-- <BottomNav /> -->
    <!-- section sec1 -->
    <div id="mainScroll">
      <div class=""><HomeMain /></div>
      <div class=""><gdfplay /></div>
      <div class="">
        <Technology />
        <!-- <div class="swiper-container tecSlide">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <h2>GDFLab Technology</h2>
            </div>
            <div class="swiper-slide">
              <h3>
                지디에프랩만의 고도화 학습 기술로<br>
                AI 모델을 개발합니다
              </h3>
            </div>
            <div class="swiper-slide">
              <h3>
                개발된 AI 모델을 통해 이미지와 동영상의<br>
                화질개선 솔루션 기술을 선보입니다
              </h3>
            </div>
            <div class="swiper-slide">
              <h3>
                실시간 스트리밍 화질개선 기술을 담은<br>
                SDK 기술을 보유하고 있습니다
              </h3>
            </div>
          </div>
        </div> -->
      </div>
      <div class="">
        <Application />
        <!-- <div class="swiper-container product_slide">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <Pikavue />
            </div>
            <div class="swiper-slide">
              <Play />
            </div>
            <div class="swiper-slide">
              <Enhancer />
            </div>
          </div>
        </div> -->
      </div>
      <!-- <div class="section sec5"><Partner /></div> -->
      <div class=""><Contact /></div>
      <div class=""><BottomFooter /></div>
    </div>
  </div>
</template>