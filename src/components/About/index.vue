<script>
  import HeaderNav from '../HeaderNav.vue';
  import BottomNav from '../BottomNav.vue';
  import BottomFooter from '../BottomFooter.vue';

  export default {
    data(){
      return{

      }
    },
    components: {
      HeaderNav,
      BottomNav,
      BottomFooter,
    }
  }
</script>

<template>
  <div class="content about">
    <HeaderNav />
    <div class="aboutImg">
      <h2>GDFLAB with Innovative AI Technology</h2>
      <div class="back"></div>
      <img src="../../assets/media/about.jpg" alt="">
    </div>
    <div class="story">
      <h2>
        혁신적인 AI 기술로<br>
        화질의 차별 없이 누구나<br>
        고화질로 즐길 수 있도록<br>
        세계적으로 나아가는 우리는<br>
        지디에프랩입니다
      </h2>
    </div>
    <div class="work">
      <ul class="text">
        <li class="title">
          <h4>Work</h4>
        </li>
        <li>
          <h3>AI를 연구합니다</h3>
          <p>
            AI를 학습하고 연구하며<br>
            더 혁신적인 AI 모델을 만들어냅니다
          </p>
        </li>
        <li>
          <h3>더 편리하게 개발합니다</h3>
          <p>
            AI를 학습하고 연구하며<br>
            더 혁신적인 AI 모델을 만들어냅니다
          </p>
        </li>
        <li>
          <h3>누구나 서비스를 이용합니다</h3>
          <p>
            AI를 학습하고 연구하며<br>
            더 혁신적인 AI 모델을 만들어냅니다
          </p>
        </li>
        <li>
          <h3>부족한 부분을 채웁니다</h3>
          <p>
            AI를 학습하고 연구하며<br>
            더 혁신적인 AI 모델을 만들어냅니다
          </p>
        </li>
      </ul>
    </div>
    <div class="team">
      <h4>Team</h4>
      <ul>
        <li>
          <div></div>
          <div class="p">
            <h3>Depp</h3>
            <p>GDFLAB CEO</p>
          </div>
        </li>
        <li>
          <div></div>
          <div class="p">
            <h3>Mklee</h3>
            <p>GDFLAB CEO</p>
          </div>
        </li>
        <li>
          <div></div>
          <div class="p">
            <h3>Nick</h3>
            <p>GDFLAB CEO</p>
          </div>
        </li>
        <li>
          <div></div>
          <div class="p">
            <h3>James</h3>
            <p>GDFLAB CEO</p>
          </div>
        </li>
        <li>
          <div></div>
          <div class="p">
            <h3>Mudasar</h3>
            <p>GDFLAB CEO</p>
          </div>
        </li>
        <li>
          <div></div>
          <div class="p">
            <h3>Song</h3>
            <p>GDFLAB CEO</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="history">
      <h4>History</h4>
      <p>
        2018.03 주식회사 지디에프랩 법인 설립 신고<br>
        2019.03 기업부설연구소 R&D Center 설립 신고<br>
        2019.04 과기정통부 SW고성장클럽200 선정<br>
        2019.06 중기부 기술기반창업형R&D 사업 선정<br>
        2019.11 스타트업 박람회 SLUSH 100 선정<br>
        2020.06 지식재산 바우처 사업 선정<br>
        2020.06 AI 바우처사업- X-Ray 실시간 화질개선 엔진 납품<br>
        2020.07 영상 업스케일링 서비스 ‘pikaVue’ 출시<br>
        2020.09 AI 바우처사업 – T 커머스 VOD 추천 엔진 납품<br>
        2020.11 스타트업 박람회 SLUSH 100 선정<br>
        2021.05 가트너 Cool Vendor 선정<br>
        2021.09 AI 영상 리마스터링 실증 협약(TVING)<br>
        2022.04 CJ, ‘씨앗’ 1기 데모데이 우수상 수상<br>
        2022.07 Gartner IT Leaders AI Tool Vendor 선정<br>
        2022.10 D.N.A분야 180대 혁신기업 선정(NIA)<br>
        2023.01 개인용 AI 영상 화질 개선 툴 GDFEnhancer 출시<br>
        2023.02 모바일 AI Eco-streaming 앱 GDFPlay 출시
      </p>
    </div>
    <BottomFooter />
  </div>
</template>