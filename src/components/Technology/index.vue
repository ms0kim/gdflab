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
  <div class="content technology_menu">
    <HeaderNav class="black"/>
    <div id="mainScroll">
      <div class="con">
        <div class="con1">
          <h2>
            IT 서비스를 책임질 AI 화질개선<br>
            솔루션을 선보이는 지디에프랩입니다
          </h2>
          <ul>
            <li>
              <div>
                <h4>AI pre-processing</h4>
                <p>
                  자체 핵심 AI 모델 개발<br>
                  고도화 학습 기술 보유
                </p>    
              </div>     
            </li>
            <li>
              <div>
                <h4>AI image/video upscaler</h4>
                <p>
                  AI 업스케일링으로 이미지/영상 품질 개선<br>
                  노이즈 제거와 선명한 고화질 기술 제공
                </p>    
              </div>     
            </li>
            <li>
              <div>
                <h4>Mobile edge</h4>
                <p>
                  실시간 모바일 화질개선 AI<br>
                  통신망 절감 SDK 기술 보유
                </p>
              </div>         
            </li>
            <li>
              <div>
                <h4>VR/XR</h4>
                <p>
                  HMD에서 연동 가능한<br>
                  실시간 화질개선 AI 기술 보유
                </p>
              </div>         
            </li>
          </ul>
        </div>
        <div class="con2">
          <h3>적용 가능 산업</h3>
          <ul>
            <li>
              <img src="../../assets/media/mobile.jpg" alt="">
              <p>Mobile & Communication</p>
            </li>
            <li>
              <img src="../../assets/media/sdk.jpg" alt="">
              <p>IoT</p>
            </li>
            <li>
              <img src="../../assets/media/vehicle.jpg" alt="">
              <p>Vehicle/Flight IT</p>
            </li>
            <li>
              <img src="../../assets/media/enter.jpg" alt="">
              <p>Entertainment</p>
            </li>
            <li>
              <img src="../../assets/media/security.jpg" alt="">
              <p>Security</p>
            </li>
            <li>
              <img src="../../assets/media/telecom.jpg" alt="">
              <p>Telecommunication / Government Organization</p>
            </li>
          </ul>
        </div>
        <div class="con3">
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
        <div class="con4">
          <h3>미래전략</h3>
          <ul>
            <li>
              <div>
                <h3>2025-2026</h3>
                <h4>기업공개</h4>
              </div>
              <p>
                일반영상, cctv, iot, 바이오, 항공용 ai sr 고도화 ai sr api 플랫폼화, gdfplay앱 유료화
              </p>
            </li>
            <li>
              <div>
                <h3>2023-2024</h3>
                <h4>실시간 ai 화질개선앱 출시</h4>
              </div>
              <p>
                앱 전용 실시간 sr기술 상용화 ai sr 적용 분야 다각화
              </p>
            </li>
            <li>
              <div>
                <h3>2021-2022</h3>
                <h4>콘텐츠 ai 리마스터링 상용화</h4>
              </div>
              <p>
                ai리마스터링 서비스/pc 툴 출시 국내외 콘텐츠사업자 poc 진행
              </p>
            </li>
          </ul>
        </div>
        <div class="con5">
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
      </div>

      <BottomFooter />
    </div>
  </div>
</template>