import './css/style.css';
import Footer from './components/Footer';
import Header from './components/Layout';

/*
이미지 삽입
1. import image변수명 from '경로';
  필요한 자리에 변수명으로 불러옴

2. 필요한 자리에서 process.env.PUBLIC_URL로 public의 절대 경로를 찾아 그 안에 있는 파일 사용

class 사용 시 className으로 사용
style 속성은 객체 형태로 사용
*/

function App() {

  return (
    <figure>
      <Header/>
      <section>
        <article>
          <div className='inner'>
            <div className='pic'>
              <div className='dot'></div>
            </div>
            <div className='txt'>
              <h2>Title</h2>
              <p>Description</p>
            </div>
          </div>
        </article>
      </section>
      <Footer/>
    </figure>
  );

  // return 내 주석 {/*  */}으로 가능하나 되도록 밖에 쓰기
}

// return은 하나의 요소만 가능하므로 fragment <></> 감싸서 내보내기

export default App;


/*
내보내는 요소 첫번째글자 대문자 필수

하나만 내보낼 경우 
export default A;

하나 받을 경우
import A from './components/Layout';


여러개 내보낼 경우 객체로 리턴
export { A, B };

받아올때도 객체로 받아옴
import { A, B } from './components/Layout';

받아온 요소
<A />
 */
