/* 1차 프로젝트: shakeshack PJ(index2.html) - main.js  */
// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

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
}); ////////////// 로드구역 ////////////////
