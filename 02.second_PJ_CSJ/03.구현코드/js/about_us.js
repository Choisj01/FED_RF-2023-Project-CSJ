// about us 페이지 JS -about_us.js

// 스크롤시 강아지 박스 이미지 애니메이션 보이기
const listItems = document.querySelectorAll('.profile-ani li');
const windowHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  listItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < windowHeight * 0.6) {
        item.style.opacity = '1'; /* 스크롤되면 이미지를 투명에서 보이도록 변경 */
      if (item.classList.contains('item1')) {
        item.style.transform = 'translateX(10px) rotate(-20deg)';
      } else if (item.classList.contains('item2')) {
        item.style.transform = 'translateX(0px) rotate(0deg)';
      } else if (item.classList.contains('item3')) {
        item.style.transform = 'translateX(10px) rotate(20deg)';
      }
    } else {
      item.style.transform = 'none';
    }
  });
});

