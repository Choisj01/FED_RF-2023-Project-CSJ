// Second PJ(cotieshop) 메인 JS - main.js( 메인페이지 레이어 이미지 스크롤 이벤트)

import dFn from './dom.js';



window.addEventListener('scroll',showFn)

const winH = window.innerHeight;

// console.log(showEle);

// 1 레이어 이미지 - 장난감
const showEle = dFn.qs('.show-ele');
showEle.style.opacity = 0;
showEle.style.transform = 'translateX(-100%) rotate(360deg)';
showEle.style.transition = '.4s ease-in-out';

// 2 레이어 이미지 - 고양이 손 하트
const showEle2 = dFn.qs('.show-ele2');
showEle2.style.opacity = 0;
showEle2.style.transform = 'translateX(100%)';
showEle2.style.transition = '.4s ease-in-out';

// 지난 마지막 위치값
let lastDir = 0;

// 변경대상: 메뉴 - .header_inner
const hdr = dFn.qs('#header');

function showFn(){
  // 1
  let tg = dFn.getBCR(showEle);
  if(tg < winH/3){ showEle.style.opacity = 1;
  showEle.style.transform = 'translateX(0) rotate(0deg)';}

  // 2
  let tg2 = dFn.getBCR(showEle2);
  if(tg2 < winH/3){ showEle2.style.opacity = 1;
  showEle2.style.transform = 'translateX(0)';}

    // 상단 메뉴
    let scY = window.scrollY
    // 스크롤방향 : 현재위치값 - 지난번마지막위치값
    let scDir = scY - lastDir;
    console.log(scDir);

    // 양수는 아랫방향
    if(scDir>0){
      if(scY>=200 && scY<1000) hdr.classList.add('on')
      else if(scY>=1000) hdr.classList.add('on2')

    }
    // 음수는 윗방향
    else if(scDir<0){
      if(scY>200) hdr.classList.remove('on2');
      else hdr.classList.remove('on');
    }

    // 현재위치값이 이제는 지난번 마지막 위치값으로 저장
    lastDir = scY;


} /////////////// showFn 함수 /////////////

// // 메인페이지 new-product 영역 스와이퍼 JS
// var swiper = new Swiper(".mySwiper", {
//     // autoplay: {
//         // 자동넘김 시간
//         // delay: 2500,
//         // 상호작용(건들여놓기)에 대한 재가동 없애기 안씀(false)
//     //     disableOnInteraction: false,
//     // },
//     //   한번에 보일 슬라이드 수
//     slidesPerView: 4,
//     //   사이간격
//     spaceBetween: 20,
//     loop: true,
//     //   하단블릿
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     //   양쪽이동버튼
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     // 화면 크기별 분기
//     breakpoints: {
//         // when window width is >= 200px
//         200: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//         },
//         // when window width is >= 700px
//         700: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//         },
//         // when window width is >= 1000px
//         1000: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//     },
// });
// 아이템 스와이프 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // maxbone 로고 이미지 박스
  const imgTg = $(".image-container");
  imgTg.addClass('on');
  setTimeout(addOnClass,3000);
  function addOnClass(){
    imgTg.removeClass('on');
    setTimeout(()=>{
      imgTg.addClass('on');
      setTimeout(addOnClass,2000);      
    },1000)
  }

// cotielog li박스 스크롤 이벤트
const items = document.querySelectorAll('.cotielog-cont ul li');
const windowHeight = window.innerHeight;

function checkItems() {
  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < windowHeight * 0.8) {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', checkItems);

// 페이지 로딩 시 처음에 한 번 실행
checkItems();

//탑버튼 클릭이벤트
document.addEventListener("DOMContentLoaded", () => {
  let btt = document.querySelector("#go-top");
  // 문서 자체로 스크롤 양 확인
  // document.documentElement.scrollTop
  // 윈도우 기준 페이지 스크롤 양 확인
  // window.pageYOffset
  let scrollAmt;

  // 윈도우에 이벤트 스크롤 발생시 할일 함수
  window.addEventListener("scroll", () => {
      scrollAmt = window.pageYOffset;
      console.log(scrollAmt);

      if (scrollAmt > 300) {
          btt.classList.add("active");
          // btt.className='active';
      }
      else{
          btt.classList.remove("active");
      }
  }); ////////// scroll //////////

  btt.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
      });
  });
}); //////////////////로드 구역 //////////////


// 하단영역 회사정보 클릭시 보이고 닫기
$('.footer-info-txt').hide();

$('.footer-info').css({
  width:"723px",
  hight:"41px"
})
$('.footer-info a').click(e=>{
  e.preventDefault();
  $('.footer-info-txt').slideToggle(500);

})


