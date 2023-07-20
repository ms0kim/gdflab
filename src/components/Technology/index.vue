<script>
  import HeaderNav from '../HeaderNav.vue';
  import BottomFooter from '../BottomFooter.vue';
  import Scrollbar from 'smooth-scrollbar';

  export default {
    data() {
      return {

      }
    },
    components: {
      HeaderNav,
      BottomFooter
    },
    mounted() {
      Scrollbar.init(document.querySelector('#mainScroll'), {speed:0.7});
    }
  }
</script>

<template>
  <div class="content">
    <HeaderNav />
    <div id="mainScroll">
      <div>
        <h2>핵심 기술</h2>
        <p>지디에프랩은 IT 서비스를 책임질 AI 기술을 활용한 화질개선 솔루션을 보유하고 있습니다</p>
        <ul>
          <li>
            <h3>AI image upscale</h3>
            <p>AI 업스케일링으로 이미지의 해상도를 높이고 노이즈를 제거하여 선명한 화질을 제공합니다</p>         
          </li>
          <li>
            <h3>AI video upscale</h3>
            <p>AI 업스케일링으로 이미지의 해상도를 높이고 노이즈를 제거하여 선명한 화질을 제공합니다</p>         
          </li>
          <li>
            <h3>AI mask</h3>
            <p>AI 업스케일링으로 이미지의 해상도를 높이고 노이즈를 제거하여 선명한 화질을 제공합니다</p>         
          </li>
          <li>
            <h3>Mobile edge</h3>
            <p>AI 업스케일링으로 이미지의 해상도를 높이고 노이즈를 제거하여 선명한 화질을 제공합니다</p>         
          </li>
        </ul>
      </div>
      <div>
        <h3>적용 가능 산업</h3>
        <ul>
          <li>PC / Server software</li>
          <li>edge device</li>
          <li>mobile app</li>
        </ul>
      </div>
      <div>
        <h3>연구개발 실적</h3>
        <ul>
          <li>
            <p>특허등록</p>
            <h3>15</h3>
          </li>
          <li>
            <p>해외등록</p>
            <h3>2</h3>
          </li>
          <li>
            <p>특허출원</p>
            <h3>6</h3>
          </li>
          <li>
            <p>해외PCT</p>
            <h3>4</h3>
          </li>
        </ul>
      </div>

      <BottomFooter />
    </div>
  </div>
</template>