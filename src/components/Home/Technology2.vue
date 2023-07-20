<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Mousewheel, Autoplay, EffectFade, EffectCreative, Navigation } from 'swiper';
  import 'swiper/css';
  import "swiper/css/effect-fade";
  import "swiper/css/navigation";

  export default {
    data() {
      return {
        change: ''
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    methods: {
      scroll(swiper){
        this.$emit('slide', swiper.activeIndex);
      }
    },
    setup() {
      return {
        modules: [Mousewheel, Autoplay, EffectFade, EffectCreative, Navigation],
      };
    }
  }
</script>

<template>
  <div class="content technology">
    <div class="tech">
      <div class="top">
      </div>
      <ul>
        <li>
          <p class="more"><i class="ri-more-line"></i></p>
          <h2>Live</h2>
          <img src="../../assets/media/live.jpg" alt="">
        </li>
        <li>
          <p class="more"><i class="ri-more-line"></i></p>
          <h2>VR</h2>
          <img src="../../assets/media/vr.jpg" alt="">
        </li>
        <li>
          <p class="more"><i class="ri-more-line"></i></p>
          <h2>Remote</h2>
          <img src="../../assets/media/vr.jpg" alt="">
        </li>
      </ul>


      <!-- <swiper
        :direction="horizontal"
        :slidesPerView="3"
        :spaceBetween="50"
        :modules="modules"
        :class="enabled? 'techSlide swiper-no-mousewheel' : 'techSlide'"
        :touchRatio="1"
        :navigation="{
          nextEl: '.rightBtn',
          prevEl: '.leftBtn'
        }"
        :mousewheel="{
          invert: false,
          releaseOnEdges: true,

        }"
        @scroll="scroll"
      >
        <div class="top">
          <h4>
            GDFLab Technology
          </h4>
        </div> -->
        <!-- <i class="ri-arrow-left-line leftBtn" ref="prev" slot="button-prev"></i>
        <i class="ri-arrow-right-line rightBtn" ref="next" slot="button-next"></i> -->
        <!-- <swiper-slide class="first">
          <p class="more"><i class="ri-more-line"></i></p>
          <h2>AI</h2>
          <img src="../../assets/media/ai.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <p class="more"><i class="ri-more-line"></i></p>
          <h2>image<br>Upscale</h2>
          <img src="../../assets/media/cat.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <p class="more"><i class="ri-more-line"></i></p>
          <h2>video<br>upscale</h2>
          <img src="../../assets/media/video.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <p class="more"><i class="ri-more-line"></i></p>
          <h2>Live</h2>
          <img src="../../assets/media/live.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="last">
          <p class="more"><i class="ri-more-line"></i></p>
          <h2>VR</h2>
          <img src="../../assets/media/vr.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="last">
          <p class="more"><i class="ri-more-line"></i></p>
          <h2>Remote</h2>
          <img src="../../assets/media/vr.jpg" alt="">
        </swiper-slide> -->
      <!-- </swiper> -->
    </div>
  </div>
</template>