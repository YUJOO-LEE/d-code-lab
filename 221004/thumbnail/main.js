//API KEY : AIzaSyAKqZ1Dx9awi1lCS84qziASeQYZJqLxLSM
//PLAY LIST : PLtt429gshWMqoquSkvSmMG1mugdj5GbSV

const main = document.querySelector('main');
const key = 'AIzaSyAKqZ1Dx9awi1lCS84qziASeQYZJqLxLSM';
const playlist = 'PLtt429gshWMqoquSkvSmMG1mugdj5GbSV';
const resultNum = 3;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${resultNum}`;


fetch(url) // 브라우저 내장 함수
  .then((data)=>{
    //console.log(data);
    return data.json();
  })
  .then((json)=>{
    //console.log(json);
    const items = json.items;

    /*
    json배열

    '식별자' : [
      {객체},
      {객체},
      {객체}
    ]
    */
    let result = '';
    items.map((item) => {
      result += `
        <article>
          <a href="${item.snippet.resourceId.videoId}">
            <img src="${item.snippet.thumbnails.medium.url}">
          </a>
          <h1>${item.snippet.title}</h1>
          <p>${item.snippet.description}</p>
        </article>
      `;
    })

    main.innerHTML = result;
  })

main.addEventListener('click', (e)=>{
  e.preventDefault();

  const videoId = e.target.closest('article').querySelector('a').getAttribute('href');

  let pop = document.createElement('figure');
  pop.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0">이 브라우저는 iframe을 지원하지 않습니다.</iframe>
  `;
  main.append(pop);
})