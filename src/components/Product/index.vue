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
            GDF플레이로 네트워크 비용을<br>
            84%까지 절약할 수 있습니다
          </h2>
          <div></div>
          <ul>
            <li>
              <h4>네트워크 비용</h4>
              <h2>84% <span>절약</span></h2>
              <p>
                GDF플레이 솔루션으로<br>
                최대 84% 네트워크 비용 절약
              </p>
            </li>
            <li>
              <h4>해상도 확대</h4>
              <h2>4 <span>배</span></h2>
              <p>
                낮은 해상도의 파일들을<br>
                4배까지 확대 가능
              </p>
            </li>
            <li>
              <h4>인식률</h4>
              <h2>30% <span>향상</span></h2>
              <p>
                열약한 파일도 인식률을<br>
                향상시키는 GDF플레이 솔루션
              </p>
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