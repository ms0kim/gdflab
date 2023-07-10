<script>
  export default {
    data() {
      return {
        menu1: true,
        menu2: false,
        menu3: false,
        pikavueSet: '',
        gdfenhancerSet: '',
        gdfplaySet: '',
      }
    },
    mounted() {
      this.slide()
    },
    methods: {
      slide() {
        if(this.menu1){
          clearInterval(this.gdfenhancerSet)
          clearInterval(this.gdfplaySet)
          this.pikavueSet = setInterval(() => 
            this.gdfenhancer(), 5000
          )
        }
        if(this.menu2){
          clearInterval(this.pikavueSet)
          clearInterval(this.gdfplaySet)
          this.gdfenhancerSet = setInterval(() => 
            this.gdfplay(), 5000
          )
        }
        if(this.menu3){
          clearInterval(this.pikavueSet)
          clearInterval(this.gdfenhancerSet)
          this.gdfplaySet = setInterval(() => 
            this.pikavue(), 5000
          )
        }
      },
      pikavue() {
        this.menu2 = false;
        this.menu3 = false;
        this.menu1 = true;
        this.slide();
      },
      gdfenhancer() {
        this.menu1 = false;
        this.menu3 = false;
        this.menu2 = true;
        this.slide();
      },
      gdfplay() {
        this.menu1 = false;
        this.menu2 = false;
        this.menu3 = true;
        this.slide();
      }
    }
  }
</script>

<template>
  <div class="content Project">
    <div class="app">
      <div class="text">
        <h4>
          GDFLab<span>의 혁신적인</span><br>
          인공지능 기술<span>을 선보이는</span><br>
          서비스<span>를 확인하세요</span>
          <button>제품 소개</button>
        </h4>
        <ul>
          <li 
            :class="menu1 ? 'active' : ''"
            @click="pikavue"
          >
            <span>01</span> Pikavue
            <div class="solid"></div>
          </li>
          <li 
            :class="menu2 ? 'active' : ''"
            @click="gdfenhancer"
          >
            <span>02</span> GDF-Enhancer
            <div class="solid"></div>
          </li>
          <li 
            :class="menu3 ? 'active' : ''"
            @click="gdfplay"
          >
            <span>03</span> GDFPlay
            <div class="solid"></div>
          </li>
        </ul>
      </div>
      <div class="view">
        <Transition>
          <div v-if="menu1">
            <img src="../../assets/media/pikavue_web.jpg" alt="">
            <!-- <a href="https://pikavue.com" target="_blank"><i class="ri-external-link-line"></i>Go to Pikavue</a> -->
            <p><span>Pikavue</span>이미지, 동영상 업스케일링을 할 수 있는 피카뷰 서비스를 만나보세요</p>
          </div>
        </Transition>
        <Transition>
          <div v-if="menu2">
            <img src="../../assets/media/gdfenhancer_web.jpg" alt="">
            <!-- <a href="https://gdfenhancer.com/" target="_blank"><i class="ri-external-link-line"></i>Go to GDF-Enhancer</a> -->
            <p><span>GDF-Enhancer</span>PC만 있다면 언제 어디서나 이미지, 동영상 업스케일링 할 수 있습니다</p>
          </div>
        </Transition>
        <Transition>
          <div v-if="menu3">
            <img src="../../assets/media/gdfplay_web.jpg" alt="">
            <!-- <a href="https://gdfplay.io" target="_blank"><i class="ri-external-link-line"></i>Go to GDFPlay</a> -->
            <p><span>GDFPlay</span>저화질을 라이브 스트리밍을 통해 고화질로 변환시켜주는 서비스입니다</p>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>