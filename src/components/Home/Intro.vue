<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Mousewheel, Autoplay, EffectFade, EffectCreative, Navigation } from 'swiper';
  import 'swiper/css';
  import "swiper/css/effect-fade";
  import "swiper/css/navigation";

  export default {
    data() {
      return {
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    methods: {
    },
    setup() {
      return {
        modules: [Mousewheel, Autoplay, EffectFade, EffectCreative, Navigation],
      };
    }
  }
</script>

<template>
  <div class="content intro">
    <div class="title">
      <h4>
       지디에프랩<span>의</span> 인공지능 기술<span>은</span> 세계적<span>으로</span> 인정<span>받고 있습니다</span>
      </h4>
      <swiper
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }"
        :slidesPerView="'5'"
        :spaceBetween="30"
        :modules="modules"
        class="logoSlide"
        :loop="true"
        :observer="true"
        :observeParents="true"
        :speed="8000"
      >
        <swiper-slide>
          <img src="../../assets/media/logo1.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/media/logo2.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/media/logo3.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/media/logo4.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/media/logo1.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/media/logo2.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/media/logo3.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/media/logo4.png" alt="">
        </swiper-slide>
      </swiper>

      <swiper
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }"
        :slidesPerView="'5'"
        :spaceBetween="30"
        :modules="modules"
        class="logoSlide"
        :loop="true"
        :observer="true"
        :observeParents="true"
        :speed="8000"
        dir="rtl"
      >
        <swiper-slide>
          <img src="../../assets/media/logo5.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/media/logo6.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/media/logo7.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/media/logo8.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/media/logo5.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/media/logo6.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/media/logo7.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/media/logo8.png" alt="">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>