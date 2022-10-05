// key : 67f7c54ac9fe4dd292e245fbb1302b24
// buddyIcon : http://farm{icon-farm}.staticflickr.com/{icon-server}/buddyicons/{nsid}.jpg

const key = '67f7c54ac9fe4dd292e245fbb1302b24';
const method1 = 'flickr.interestingness.getList';
const method2 = 'flickr.photos.search';
const base = 'https://www.flickr.com/services/rest?';
const perPage = 500;
const format = 'json';
const url1 = `${base}method=${method1}&api_key=${key}
&per_page=${perPage}&format=${format}&nojsoncallback=1`;
const url2 = `${base}method=${method2}&api_key=${key}
&per_page=${perPage}&format=${format}&nojsoncallback=1&tags=바다&privacy_filter=1`;

const list = document.querySelector('#list');
const loading = document.querySelector('#loading');

callData(url1);

function callData(url){
  fetch(url)
  .then(data=>{
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

    htmls += `
      <li class="item">
        <div>
          <a href="${original}">
            <img src="${thumbnail}">
          </a>
          <p>${item.title}</p>
        </div>
      </li>
    `;
  })

  list.innerHTML = htmls;
}

function delayLoading(){
  // 이미지 로딩 확인
  // 동적으로 생성된 이미지 갯수 구함
  const imgs = list.querySelectorAll('img');
  const len = imgs.length;
  let count = 0;
  loading.querySelector('p').textContent = count;
  
  for (let el of imgs) {
    el.addEventListener('load', ()=>{
      count++;
      loading.querySelector('p').textContent = Math.floor(count/len * 100);

      if(count === len) {
        loading.querySelector('p').textContent = '100';
        isoLayout();
      }
      // 로딩된 이미지 갯수가 리스트 총 갯수와 같아지면 함수실행
    })

    el.addEventListener('error', ()=>{
      el.closest('.item').style.display = 'none';
    })
  }
}

function isoLayout(){

  loading.classList.add('off');
  list.classList.add('on');
  // 함수 호출 시 초기모션 추가
  // 모든 이미지가 로딩될 때 까지 isotope 적용되지 않으면 지저분해 보이기 때문에
  // 완성된 레이아웃 보여주기 위함

  new Isotope( list, {
    // options
    itemSelector: '.item',
    columnWidth: '.item',
    transitionDuration: '0.5s'
  });
}