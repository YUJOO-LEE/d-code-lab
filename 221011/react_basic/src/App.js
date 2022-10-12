import './css/style.css';
import Footer from './components/Footer';
import Header from './components/Layout';
import Panels from './components/Panels';
import Btns from './components/Btns';
import { useRef, useState } from 'react';

/*
이미지 삽입
1. import image변수명 from '경로';
  필요한 자리에 변수명으로 불러옴

2. 필요한 자리에서 process.env.PUBLIC_URL로 public의 절대 경로를 찾아 그 안에 있는 파일 사용

class 사용 시 className으로 사용
style 속성은 객체 형태로 사용
*/

function App() {
  const arr = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers'];
  const deg = 360 / arr.length;
  const [txt, setTxt] = useState(arr);
  const showArr = txt.map((data,index)=>{ return <Panels key={index} num={index} txt={data} deg={deg}/> });
  const frame = useRef(null);

  /*
  key 값 부여
  중복 요소 없어야 함
  
  매개변수 대신 prop으로 넘기기
  */

  return (
    <figure>
      <Header/>
        <section ref={frame}>
          {showArr}
        </section>
        <Btns deg={deg} frame={frame}/>
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
