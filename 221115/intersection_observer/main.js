/*
intersection observer
현재 뷰포트에 보이거나 사라지는 요소들의 변화를 자동 감지해 다양한 정보값을 반환
*/

const section = document.querySelector('section');
const boxs = section.querySelectorAll('article');

let options = {
  root: section,
  rootMargin: '0px',
  threshold: 0.5
}

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry);
    entry.target.classList.toggle('on', entry.isIntersecting);
    // boundingClientRect : 감시 요소의 가로, 세로, 위치, 넚이, 높이
    // intersectionRatio : 감시 요소의 현재 화면에서 보이는 영역 비율
    // intersectionRect : 현재 보이는 부분에 대한 정보
    // isIntersecting : threshold 비율만큼 보여지고 있는지
    // rootBounds : 감시 요소의 상위 요소의 정보
    // target : 감시 대상 요소
    // time : 로드된 시점부터 감시 요소의 상태가 변경되기 까지의 시간
  })
}, options)
  // 화면에 보여지는 비율
  // 0 = 조금이라도 노출 시 isIntersecting: true
  // 1 = 완전히 노출 시 isIntersecting: true

boxs.forEach((box)=>{
  observer.observe(box);
  // 감시 요소 observer 에 등록
})