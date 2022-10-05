// key : 67f7c54ac9fe4dd292e245fbb1302b24
// buddyIcon : http://farm{icon-farm}.staticflickr.com/{icon-server}/buddyicons/{nsid}.jpg
// //live.staticflickr.com/7832/buddyicons/30752088@N08.jpg

const key = '67f7c54ac9fe4dd292e245fbb1302b24';
const method1 = 'flickr.interestingness.getList';
const method2 = 'flickr.photos.search';
const base = 'https://www.flickr.com/services/rest?';
const perPage = 500;
const format = 'json';
const urlAll = `${base}method=${method1}&api_key=${key}
&per_page=${perPage}&format=${format}&nojsoncallback=1`;

const $list = document.querySelector('#list');
const $loading = document.querySelector('#loading');
const $searchBox = document.querySelector('#searchBox form');
const $input = $searchBox.querySelector('#search');

callData(urlAll);

$searchBox.addEventListener('submit', (e)=>{
  e.preventDefault();

  const tag = $input.value;
  const urlSearch = `${base}method=${method2}&api_key=${key}&per_page=${perPage}&format=${format}&nojsoncallback=1&tags=${tag}&privacy_filter=1`;
  callData(urlSearch);
})

function callData(url){
  $list.innerHTML = '';
  $loading.classList.remove('off');
  $list.classList.remove('on');
  $loading.querySelector('p').textContent = '0';

  fetch(url)
  .then(data=>{
    console.log(data);
    return data.json();
  })
  .then(json=>{
    const items = json.photos.photo;
    createList(items);
    delayLoading();
  })
}

function createList(items){
  let htmls = '';
  items.map(item=>{
    const thumbnail = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;
    const original = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;

    //live.staticflickr.com/7832/buddyicons/30752088@N08.jpg
    // <img src="http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg">
    htmls += `
      <li class="item">
        <div>
          <a href="${original}">
            <img src="${thumbnail}">
          </a>
          <p>${item.title}</p>
          <span>
            <strong>${item.owner}</strong>
            <img src="http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg">
          </span>
        </div>
      </li>
    `;
  })

  $list.innerHTML = htmls;
}

function delayLoading(){
  // 이미지 로딩 확인
  // 동적으로 생성된 이미지 갯수 구함
  const imgs = $list.querySelectorAll('img');
  const len = imgs.length;
  let count = 0;
  
  for (let el of imgs) {
    el.addEventListener('load', ()=>{
      count++;
      $loading.querySelector('p').textContent = Math.floor(count/len * 100);

      if(count === len) {
        $loading.querySelector('p').textContent = '100';
        isoLayout();
      }
      // 로딩된 이미지 갯수가 리스트 총 갯수와 같아지면 함수실행
    })

    el.addEventListener('error', ()=>{
      // el.closest('.item').style.display = 'none';
      // 에러 대상 완전히 지움

      el.closest('.item').querySelector('div a img').setAttribute('src', './img/k1.jpg');
      // thumbnail 엑박 방지

      el.closest('.item').querySelector('div span img').setAttribute('src', 'https://www.flickr.com/images/buddyicon.gif');
      // buddyIcon 엑박 방지
    })
  }
}

function isoLayout(){

  $loading.classList.add('off');
  $list.classList.add('on');
  // 함수 호출 시 초기모션 추가
  // 모든 이미지가 로딩될 때 까지 isotope 적용되지 않으면 지저분해 보이기 때문에
  // 완성된 레이아웃 보여주기 위함

  new Isotope( $list, {
    // options
    itemSelector: '.item',
    columnWidth: '.item',
    transitionDuration: '0.5s'
  });
}