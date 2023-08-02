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
  <div class="content gdfplay">
    <div>
      <h4>GDFLab의 주요 기술</h4>
    </div>
    <ul>
      <li>
        <h4><i class="ri-radar-line"></i>네트워크 비용</h4>
        <h2>84 <span>% 절약 <b>(4배 업스케일 기준)</b></span></h2>
      </li>
      <li>
        <h4><i class="ri-picture-in-picture-exit-line"></i>해상도 확대</h4>
        <h2>2, 4 <span> 배 <b>(360p ~ 720p 대상)</b></span></h2>
      </li>
      <li>
        <h4><i class="ri-search-eye-line"></i>인식률</h4>
        <h2>30 <span>% 향상</span></h2>
      </li>
      <li>
        <h4><i class="ri-award-fill"></i>특허등록</h4>
        <h2>31 <span>개 <b>(국내 외 포함)</b></span></h2>
      </li>
    </ul>
    <!-- <div class="title">
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
    </div> -->
  </div>
</template>