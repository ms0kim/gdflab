<script>
  export default {
    data(){
      return{

      }
    },
    mounted() {
    },
    components: {
    }
  }
</script>

<template>
  <div class="content project_detail">
    <div class="title">
      <div class="text">
        <p>AI SDK test service</p>
        <h2>GDF Play SDK</h2>
        <a class="abtn" href="https://gdfplay.io/" target="_blank">홈페이지로 가기</a>
        <a class="abtn" href="https://apps.apple.com/kr/app/gdfplay-io/id6446156544" target="_blank"><i class="ri-apple-fill"></i>App store</a>
        <a class="abtn" href="https://play.google.com/store/apps/details?id=com.gdflab.gdfplayer2" target="_blank"><i class="ri-google-play-fill"></i>Google play</a>
      </div>
      <div class="arrow">
        <i class="ri-mouse-line"></i>
        <p>아래로 스크롤 해주세요</p>
      </div>
      <div class="back"></div>
      <img src="../../assets/media/gdfplayweb.jpg" alt="">
    </div>
    <div class="project_all">
      <div class="detail">
        <div class="detail_text">
          <p>
            GDF플레이는 모바일 또는 데스크탑에서 실시간으로 영상을 고화질로 변환해주는<br>
            인공지능 영상 업스케일링 SW 모듈이며 현재 테스트 서비스를 제공하고 있습니다
            <span></span>
            실시간 스트리밍 되는 저화질의 영상을 지디에프랩의 인공지능 기술로<br>
            고화질 출력을 하여 네트워크 비용절감은 물론 스트리밍 서비스 환경을 최적화 할 수 있습니다<br>
            GDF플레이는 SDK 형식으로 개발되어 있으며 디바이스에 맞춰 사용할 수 있습니다<br>        
            <span></span>
            GDF플레이는 지디에프랩의 트랜스코더를 이용해 미디어 파일을 압축한 후<br>
            데스크탑에서도 GDF플레이 홈페이지에서 실시간 스트리밍 서비스를 테스트 할 수 있습니다
          </p>
        </div>
        <div class="team">
          <p>Team</p>
          <ul>
            <li>
              <p class="bold">프로젝트 리더</p>
              <p>Dennis</p>
            </li>
            <li>
              <p class="bold">프로젝트 매니저</p>
              <p>Dennis</p>
              <p>Mudasar</p>
            </li>
            <li>
              <p class="bold">기획</p>
              <p>Dennis</p>
              <p>Nick</p>
              <p>Mudasar</p>
              <p>James</p>
            </li>
            <li>
              <p class="bold">디자인</p>
              <p>Dennis</p>
              <p>Nick</p>
              <p>Mudasar</p>
            </li>
            <li>
              <p class="bold">개발</p>
              <p>Dennis</p>
              <p>Nick</p>
              <p>Mudasar</p>
              <p>James</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="project_detail_view play">
        <div class="img1" style="background: #026fff;">
          <img src="../../assets/media/play1.png" alt="">
          <img src="../../assets/media/play2.png" alt="">
        </div>
        <div class="img2">
          <img src="../../assets/media/play6.png" alt="">
          <p>
            앱에서 여러가지 해상도로 준비된 샘플 영상을 확인할 수 있으며<br>
            영상을 업로드 하면 해상도 별로 리스트가 등록됩니다<br>
            등록된 영상은 해상도 정보와 기술 적용 전/후를 확인할 수 있습니다<br>
          </p>
        </div>
        <div class="img3">
          <div>
            <img src="../../assets/media/270.png" alt="">
            <p>
              <span>270p x 4</span> 1080p 옵션<br>
              모바일 트래픽 절감 <b>84%</b>
            </p>
          </div>
          <div>
            <img src="../../assets/media/360.png" alt="">
            <p>
              <span>360p x 3</span> 1080p 옵션<br>
              모바일 트래픽 절감 <b>70%</b>
            </p>
          </div>
          <div>
            <img src="../../assets/media/480.png" alt="">
            <p>
              <span>480p x 2</span> 960p 옵션<br>
              모바일 트래픽 절감 <b>60%</b>
            </p>
          </div>
        </div>
        <div class="img6">
          <img src="../../assets/media/gdfplay_mockup.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>