// Second PJ(cotieshop) 메인 JS - main.js

import dFn from './dom.js';


window.addEventListener('scroll',showFn)

const winH = window.innerHeight;

// console.log(showEle);

// 1
const showEle = dFn.qs('.show-ele');
showEle.style.opacity = 0;
showEle.style.transform = 'translateX(-100%) rotate(360deg)';
showEle.style.transition = '.4s ease-in-out';

// 2
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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

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