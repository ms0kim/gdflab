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

  // import gsap from "gsap";
  // import ScrollTrigger from "gsap/ScrollTrigger";
  // import MotionPathPlugin from "gsap/MotionPathPlugin";
  // gsap.registerPlugin(MotionPathPlugin);
  // gsap.registerPlugin(ScrollTrigger);

  export default {
    data() {
      return {
        last_slide: false,
        current_slide: 1,
        total_slide: 0,
        animation: false,
        slideNo: 0,
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
    },
    mounted() {
      this.mainSlide()
      // this.scrollAni()
    },
    methods: {
      //풀페이지
      mainSlide() {
        const Slider = function(pages, pagination, slideNo) {
          let slides = [], //슬라이드 선택
              // btns = [], //페이지 버튼
              count = 0, //슬라이드 갯수
              current = 0, //현재 슬라이드
              touchstart = 0,
              animation_state = false; //애니메이션
          let stopSlide = document.querySelector('.stopSlide')

          const init = () => {
            slides = pages.children;
            count = slides.length;
            // for(let i = 0; i < count; i++) {
            //   slides[i].style.bottom = i;
            //   // let btn = document.createElement('li');
            //   // btn.dataset.slide = i;
            //   // btn.addEventListener('click', btnClick)
            //   // btns.push(btn);
            //   // pagination.appendChild(btn);
            // }
            // btns[0].classList.add('active');
          }

          //애니메이션 간격, 현재 슬라이드 번호 매기기
          const gotoNum = (index) => {
            let slideStart = true;
            if(index == 3 && slideNo < 3){
              console.log(slideNo)
              slideStart = false;
            }else if(!slideStart && slideNo == 3){
              slideStart = true;
            }else if(slideStart && (index != current) && !animation_state) {
              animation_state = true;
              setTimeout(() => animation_state = false, 500);
              // btns[current].classList.remove('active');
              current = index;
              // btns[current].classList.add('active');
              for(let i = 0; i < count; i++) {
                slides[i].style.bottom = (current - i) * 100 + '%';
              }
            }
          }

          //슬라이드 기능
          const gotoNext = () => current < count - 1 ? gotoNum(current + 1) : false;
          const gotoPrev = () => current > 0 ? gotoNum(current - 1) : false;
          // const btnClick = (e) => gotoNum(parseInt(e.target.dataset.slide));
          pages.ontouchstart = (e) => touchstart = e.touches[0].screenY;
          pages.ontouchend = (e) => touchstart < e.changedTouches[0].screenY ? gotoPrev() : gotoNext();
          pages.onmousewheel = pages.onwheel = (e) => e.deltaY < 0 ? gotoPrev() : gotoNext();

          init();
        }

        let pages = document.querySelector('.slide');
        let pagination = document.querySelector('.pagination');
        let slideNo = this.slideNo;
        let slider = new Slider(pages, pagination, slideNo); //슬라이드 생성
        this.total_slide = pages.children.length;
        console.log(slideNo)
      },

      //스크롤 이벤트
      // scrollAni() {
      //   const fullpage = this.$refs.fullpage;
      //   const homemain = this.$refs.section1;
      //   const intro = this.$refs.section2;
      //   const technology = this.$refs.section3;
      //   const pikavue = this.$refs.section4;
      //   const play = this.$refs.section5;
      //   const enhancer = this.$refs.section6;
      //   const partner = this.$refs.section7;
      //   const contact = this.$refs.section8;
      //   const footer = this.$refs.section9;

      //   gsap.defaults({ease: 'power1', duration: 3})
      //   const tl = gsap.timeline();
      //   tl.from(technology, {xPercent: -100});

      //   ScrollTrigger.create({
      //     animation: tl,
      //     trigger: fullpage,
      //     start: "top top", 
      //     end: "+=1000",
      //     pin: true,
      //     scrub: true,
      //     anticipatePin: 1
      //   })

      //   // gsap.utils.toArray(fullpage.children).forEach((section, i) => {
      //   //   ScrollTrigger.create({
      //   //     trigger: section,
      //   //     start: "top top", 
      //   //     pin: true,
      //   //     pinSpacing: false,
      //   //   });
      //   // });
      //   // ScrollTrigger.create({
      //   //   snap: 1 / 4
      //   // });
      // },

      //슬라이드 번호 만들기
      firstWheel(delta) {
        if(delta.deltaY > 0 && this.current_slide < this.total_slide && !this.animation) {
          this.animation = true;
          setTimeout(() => this.animation = false, 500);
          this.current_slide += 1;
        }else if(delta.deltaY < 0 && this.current_slide > 1 && !this.animation){
          this.animation = true;
          setTimeout(() => this.animation = false, 500);
          this.current_slide -= 1;
        }
      },

      slideStop(slide) {
        this.slideNo = slide
        console.log(this.slideNo)
      },

      //footer슬라이드
      wheelEvent(delta) {
        if(delta.deltaY > 0){
          //마우스 내렸을 때
          this.last_slide = true;
        }else if(delta.deltaY < 0 && this.current_slide == this.total_slide){
          //마우스 올렸을 때, 마지막 슬라이드일 때
          this.last_slide = false;
        }
      },
    },
    watch: {
      slideNo(newVal){
         this.slideNo = newVal;
         this.mainSlide();
      }
    }
  }
</script>

<template>
  <div class="wrap home">
    <HeaderNav />
    <BottomNav />
    <!-- <div ref="fullpage">
      <section ref="section1"><HomeMain /></section>
      <section ref="section2"><Intro /></section>
      <section ref="section3"><Technology /></section>
      <section ref="section4"><Pikavue /></section>
      <section ref="section5"><Play /></section>
      <section ref="section6"><Enhancer /></section>
      <section ref="section7"><Partner /></section>
      <section ref="section8"><Contact /></section>
      <section ref="section9"><BottomFooter /></section>
    </div> -->

    <ul 
      class="slide"
      @wheel="firstWheel"
      ref="fullpage"
    >
      <li class="first"><HomeMain /></li>
      <li><Intro /></li>
      <li>
        <Technology 
          ref="section3"
          @wheel="stopSlide"
          @slide="slideStop"
          class="stopSlide"
        />
      </li>
      <li><Pikavue /></li>
      <li><Play /></li>
      <li><Enhancer /></li>
      <li><Partner /></li>
      <li 
        @wheel="wheelEvent"
        :class="[last_slide ? 'slideUp' : 'slideDown']"
      >
        <Contact />
      </li>
    </ul>

    <div 
      @wheel="wheelEvent"
      class="last"
      :class="last_slide ? 'lastUp' : 'lastDown'"
    >
      <BottomFooter />
    </div>
    <ul class="pagination"></ul>

    <div class="slideNum">
      <p>
        <span v-if="current_slide < 10">0</span>
        {{ current_slide }}
      </p>
      <span class="star">*</span>
      <p>
        <span v-if="total_slide < 10">0</span>
        {{ total_slide }}
      </p>
    </div>    
  </div>
</template>