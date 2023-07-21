<script>
  import HeaderNav from '../HeaderNav.vue';
  import BottomFooter from '../BottomFooter.vue';
  import Scrollbar from 'smooth-scrollbar';

  export default {
    data(){
      return{

      }
    },
    components: {
      HeaderNav,
      BottomFooter,
    },
    mounted() {
      Scrollbar.init(document.querySelector('#mainScroll'), {speed:0.7});
    }
  }
</script>

<template>
  <div class="content project_menu">
    <HeaderNav class="black"/>
      <div id="mainScroll">
        <div class="container">
          <h2>
            앞서나가는 인공지능 기술은<br>
            여러 분야에서 활약하고 있습니다
          </h2>
          <ul>
            <li>
              피카뷰는 콘텐츠 ai리마스터링 서비스로 인공지능을 활용한 노이즈 제거 기술과 압축 손실 복원 기술, Multi-frame 영상 수퍼레졸루션 기술과 특허 받은 객체기반 해상도 복원 기술을 이미지와 동영상 화질 개선 서비스로 제공하고 있습니다
            </li>
            <li>
              GDFplay는 모바일에서 실시간으로 영상을 고화질로 변환해주는 인공지능 영상 업스케일링 sw 모듈로 화질 개선뿐만 아니라 네트워크 비용절감과 스트리밍 서비스 환경을 최적화 할 수 있습니다 ios와 Android 환경에서 앱 서비스를 제공하고 있습니다
            </li>
            <li>
              GDF-Enhancer는 PC 프로그램으로 언제 어디서나 영상을 고화질로 변환해 주는 인공지능 업스케일링 프로그램 입니다. 유저 설정가능 기능으로 원하는 AI모델 선택, 필터기능 추가로 사용자가 원하는 고화질개선 방식 선택가능 합니다.
현재 Windows와 Mac에서 실행 가능하며 무료 버전과 월 구독 풀버전을 제공하고 있습니다. 
            </li>
          </ul>
          <!-- <ul class="project_content service">
            <li>
              <router-link to="/product/detail/pikavue"><img src="../../assets/media/pikavueweb.jpg" alt=""></router-link>
            </li>
            <li>
              <router-link to="/product/detail/platform"><img src="../../assets/media/platform.jpg" alt=""></router-link>
            </li>
            <li>
              <router-link to="/product/detail/play"><img src="../../assets/media/gdfplayweb.jpg" alt=""></router-link>
            </li>
            <li>
              <router-link to="/product/detail/enhancer"><img src="../../assets/media/genhancer.jpg" alt=""></router-link>
            </li>
          </ul> -->
          <!-- <ul class="project_content sdk">
            <li>
              <router-link to="/project/detail/sdk"><img src="../../assets/media/sdk.jpg" alt=""></router-link>
            </li>
          </ul> -->
          <!-- <ul class="project_content tech">
            <li>
              <router-link to="/project/detail/ai"><img src="../../assets/media/ai.jpg" alt=""></router-link>
            </li>
            <li>
              <router-link to="/project/detail/image"><img src="../../assets/media/cat.jpg" alt=""></router-link>
            </li>
            <li>
              <router-link to="/project/detail/video"><img src="../../assets/media/video.jpg" alt=""></router-link>
            </li>
            <li>
              <router-link to="/project/detail/live"><img src="../../assets/media/live.jpg" alt=""></router-link>
            </li>
            <li>
              <router-link to="/project/detail/vr"><img src="../../assets/media/vr.jpg" alt=""></router-link>
            </li>
            <li>
              <router-link to="/project/detail/remote"><img src="../../assets/media/ai.jpg" alt=""></router-link>
            </li>
          </ul> -->
        </div>
        <BottomFooter/>
      </div>
      <div class="scrollbar-track scrollbar-track-y">
        <div class="scrollbar-thumb scrollbar-thumb-y"></div>
      </div>
  </div>
</template>