<script>
  import HeaderNav from '../HeaderNav.vue';
  import BottomNav from '../BottomNav.vue';
  import HomeMain from './HomeMain.vue';
  import Intro from './Intro.vue';
  import Technology from './Technology.vue';
  import Technology2 from './Technology2.vue';
  import Pikavue from './Pikavue.vue';
  import Pikavue2 from './Pikavue2.vue';
  import Play from './Play.vue';
  import Play2 from './Play2.vue';
  import Enhancer from './Enhancer.vue';
  import Enhancer2 from './Enhancer2.vue';
  import Partner from './Partner.vue';
  import Contact from './Contact.vue';
  import BottomFooter from '../BottomFooter.vue';

  export default {
    data() {
      return {
      }
    },
    components: {
      HeaderNav,
      BottomNav,
      HomeMain,
      Intro,
      Technology,
      Technology2,
      Pikavue,
      Pikavue2,
      Play,
      Play2,
      Enhancer,
      Enhancer2,
      Partner,
      Contact,
      BottomFooter,
    }
  }
</script>
<template>
  <div class="wrap">
    <HeaderNav />
    <BottomNav />
    <div id="fullpage">
      <div class="section sec1"><HomeMain /></div>
      <div class="section sec2"><Intro /></div>
      <div class="section sec3">
        <div class="swiper-container tecSlide">
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
        </div>
      </div>
      <div class="section sec4">
        <div class="swiper-container product_slide">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <Pikavue />
            </div>
            <div class="swiper-slide">
              <Pikavue2 />
            </div>
          </div>
        </div>
      </div>
      <div class="section sec5">
        <div class="swiper-container product_slide">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <Play />
            </div>
            <div class="swiper-slide">
              <Play2 />
            </div>
          </div>
        </div>
      </div>
      <div class="section sec6">
        <div class="swiper-container product_slide">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <Enhancer />
            </div>
            <div class="swiper-slide">
              <Enhancer2 />
            </div>
          </div>
        </div>
      </div>
      <div class="section sec7"><Partner /></div>
      <div class="section sec8"><Contact /></div>
      <div class="section fp-auto-height"><BottomFooter /></div>
    </div>
  </div>
</template>