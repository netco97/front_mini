const slider = document.querySelector('.slider');
let isSliding = false;

function slideLeft() {
if (!isSliding) {
isSliding = true;
slider.style.animation = 'none';
slider.style.transform = 'translateX(-100%)';
setTimeout(() => {
slider.style.animation = 'scroll 10s linear infinite';
isSliding = false;
}, 10); // 작은 지연을 추가하여 애니메이션을 다시 시작
}
}

// 이전 버튼 클릭 이벤트 처리
document.getElementById('prevButton').addEventListener('click', slideLeft);