function sw(view, space) {
  let mode = {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    autoplay: {
      delay: 5000,
      reverseDirection: true,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  mode.slidesPerView = view;
  mode.spaceBetween = space;
  let swiper = new Swiper(".swiper", mode);
}

sw(3, 30);
// var container = document.querySelector(".map"); //지도를 담을 영역의 DOM 레퍼런스
// var options = {
//   //지도를 생성할 때 필요한 기본 옵션
//   center: new kakao.maps.LatLng(35.34321052355067, 127.02618932456708), //지도의 중심좌표.
//   level: 3, //지도의 레벨(확대, 축소 정도)
// };

// var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
let wd = 0;
window.addEventListener("resize", function (e) {
  wd = window.innerWidth;
  if (wd < 430) {
    sw(1, 0);
  } else {
    sw(3, 30);
  }
});

$(".menu").hide();

$(".m_close").click(function () {
  $(".menu").hide();
  $(".m_close").hide();
});
$(".m_bar").click(function () {
  $(".menu").show();
  $(".m_close").show();
});
