<script>
  import HeaderNav from '../HeaderNav.vue';
  import BottomNav from '../BottomNav.vue';
  import HomeMain from './HomeMain.vue';
  import Intro from './Intro.vue';
  import Technology from './Technology.vue';
  import Technology2 from './Technology2.vue';
  import Pikavue from './Pikavue.vue';
  import Play from './Play.vue';
  import Enhancer from './Enhancer.vue';
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
      Play,
      Enhancer,
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
              <Technology />
            </div>
            <div class="swiper-slide">
              <Technology2 />
            </div>
          </div>
        </div>
      </div>
      <div class="section sec4">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <Pikavue />
            </div>
            <div class="swiper-slide">
              <Pikavue />
            </div>
          </div>
        </div>
      </div>
      <div class="section sec5">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <Play />
            </div>
            <div class="swiper-slide">
              <Play />
            </div>
          </div>
        </div>
      </div>
      <div class="section sec6">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <Enhancer />
            </div>
            <div class="swiper-slide">
              <Enhancer />
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