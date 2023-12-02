// 밀크앤페퍼 페이지JS - milknpepper.js (레이어 이미지 스크롤시 보이기)

// 타이틀 레이어 이미지 스크롤시 보이기
const layer3 = document.querySelector('.mnp-layer3');
const layer4 = document.querySelector('.mnp-layer4');

function checkVisibility() {
  const topLayer3 = layer3.getBoundingClientRect().top;
  const topLayer4 = layer4.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (topLayer3 < windowHeight * 0.85) {
    layer3.style.opacity = '1';
  }

  if (topLayer4 < windowHeight * 0.85) {
    layer4.style.opacity = '1';
  }
}

function handleScroll() {
  checkVisibility();
}

window.addEventListener('scroll', handleScroll);

// 페이지 로딩 시 한 번 실행하여 초기 상태 확인
handleScroll();


