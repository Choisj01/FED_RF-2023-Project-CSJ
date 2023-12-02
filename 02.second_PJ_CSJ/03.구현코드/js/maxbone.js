//맥스본페이지 JS - maxbone.js (레이어 이미지 스크롤 이벤트,매거진 박스 스크롤이벤트)

// 멕스본 타이틀 박스 내 레이어 이미지 스크롤시 애니로 보이기
// 이미지 박스들을 가져옵니다.
const layer2 = document.querySelector('.mb-layer2 img');
const layer3 = document.querySelector('.mb-layer3 img');

let isVisible = false; // 이미지 박스가 보이는지 여부를 저장하는 변수

// 스크롤 이벤트 리스너를 추가합니다.
window.addEventListener('scroll', () => {
  // 이미지 박스가 아직 보이지 않는 상태이고 스크롤이 충분히 되었을 때 실행
  if (!isVisible && window.scrollY > window.innerHeight * 0.5) {
    isVisible = true; // 이미지 박스가 보이도록 표시

    // 이미지 박스가 보이도록 opacity를 변경하고 transform을 적용합니다.
    layer2.style.opacity = '1';
    layer3.style.opacity = '1';

    // 스크롤된 만큼의 수직 스크롤 위치에 따라 transform: rotate를 적용합니다.
    layer2.style.transform = `rotate(-10deg)`;
    layer3.style.transform = `rotate(20deg)`; // 반대 방향으로 회전
  }
});

//맥스본 매거진 이미지 박스 스크롤시 하니씩 보이기

const items1 = document.querySelectorAll('.cont-flex1 li');
const items2 = document.querySelectorAll('.cont-flex2 li');

function checkItems(items) {
  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight * 0.8) {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }
  });
}

function handleScroll() {
  checkItems(items1);
  checkItems(items2);
}

window.addEventListener('scroll', handleScroll);

// 페이지 로딩 시 한 번 실행하여 초기 상태 확인
handleScroll();



