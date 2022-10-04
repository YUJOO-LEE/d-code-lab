//API KEY : AIzaSyAKqZ1Dx9awi1lCS84qziASeQYZJqLxLSM
//PLAY LIST : PLtt429gshWMqoquSkvSmMG1mugdj5GbSV

const vidList = document.querySelector('.vidList');
const key = 'AIzaSyAKqZ1Dx9awi1lCS84qziASeQYZJqLxLSM';
const playlist = 'PLtt429gshWMqoquSkvSmMG1mugdj5GbSV';
const resultNum = 6;

const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${resultNum}`;

fetch(url)
  .then((data)=>{
    return data.json();
  })
  .then((json)=>{
    const items = json.items;

    let result = '';
    items.map((item)=>{

      let title = item.snippet.title;
      let desc = item.snippet.description;
      let date = item.snippet.publishedAt;

      if(title.length > 30) { title = title.substring(0, 30) + '...' }
      if(desc.length > 100) { desc = desc.substring(0, 100) + '...' }
      date = date.split('T')[0];

      result += `
        <article>
          <a href="${item.snippet.resourceId.videoId}" class="pic">
            <img src="${item.snippet.thumbnails.medium.url}">
          </a>
          <div class="con">
            <h2>${title}</h2>
            <p>${desc}</p>
            <span>${date}</span>
          </div>
        </article>
      `;
    })

    vidList.innerHTML = result;
  })

  vidList.addEventListener('click', (e)=>{
    e.preventDefault();

    if (!e.target.closest('a')) return; // 이벤트 타겟 a가 아닐 시 return
    
    const videoId = e.target.closest('a').getAttribute('href');
    let pop = document.createElement('figure');
    pop.classList.add('pop');
    pop.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" width="100%" height="100%" allowfullscreen>이 브라우저는 iframe을 지원하지 않습니다.</iframe>
      <span class="btnClose">close</span>
      `;
    vidList.append(pop);

  })

  vidList.addEventListener('click', (e)=>{
    const pop = vidList.querySelector('.pop');

    if (!pop) return;

    const btnClose = pop.querySelector('.btnClose');
    if (e.target === pop || e.target === btnClose) pop.remove();
  })