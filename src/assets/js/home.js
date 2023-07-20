$(document).ready(function(){
  // fullpage
  $('#fullpage').fullpage({
    anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6', 'sec7', 'sec8'],
    scrollingSpeed: 700,
    // scrollBar: true,
    onLeave: function(origin, destination, direction) {
      // 빠른전환으로 이벤트중복시 fullpage와 swiper전환시점 분리막기
      $('#fullpage').on('scroll touchmove mousewheel', function(event) {                    
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
      swiper.map((item) => item.mousewheel.disable());
      // swiper.mousewheel.disable();
    },
    afterLoad: function(anchorLink, index) {      
      // 전환이 끝난후 이벤트풀기                               
      $('#fullpage').off('scroll mousewheel');      
      if(!$(".fp-completely .swiper-wrapper").length > 0) $('#fullpage').off('touchmove'); // 모바일분기
      if(swiper) swiper.map((item) => item.mousewheel.enable());
      // if(swiper) swiper.mousewheel.enable();    
      if(!$(".sec3").hasClass("active")) $.fn.fullpage.setAllowScrolling(true); // 슬라이드 섹션을 벗어나면 휠풀어주기
      if(!$(".sec4").hasClass("active")) $.fn.fullpage.setAllowScrolling(true);
    }
  });

  // swiper
  var sec3 = $(".sec3 .swiper-slide").length;
  var sec4 = $(".sec4 .swiper-slide").length;
  var sec5 = $(".sec5 .swiper-slide").length;
  var sec6 = $(".sec6 .swiper-slide").length;
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: false,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    on: {
      slideChange: function(){        
        var idx = this.activeIndex;
        // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
        if(this.activeIndex != 0 && idx != sec3) $.fn.fullpage.setAllowScrolling(false);
        if(sec3 == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) //슬라이드가 2개밖에 없을때

        if(this.activeIndex != 0 && idx != sec4) $.fn.fullpage.setAllowScrolling(false);
        if(sec4 == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false)

        if(this.activeIndex != 0 && idx != sec5) $.fn.fullpage.setAllowScrolling(false);
        if(sec5 == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false)

        if(this.activeIndex != 0 && idx != sec6) $.fn.fullpage.setAllowScrolling(false);
        if(sec6 == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false)
        // console.log('즉시 : ' + idx);
      },  
      slideChangeTransitionEnd: function(){
        var idx = this.activeIndex;
        // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
        if(idx == 0 || idx >= sec3-1) $.fn.fullpage.setAllowScrolling(true);
        if(idx == 0 || idx >= sec4-1) $.fn.fullpage.setAllowScrolling(true);
        if(idx == 0 || idx >= sec5-1) $.fn.fullpage.setAllowScrolling(true);
        if(idx == 0 || idx >= sec6-1) $.fn.fullpage.setAllowScrolling(true);
        // console.log('전환후 : ' + idx);     
      },
      touchMove: function(e) {        
        var startY = e.touches.startY;
        setTimeout(function(){
          if(startY > e.touches.currentY) swiper.map((item) => item.slideNext());
          // if(startY > e.touches.currentY) swiper.slideNext();  
          else swiper.map((item) => item.slidePrev());
          // else swiper.slidePrev();
        },100);        
      },
    }, 
  });            
});