/* 1차 프로젝트: shakeshack PJ(index2.html) - main.js  */

// 부드러운 스크롤 적용
startSS();

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsEl = (ele,x) => ele.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
const qsaEl = (ele,x) => ele.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

const getBCR = (ele) => ele.getBoundingClientRect().top;

window.addEventListener("load", () => {
  // 변경 대상: #slide
  const slide = qs("#slide");

  setInterval(() => {
    // 2. 슬라이드 li 새로 읽기
    let eachOne = slide.querySelectorAll("li");

    //1.대상이동하기
    slide.style.left = "-100%";
    //2.트랜지션주기
    slide.style.transition = ".4s ease-in-out";
    // 이동시간 후 맨앞li 잘라서 맨뒤로 이동하기
    // appendChild(요소)
    setTimeout(() => {
      // 3.맨앞li 맨뒤로 이동
      slide.appendChild(eachOne[0]);
      // 4.slide left값 0
      slide.style.left = "0";
      // 5.트랜지션 없애기
      slide.style.transition = "none";
    }, 400);
  }, 3000); //////// 인터발함수 /////////////

  const menuIcon = qsa(".menu-icon>ul>li");

  menuIcon.forEach((ele) => {
    addEvt(ele, "click", (e) => {
      // a요소 기본이동막기
      e.preventDefault();
      // 클래스 모두 지우기
      menuIcon.forEach((el) => el.classList.remove("on"));
      // 해당요소만 클래스 on넣기
      ele.classList.add("on");

      // 하위 a요소의 클래스명 읽기 (리스트 클래스명과 같음!)
      let clsName = ele.querySelector("a").getAttribute("class");
      console.log("클래스명:", clsName);

      // 메뉴 리스트박스 클래스명으로 새로 생성함수 호출!
      goSlideMenu("." + clsName);
    });
  });

  // 슬라이드 메뉴 함수 //////////
  function goSlideMenu(clsName) {
    // clsName - 분류별 클래스명
    // 이동버튼
    const btns = qsa(".btns-box button");
    // 슬라이드
    const ssMenu = qs(".menu-list>" + clsName);
    ssMenu.style.left = "0px";
    // 슬라이드 순번곱할 변수
    let sldNum = 0;
    console.log("한계수:", ssMenu);
    // 슬라이드 이동 한계수
    const LIMIT_NUM = ssMenu.querySelectorAll("li").length - 4;
    console.log("한계수:", LIMIT_NUM);

    // 전체 메뉴 리스트
    const menuList = qsa(".menu-list>ul");

    // 메뉴 리스트 모두 숨기고 해당메뉴만 보이기
    menuList.forEach((ele) => ele.classList.remove("on"));
    ssMenu.classList.add("on");

    // 한계수가 0보다 클때만 버튼 클릭기능 넣기
    if (LIMIT_NUM > 0) {
      btns.forEach((ele) => {
        addEvt(ele, "click", () => {
          let isR = ele.classList.contains("btnR");
          console.log("오른쪽?", isR);

          if (isR) {
            sldNum++;
            if (sldNum > LIMIT_NUM) sldNum = LIMIT_NUM;
          } else {
            sldNum--;
            if (sldNum < 0) sldNum = 0;
          }
          ssMenu.style.left = -380 * sldNum + "px";
          ssMenu.style.transition = "1.2s";
        }); //////// click //////////
      });
    } /////////// if ///////////////
  } ////////////// goSlideMenu 함수 /////////

  // 최초호출(첫메뉴인 버거를 보냄)
  goSlideMenu(".burger");
}); ////////////// 로드구역 ////////////////


const menuIcon = qs('.menu-icon');
const winH = window.innerHeight;
// BCR값
let posY = 0;
// 변경반영여부(0-반영전,1-반영후)
let stsChg = 0;

addEvt(window,'scroll',()=>{
    posY = getBCR(menuIcon)
    // console.log(winH,getBCR(menuIcon));
    if((posY > winH || posY < -330)  && !stsChg){ 
        
        stsChg = 1;
        qsEl(menuIcon,'ul>li').click();
    }
    else if((posY <= winH && posY >= -330) && stsChg) {
        stsChg = 0;
    }
    console.log('적용상태값:',stsChg);
}); ///////// scroll ////////////


