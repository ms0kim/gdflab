<script>
  import HeaderNav from '../HeaderNav.vue'
  import BottomNav from '../BottomNav.vue'
  import HomeMain from './HomeMain.vue'
  import Intro from './Intro.vue'
  import Technology from './Technology.vue'
  import Pikavue from './Pikavue.vue'
  import Play from './Play.vue'
  import Enhancer from './Enhancer.vue'
  import Partner from './Partner.vue'
  import Contact from './Contact.vue'
  import BottomFooter from '../BottomFooter.vue'

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Mousewheel, EffectCreative, Pagination } from 'swiper';
  import 'swiper/css/pagination';
  import 'swiper/css';

  export default {
    data() {
      return {
        wheelTimer: ''
      }
    },
    components: {
      HeaderNav,
      BottomNav,
      HomeMain,
      Intro,
      Technology,
      Pikavue,
      Play,
      Enhancer,
      Partner,
      Contact,
      BottomFooter,

      Swiper,
      SwiperSlide
    },
    mounted() {
      this.mouseEvent()
    },
    methods: {
      mouseEvent() {
        let slideContent = document.querySelectorAll('.home .slide>li');
        let curIdx = 0;

        //휠 이벤트
        window.addEventListener('wheel', function(e){
          this.clearTimeout(this.wheelTimer);
          this.wheelTimer = this.setTimeout(function() {
            if(e.deltaY > 0) mouseScroll(++curIdx); //마우스 휠 내렸을 때
            else mouseScroll(--curIdx); //마우스 휠 올렸을 때
          }, 100)
        });

        //스크롤 처리
        function mouseScroll(sidx) {
          console.log(sidx);
          console.log(slideContent.length);
          sidx = sidx < 0 ? 0 : sidx;
          sidx = sidx > slideContent.length - 1 ? slideContent.length - 1 : sidx;

          curIdx = sidx;
          slideContent[curIdx].scrollIntoView({
            block: 'start', inline: 'start', behavior: 'smooth'
          })
        }

        // let className = 'box';
        // let currentScroll = 0;
        // let tim;

        // window.onload = function() {
        //   let elm = document.getElementsByClassName(className);
        //   for(let i = 0; i < elm.length; i++){
        //     elm[i].addEventListener('wheel', mouseWheelEvent, false);
        //     elm[i].addEventListener('DOMMouseScroll', mouseWheelEvent, false);
        //   }
        // }

        // function mouseWheelEvent(e) {
        //   e.preventDefault();
        //   let delta = 0;
        //   if(!event) event = window.event;
        //   if(event.wheelDelta){
        //     delta = event.wheelDelta / 120;
        //     if(window.opera) delta = -delta;
        //   }
        //   else if(event.detail){
        //     delta = -event.detail / 3;
        //   }

        //   let p = e.target.parentElement;
        //   let index = Array.prototype.indexOf.call(p.children, e.target);
        //   let elmArr = e.target.parentElement.children;
        //   currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        //   let NextTarget = currentScroll;
          
        //   if(delta > 0){
        //     if(index > 0){
        //       let no = (index - 1);
        //       NextTarget = elmArr[no].offsetTop;
        //     }
        //   }
        //   clearInterval(tim);
        //   tim = setInterval(tran, 1);
          
        //   function tran() {
        //     let speed = 5;
        //     if(currentScroll == NextTarget){
        //       clearInterval(tran);
        //     }else{
        //       if(currentScroll - speed > NextTarget){
        //         currentScroll -= speed;
        //       }else if(currentScroll + speed < NextTarget){
        //         currentScroll += speed;
        //       }else{
        //         currentScroll = NextTarget;
        //       }
        //       window.scrollTo(0, currentScroll);
        //     }
        //   }
        // }
      },
    },
    setup() {
      const slideNum = (num) => {
        return ('0' + num).slice(-2);
      };
      
      const totalSlide = (current, total) => {
        return  '<span class="'+ current +'"></span>'
        + '<span class="star">*</span>' +
        '<span class="'+ total +'"></span>'
      }

      return {
        slideNum,
        totalSlide,
        modules: [Mousewheel, EffectCreative, Pagination],
      };
    },
    watch: {
    }
  }
</script>

<template>
  <div class="wrap home">
    <HeaderNav />
    <BottomNav />
    <ul class="slide">
      <li class="box"><HomeMain /></li>
      <li class="box"><Intro /></li>
      <li class="box"><Technology /></li>
      <li class="box"><Pikavue /></li>
      <li class="box"><Play /></li>
      <li class="box"><Enhancer /></li>
      <li class="box"><Partner /></li>
      <li class="box"><Contact /></li>
      <li class="box"><BottomFooter /></li>
    </ul>
    <!-- <swiper
      :direction="'vertical'"
      :pagination="{
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: slideNum,
        formatFractionTotal: slideNum,
        renderFraction: totalSlide,
      }"
      :mousewheel="{
         invert: false,
        //  releaseOnEdges: true,
         thresholdDelta: 150,
         thresholdTime: 1000
      }"
      :modules="modules"
      class="homeSlide"
      :speed="800"
      :touch-ratio="0"
      :creativeEffect="{
        prev: {
          shadow: true,
          translate: [0, '-10%', -1],
        },
        next: {
          translate: [0, '100%', 0],
        },
      }"
      @scroll="scroll"
      @init="onInitialized"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      @fromEdge="mouseChange(swiper)"
      @activeIndexChange="slideNum(swiper)"
    > -->
    <!-- :effect="'creative'" -->
      <!-- <span class="swiper-pagination"></span>
      <swiper-slide>
        <HomeMain />
      </swiper-slide>
      <swiper-slide>
        <Intro />
      </swiper-slide>
      <swiper-slide>
        <Technology @start="onSlideChangem" @end="onSlideChangem"/>
      </swiper-slide>
      <swiper-slide>
        <Pikavue />
      </swiper-slide>
      <swiper-slide>
        <Play />
      </swiper-slide>
      <swiper-slide>
        <Enhancer />
      </swiper-slide>
      <swiper-slide>
        <Partner />
      </swiper-slide>
      <swiper-slide>
        <Contact />
      </swiper-slide>
    </swiper>
    <BottomFooter /> -->

  </div>
</template>