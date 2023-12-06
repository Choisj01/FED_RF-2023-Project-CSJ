// Second PJ(cotieshop) 공통 JS - core.js(상단영역,스와이프)

import dFn from './dom.js';



window.addEventListener('scroll',showFn)

const winH = window.innerHeight;

// console.log(showEle);


// 지난 마지막 위치값
let lastDir = 0;

// 변경대상: 메뉴 - .header_inner
const hdr = dFn.qs('#header');

function showFn(){

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
// 페이지 이동시 
let pgNm = location.pathname.split('/');
pgNm = pgNm[pgNm.length-1].split('.')[0];

console.log(pgNm);
//스와이퍼 해당 페이지 적용
if(pgNm==="index"||pgNm==="sub1_petsochic"||pgNm==="sub2_maxbone"||pgNm==="sub3_milknpepper"){
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

} ////////////// 

  const imgTg = $(".image-container");
  imgTg.addClass('on');
  setTimeout(addOnClass,2500);
  function addOnClass(){
    imgTg.removeClass('on');
    setTimeout(()=>{
      imgTg.addClass('on');
      setTimeout(addOnClass,2000);      
    },500)
  }

  // const toggleButton = document.getElementById('toggleButton');
  // const footerInfoText = document.getElementById('footerInfoText');
  
  // toggleButton.addEventListener('click', function() {
  //     footerInfoText.classList.toggle('show');
  // });
  

 //화면 전환박스 js 
  $("body")
  .css({opacity:1})
  .append('<div class="pageCover"></div>');

  const pgCvr = $('.pageCover');

  $('.pageCover').html(`
    <div id="roaf-bx">
      <img id="roaf" src="./images/main/transition-collar-lead.svg" alt="svg이미지">  
      <img id="neck" src="./images/main/transition-collar-choker.svg" alt="svg이미지">  
    </div>
    <img id="paw" src="./images/main/transition-paw-rock.svg" alt="svg이미지">  
  
  `);
  
// 커버박스가 지연시간만큼 있다가 위로 올라감!
setTimeout(()=>{
  pgCvr.animate({top:"-100%"},500)
},3000);



const pgLoc = {
  "Brands":"sub1_petsochic",
  "PET SO CHIC":"sub1_petsochic",
  "MAXBONE":"sub2_maxbone",
  "MILK&PEPPER":"sub3_milknpepper",
  "Outdoor":"sub5_outdoor",
  "Indoor":"sub6_indoor",
  "Store":"sub7_cotielog"
}

$('.gnb a').click(e=>{
  e.preventDefault();
  let txt = $(e.currentTarget).text();
  console.log(txt)
  pgCvr.animate({height:"100vh"},500,()=>{
    
    location.href = pgLoc[txt]+'.html';
    pgCvr.delay(1000).animate({height:"0"})
  })
})


//탑버튼 클릭시 상단이동 
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
  $('.footer-info-txt').slideToggle(300);

})