<script>
  import HeaderNav from '../HeaderNav.vue';
  import BottomNav from '../BottomNav.vue';
  import BottomFooter from '../BottomFooter.vue';
  import Scrollbar from 'smooth-scrollbar';

  export default {
    data(){
      return{

      }
    },
    components: {
      HeaderNav,
      BottomNav,
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
          <ul class="project_content service">
            <li>
              <router-link to="/project/detail/pikavue"><img src="../../assets/media/pikavueweb.jpg" alt=""></router-link>
            </li>
            <li>
              <router-link to="/project/detail/platform"><img src="../../assets/media/platform.jpg" alt=""></router-link>
            </li>
            <li>
              <router-link to="/project/detail/play"><img src="../../assets/media/gdfplayweb.jpg" alt=""></router-link>
            </li>
            <li>
              <router-link to="/project/detail/enhancer"><img src="../../assets/media/genhancer.jpg" alt=""></router-link>
            </li>
          </ul>
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