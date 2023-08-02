<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/scrollbar';
  import { Scrollbar, Autoplay } from 'swiper';

  export default {
    data() {
      return {
      }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    methods: {
    },
    setup() {
      return {
        modules: [Scrollbar, Autoplay],
      };
    },
  }
</script>

<template>
  <div class="content application">
    <div class="text">
      <h4>
        GDF플레이 SDK<br>
        적용 가능 산업
      </h4>
      <button>자세히 보기</button>
    </div>
    <swiper
      :scrollbar="{
        hide: false,
        dragSize: 79,
      }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
        stopOnLastSlide: false,
      }"
      :slidesPerView="2.5"
      :spaceBetween="40"
      :modules="modules"
      :loop="true"
      :observer="true"
      :observeParents="true"
      :speed="500"
    >
      <swiper-slide>
        <div></div>
        <img src="../../assets/media/mobile.jpg" alt="">
        <p>Mobile<br>Communication</p>
      </swiper-slide>
      <swiper-slide>
        <div></div>
        <img src="../../assets/media/vehicle.jpg" alt="">
        <p>Vehicle</p>
      </swiper-slide>
      <swiper-slide>
        <div></div>
        <img src="../../assets/media/vehicle.jpg" alt="">
        <p>Flight IT</p>
      </swiper-slide>
      <swiper-slide>
        <div></div>
        <img src="../../assets/media/enter.jpg" alt="">
        <p>Entertainment</p>
      </swiper-slide>
      <swiper-slide>
        <div></div>
        <img src="../../assets/media/telecom.jpg" alt="">
        <p>Telecommunication</p>
      </swiper-slide>
      <swiper-slide>
        <div></div>
        <img src="../../assets/media/telecom.jpg" alt="">
        <p>Government<br>Organization</p>
      </swiper-slide>
    </swiper>
    <!-- <ul>
      <li>
        <img src="../../assets/media/mobile.jpg" alt="">
        <p>Mobile & Communication</p>
      </li>
      <li>
        <img src="../../assets/media/mobile.jpg" alt="">
        <p>Mobile & Communication</p>
      </li>
      <li>
        <img src="../../assets/media/mobile.jpg" alt="">
        <p>Mobile & Communication</p>
      </li>
      <li>
        <img src="../../assets/media/mobile.jpg" alt="">
        <p>Mobile & Communication</p>
      </li>
      <li>
        <img src="../../assets/media/mobile.jpg" alt="">
        <p>Mobile & Communication</p>
      </li>
      <li>
        <img src="../../assets/media/mobile.jpg" alt="">
        <p>Mobile & Communication</p>
      </li>
    </ul> -->
  </div>
</template>