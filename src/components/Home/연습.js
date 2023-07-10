$(() => {
  const scale = 117.5309;
  let value = scale;
  let prevValue = value;
  let activeSlide;
  let isFirst = true;

  const carousel = new Swiper(".swiper", {
    mousewheel: {
      eventsTarget: ".mousewheel-wrap",
    },
    speed: 500,
    allowTouchMove: false,
    centeredSlides: true,
    slidesPerView: "auto",
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      depth: $(window).width() / 2,
      slideShadows: false,
      scale: 0.8,
    },
    on: {
      afterInit: (swiper) => {
        activeSlide = swiper;
      },
      enable: (swiper) => {
        if (swiper.isBeginning) {
          if (isFirst) {
            isFirst = false;
            swiper.allowSlideNext = false;
          }
        }
      },
      // after slide change
      slideChangeTransitionEnd: (swiper) => {
        if (swiper.isBeginning) {
          isFirst = true;
        }
      },
      // before slide change
      beforeTransitionStart: (swiper) => {
        activeSlide = swiper;
        if (swiper.visibleSlides.hasClass("last")) {
          swiper.allowSlideNext = false;
          isFirst = true;
        } else {
          swiper.allowSlideNext = true;
        }

        if (swiper.isBeginning) {
          isFirst = true;
          $(".section2").scrollTop($(".section2").scrollTop() - 10);
        }
      },
      scroll: (swiper, event) => {
        if (event.wheelDelta / 120 < 0) {
          // 첫 번째 슬라이드
          if (swiper.isBeginning) {
            // 예측 스크롤 방지
            if (!isFirst) {
              // 다음 슬라이드 이동 허용
              swiper.allowSlideNext = true;
              // fullpage 비활성
              fullpage_api.setAllowScrolling(false);

              // swiper 활성
              carousel.enable();
            }
          }
          // 마지막 슬라이드
          if (activeSlide.visibleSlides.hasClass("last")) {
            // 예측 스크롤 방지
            if (isFirst) {
              isFirst = false;
              fullpage_api.setAllowScrolling(false);
            } else {
              // 다음 섹션으로 이동
              fullpage_api.moveTo(3);
              //   fullpage_api.moveSectionDown();
            }
          }
        } else {
          // 첫 번째 슬라이드
          if (swiper.isBeginning) {
            setTimeout(() => {
              // 섹션 스크롤 활성
              fullpage_api.setAllowScrolling(true);
              carousel.disable();
            }, 500);
          }
        }
      },
    },
  });

  const fullpageOptions = {
    keyboardScrolling: false,
    afterRender: () => {
      fullpage_api.setAllowScrolling(false);

      setComponentColor(true);

      // (S) loader
      const $loaderAnimationEl = $(".loader .loader-text-container").find(
        "span.rotate"
      );
      const elementTotal = $(".loader .loader-text-container").find(
        "span"
      ).length;
      let fadeOutCallback = () => {};
      for (let i = 0; i < elementTotal; i++) {
        setTimeout(() => {
          if (i == elementTotal - 1) {
            fadeOutCallback = () => {
              $({ deg: 0 }).animate(
                { deg: 360 },
                {
                  duration: 1600,
                  step: function (now) {
                    $loaderAnimationEl.children("img").css({
                      transform: "rotate(" + now + "deg)",
                    });
                  },
                  complete: () => {
                    for (let i = 0; i < elementTotal; i++) {
                      setTimeout(() => {
                        $(".loader .loader-text-container")
                          .find("span")
                          .eq(i)
                          .removeClass("show")
                          .addClass("hide");
                        if (i == elementTotal - 1) {
                          setTimeout(() => {
                            $(".loader").fadeOut(() => {
                              $(".loader").remove();
                              fullpage_api.setAllowScrolling(true);
                            });
                          }, 400);
                        }
                      }, 150 * i);
                    }
                  },
                }
              );
            };
          }
          $(".loader .loader-text-container")
            .find("span")
            .eq(i)
            .addClass("show", fadeOutCallback());
        }, 150 * i);
      }
      // (E) loader

      const sectionLength = $(".section:not(.footer)").length;
      const totalIdx = sectionLength < 10 ? "0" + sectionLength : sectionLength;
      $("#fpPagination .total-index").html(totalIdx);
    },
    beforeLeave: (origin, destination, direction) => {
      //   if ($(destination.item).hasClass("section2")) {
      //     if (activeSlide.activeIndex === 2) {
      //       carousel.enable();
      //     }
      //   } else {
      //     carousel.disable();
      //     fullpage_api.setAllowScrolling(true);
      //   }
      // 포트폴리오 관련 section
      if ($(origin.item).hasClass("portfolio")) {
        if (!$(origin.item).hasClass("detail")) {
          if (direction == "down") {
            $(origin.item).addClass("detail");
            //   if ($(origin.item).hasClass("section1")) {
            //     $(origin.item)
            //       .find("h6.project-title")
            //       .text("랜드로버 온라인 스토어");
            //   }
            // if ($(origin.item).hasClass("section9")) {
            //   $(origin.item)
            //     .find("h6.project-title")
            //     .text("[SK렌터카] 타고페이");
            // }
            return false;
          }
        } else {
          //   section9.text("[SK렌터카] 타고페이");
          if (direction == "up") {
            $(origin.item).removeClass("detail");
            //   if ($(origin.item).hasClass("section1")) {
            //     $(origin.item)
            //       .find("h6.project-title")
            //       .text("Landrover Online Store");
            //   }
            // if ($(origin.item).hasClass("section9")) {
            //   $(origin.item)
            //     .find("h6.project-title")
            //     .text("타고페이 디지털 필름 - 마트편");
            // }
            return false;
          }
        }
      }
    },
    onLeave: (origin, destination, direction) => {
      // pagination
      let currentIdx =
        destination.index < 10
          ? "0" + (destination.index + 1)
          : destination.index + 1;
      if ($(destination.item).hasClass("footer")) {
        currentIdx = "Back to Top";
        $("#fpPagination .total-index").html("");
        $("#fpPagination .current-index").addClass("btn-top pointer");
      } else {
        const sectionLength = $(".section:not(.footer)").length;
        const totalIdx =
          sectionLength < 10 ? "0" + sectionLength : sectionLength;
        $("#fpPagination .total-index").html(totalIdx);

        $("#fpPagination .current-index").removeClass("btn-top pointer");
      }
      $("#fpPagination .current-index").html(currentIdx);
      setComponentColor($(destination.item).hasClass("dark"));
      if ($(destination.item).hasClass("section2") && direction == "up") {
        setComponentColor(false);
      }

      // if ($(destination.item).hasClass("section1")) {
      //     $(destination.item).find("video")[0].play();
      // }
    },
    afterLoad: (origin, destination, direction) => {
      if (destination.isFirst) {
        // pagination
        const currentIdx =
          destination.index < 10
            ? "0" + (destination.index + 1)
            : destination.index + 1;
        $("#fpPagination .current-index").html(currentIdx);
      }

      if ($(destination.item).hasClass("section2")) {
        carousel.enable();
        fullpage_api.setAllowScrolling(false);
      } else {
        carousel.disable();
        fullpage_api.setAllowScrolling(true);
      }
    },
    onScrollOverflow: function (section, slide, position, direction) {
      // (S) 2번째 section 스크롤 애니메이션
      // transform size
      if ($(section.item).hasClass("section2")) {
        if (activeSlide.isBeginning) {
          const translate = 9;
          const $scaleTarget = $(".scroll-scale-container");
          const wheelCnt = position / $(section.item).height();
          const refVal = wheelCnt * scale;

          value = scale - refVal;
          if (!carousel.enabled) {
            if (direction == "down") {
              carousel.enable();
              fullpage_api.setAllowScrolling(false);
            }
          }

          //   if (!carousel.enabled) {
          //     $scaleTarget
          //       .css("borderSpacing", prevValue)
          //       .stop()
          //       .animate(
          //         { borderSpacing: value },
          //         {
          //           step: function (now) {
          //             if (now <= scale) {
          //               $(this).css(
          //                 "transform",
          //                 "scale(" +
          //                   (now < 1 ? 1 : now) +
          //                   ") translate3d(0, " +
          //                   translate +
          //                   "px ,0)"
          //               );
          //               prevValue = value;
          //             }
          //             if (
          //               position +
          //                 $(section.item).height() -
          //                 $(section.item)[0].scrollHeight >=
          //               0
          //             ) {
          //               // swiper 활성화
          //               carousel.enable();
          //               fullpage_api.setAllowScrolling(false);
          //             }
          //           },
          //           duration: 230,
          //           easing: "linear",
          //         }
          //       );
          //   }
          // 1. 기존 사이즈보다 작아졌을 때
          //   if (value < scale) {
          //     // header, footer 어두운색으로 변경
          //     setComponentColor(false);
          //   } else {
          //     // header, footer 밝은색으로 변경
          //     setComponentColor(true);
          //   }
        }
      }
      // (E) 2번째 section 스크롤 애니메이션
    },
  };

  startFullpage(fullpageOptions);

  carousel.disable();

  $(document).on("click", ".btn-top", () => {
    fullpage_api.moveTo(1);
  });
});
