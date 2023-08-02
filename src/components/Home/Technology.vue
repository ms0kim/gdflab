<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Autoplay, EffectFade, EffectCreative, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export default {
  data() {
    return {
      change: '',
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {},
  methods: {
    // scroll(swiper){
    //   this.$emit('slide', swiper.activeIndex);
    // }
  },
  setup() {
    return {
      modules: [Mousewheel, Autoplay, EffectFade, EffectCreative, Navigation],
    };
  },
};
</script>

<template>
  <div class="content technology">
    <div>
      <h4>GDFPlay App System</h4>
      <!-- <img src="../../assets/media/mockup1.png" alt="" /> -->
    </div>
    <!-- <p>
      GDF플레이는 모바일 또는 데스크탑에서 실시간으로 영상을 고화질로 변환해주는<br>
      인공지능 영상 업스케일링 SW 모듈이며 현재 테스트 서비스를 제공하고 있습니다
      <span></span>
      실시간 스트리밍 되는 저화질의 영상을 지디에프랩의 인공지능 기술로<br>
      고화질 출력을 하여 네트워크 비용절감은 물론 스트리밍 서비스 환경을 최적화 할 수 있습니다<br>
      GDF플레이는 SDK 형식으로 개발되어 있으며 디바이스에 맞춰 사용할 수 있습니다<br>        
      <span></span>
      GDF플레이는 지디에프랩의 트랜스코더를 이용해 미디어 파일을 압축한 후<br>
      데스크탑에서도 GDF플레이 홈페이지에서 실시간 스트리밍 서비스를 테스트 할 수 있습니다
    </p> -->
    <!-- <h3>GDF플레이 스트리밍 기술</h3> -->
    <ul class="play">
      <li class="before">
        <h5>스트리밍 서비스</h5>
        <img src="../../assets/media/before.png" alt="" />
      </li>
      <li><img src="../../assets/media/mockup2.png" alt="" /></li>
      <li class="after">
        <h5>사용자</h5>
        <img src="../../assets/media/after.png" alt="" />
      </li>
      <li>
        <h2>GDFPLAY</h2>
      </li>
    </ul>
    <ul class="text">
      <li>
        <h3><span class="material-symbols-outlined">low_density</span></h3>
        <h4>1<br>저화질 영상 입력</h4>
        <p>
          저화질 영상을 입력하여<br>
          네트워크 비용을 절약합니다
        </p>
      </li>
      <li>
        <h3><span class="material-symbols-outlined">memory</span></h3>
        <h4>2<br>GDF플레이 작동</h4>
        <p>
          입력된 저화질 영상을<br>
          GDF플레이 SDK에서 업스케일 합니다
        </p>
      </li>
      <li>
        <h3><span class="material-symbols-outlined">ungroup</span></h3>
        <h4>3<br>업스케일 영상 출력</h4>
        <p>
          4배까지 업스케일 된<br>
          깨끗한 화질의 영상을 출력합니다
        </p>
      </li>
    </ul>
    <!-- <p>
      GDF플레이의 스트리밍 기술의 원리는 이렇습니다<br>
      스트리밍 서비스에서 저화질의 영상을 재생 후 GDF플레이 SDK를 거쳐<br>
      업스케일 된 고화질의 영상을 시청할 수 있습니다
    </p> -->
    <!-- <div class="con">
        <swiper
          :autoplay="{
            delay: 0,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }"
          :direction="horizontal"
          :slidesPerView="4"
          :spaceBetween="50"
          :modules="modules"
          :class="'techSlide'"
          :loop="true"
          :observer="true"
          :observeParents="true"
          :speed="8000"
        >
          <div class="top">
            <h4>
              다양한 디바이스<span>에서</span> 인공지능 솔루션<span>을</span> 만나볼 수 있습니다
            </h4>
          </div>
          <swiper-slide>
            <h2>Mobile</h2>
            <img src="../../assets/media/mobile.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <h2>IoT</h2>
            <img src="../../assets/media/sdk.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <h2>Vehicle<br>Flight IT</h2>
            <img src="../../assets/media/vehicle.jpg" alt="">
          </swiper-slide>
          <swiper-slide class="last">
            <h2>Enter<br>tainment</h2>
            <img src="../../assets/media/enter.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <h2>Security</h2>
            <img src="../../assets/media/security.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <h2>Telecom</h2>
            <img src="../../assets/media/telecom.jpg" alt="">
          </swiper-slide>
        </swiper>
      </div> -->
  </div>
</template>
