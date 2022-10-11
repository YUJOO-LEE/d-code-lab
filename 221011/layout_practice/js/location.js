// 71bc6dc9e23e2fddadaa922419145b18

const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
const trafficOn = document.querySelectorAll('.traffic li')[0];
const trafficOff = document.querySelectorAll('.traffic li')[1];
const branchBtns = document.querySelectorAll('.branch li');
let zoom = true;  // 줌 허용 여부

const options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.4893739, 126.7518249), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

const markerOptions = [
  {
    title: '본점',
    latLng: new kakao.maps.LatLng(37.4893739, 126.7518249),
    imgSrc: './img/marker1.png',
    imgSize: new kakao.maps.Size(232, 99),
    imgPos: {offset: new kakao.maps.Point(116, 99)},
    button: branchBtns[0]
  },
  {
    title: '지점1',
    latLng: new kakao.maps.LatLng(37.3917252, 126.4271172),
    imgSrc: './img/marker2.png',
    imgSize: new kakao.maps.Size(232, 99),
    imgPos: {offset: new kakao.maps.Point(116, 99)},
    button: branchBtns[1]
  },
  {
    title: '지점2',
    latLng: new kakao.maps.LatLng(37.5293136, 126.8751264),
    imgSrc: './img/marker3.png',
    imgSize: new kakao.maps.Size(232, 99),
    imgPos: {offset: new kakao.maps.Point(116, 99)},
    button: branchBtns[2]
  }
]

for (let i = 0; i < markerOptions.length; i++) {
  // 여러 개 마커 생성
  new kakao.maps.Marker({
    map: map,
    position: markerOptions[i].latLng,
    title: markerOptions[i].title,
    image: new kakao.maps.MarkerImage(
      markerOptions[i].imgSrc,
      markerOptions[i].imgSize,
      markerOptions[i].imgPos
    )
  })

  // 버튼에 이벤트 부여해서 지도 중심 이동
  markerOptions[i].button.addEventListener('click', (e)=>{
    e.preventDefault();

    for (let el of branchBtns) el.classList.remove('on');
    markerOptions[i].button.classList.add('on');
    moveTo(markerOptions[i].latLng);
  })
}

// 이동 이벤트
function moveTo(target){
  map.setCenter(target);
}

// 교통 트래픽 표시
trafficOn.addEventListener('click', (e)=>{
  e.preventDefault();
  if (trafficOn.classList.contains('on')) return;

  trafficOff.classList.remove('on');
  trafficOn.classList.add('on');
  map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
})

// 교통 트래픽 표시 제거
trafficOff.addEventListener('click', (e)=>{
  e.preventDefault();
  if (trafficOff.classList.contains('on')) return;

  trafficOn.classList.remove('on');
  trafficOff.classList.add('on');
  map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
})

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
const mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

setZoomable(zoom);  // 줌 허용여부에 따라 줌 제어
function setZoomable(zoom){
  map.setZoomable(zoom);
}

// 브라우저 리사이즈 시 지도 중심 이동
window.addEventListener('resize', ()=>{
  const activeLi = document.querySelector('.branch li.on');
  const activeIndex = activeLi.dataset.index;
  moveTo(markerOptions[activeIndex].latLng);
})

